import React, { useState, useEffect} from "react"
import APIManager from "../../modules/APIManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [events, setEvents] = useState([])
    const [firstEvent, setFirstEvent] = useState([])

    useEffect(() => {
        APIManager.getById("events", parseInt(sessionStorage.getItem("credentials")))
        .then(eventsFromAPI => {
            // Sort events in descending order and update state
            const sortedEvents = eventsFromAPI.sort((event1, event2) => event1.date - event2.date)
            setEvents(sortedEvents)
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
                {events.map(event => <EventCard key={event.index} event={event} {...props} />)}
            </div>
        </>
    )
}

export default EventList