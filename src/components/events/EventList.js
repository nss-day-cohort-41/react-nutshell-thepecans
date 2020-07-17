// EventList component by David Larsen

import React, { useState, useEffect} from "react"
import ApiManager from "../../modules/ApiManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [events, setEvents] = useState([])
    const [firstEvent, setFirstEvent] = useState([])

    useEffect(() => {
        ApiManager.getByUserId("events", parseInt(sessionStorage.getItem("credentials")))
        .then(eventsFromAPI => {
            // Sort events in descending order and update state
            const sortedEvents = eventsFromAPI.sort((event1, event2) => event1.date - event2.date)
            const currentEvents = sortedEvents.filter(event => parseInt(event.date * 1000) >= new Date().setHours(0, 0, 0, 0))
            setFirstEvent(currentEvents[0])
            setEvents(currentEvents)
        })
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button" className="button" 
                    onClick={() => {props.history.push("/events/new")}}>Add Event
                </button>
            </section>
            <div className="event--list">
                {events.map(event => <EventCard key={event.id} event={event} {...props} />)}
            </div>
        </>
    )
}

export default EventList