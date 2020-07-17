// EventList component by David Larsen

import React, { useState, useEffect} from "react"
import ApiManager from "../../modules/ApiManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [firstEvent, setFirstEvent] = useState([])
    const [remainingEvents, setRemainingEvents] = useState([])

    useEffect(() => {
        ApiManager.getByUserId("events", parseInt(sessionStorage.getItem("credentials")))
        .then(eventsFromAPI => {
            // Eliminate all events before current date, agnostic of time
            const currentEvents = eventsFromAPI.filter(event => parseInt(event.date * 1000) >= new Date().setHours(0, 0, 0, 0))
            // Sort current and upcoming list in descending order
            const sortedEvents = currentEvents.sort((event1, event2) => event1.date - event2.date)
            setFirstEvent(sortedEvents[0])
            setRemainingEvents(sortedEvents.slice(1))
        })
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button" className="button" 
                    onClick={() => {props.history.push("/events/new")}}>Add Event
                </button>
            <div className="event--list">
            {/* Error prevention in case of no firstEvent */}
            { firstEvent && <EventCard key={firstEvent.id} event={firstEvent} firstEvent={true} {...props} /> }
                {remainingEvents.map(event => <EventCard key={event.id} event={event} firstEvent={false} {...props} />)}
            </div>
            </section>
        </>
    )
}

export default EventList