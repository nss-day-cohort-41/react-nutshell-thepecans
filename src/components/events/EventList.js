import React, { useState, useEffect} from "react"
import APIManager from "../../modules/APIManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        APIManager.getById("events", parseInt(sessionStorage.getItem("credentials")))
        .then(eventsFromAPI => {
            // Sort events in descending order and update state
            const sortedEvents = eventsFromAPI.sort((event1, event2) => event2.date - event1.date)
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
            <div className="list-cards">
                {events.map(event => <EventCard key={event.id} event={event} {...props} />)}
            </div>
        </>
    )
}

export default EventList