import React, { useState, useEffect} from "react"
import APIManager from "../../modules/APIManager"
import EventCard from "./EventCard"

const EventList = (props) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        APIManager.getAll("events").then(eventsFromAPI => setEvents(eventsFromAPI))
    }, [])

    return (
        <div className="events-list">
            {events.map(event => <EventCard key={event.id} event={event} {...props} />)}
        </div>
    )
}

export default EventList