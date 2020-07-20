// EventList component by David Larsen

import React, { useState, useEffect} from "react"
import ApiManager from "../../modules/ApiManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [allEvents, setAllEvents] = useState([])
    const [firstEvent, setFirstEvent] = useState([])
    const [remainingEvents, setRemainingEvents] = useState([])

    const sortEvents = (eventsArray, friendsArray) => {
        // Get current user Id for reference
        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        // Elminate events that do not belong to the current user or his/her friends
        const relevantEvents = eventsArray.filter(event => {
            if (event.userId === currentUserId) {return true}
            return friendsArray.some(friend => friend.userId === event.userId)
        })
        // Eliminate all events before current date, agnostic of time
        const currentEvents = relevantEvents.filter(event => new Date(event.date) >= new Date().setHours(0, 0, 0, 0))
        // Sort current and upcoming list in descending order
        const sortedEvents = currentEvents.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
        // Find first event belonging to the current user
        const firstUserEvent = currentEvents.find(event => event.userId === currentUserId)
        setFirstEvent(firstUserEvent)
        // Then, remove the first user's event from the array to display the remaining events
        sortedEvents.splice(sortedEvents.indexOf(firstUserEvent), 1)
        setRemainingEvents(sortedEvents)
    }

    useEffect(() => {
        ApiManager.getFriends(parseInt(sessionStorage.getItem("credentials")))
        .then(friendsFromAPI => {
            ApiManager.getAll("events")
            .then(eventsFromAPI => {
                setAllEvents(eventsFromAPI)
                sortEvents(eventsFromAPI, friendsFromAPI)
            })
        })
    }, [])

    // Delete button calls this function to delete event, then pull the updated list of events and update state
    const deleteEvent = id => {
        ApiManager.deleteObject("events", id)
        .then(() => ApiManager.getByUserId("events", parseInt(sessionStorage.getItem("credentials"))))
        .then((eventsFromAPI) => sortEvents(eventsFromAPI))
    }

    return (
        <>
            <section className="section-content">
                <button type="button" className="section--button" 
                    onClick={() => {props.history.push("/events/new")}}>&#65291; Add Event
                </button>
            <div className="event--list">
            {/* Error prevention in case of no firstEvent */}
            { firstEvent && <EventCard key={firstEvent.id} event={firstEvent} deleteEvent={deleteEvent} firstEvent={true} {...props} /> }
                {remainingEvents.map(event => <EventCard key={event.id} event={event} deleteEvent={deleteEvent} firstEvent={false} {...props} />)}
            </div>
            </section>
        </>
    )
}

export default EventList