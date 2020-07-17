import React from "react"
import "./Event.css"
// import { Link } from "react-router-dom"

const EventCard = props => {

    const eventDate = new Date(props.event.date * 1000)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const eventDay = daysOfWeek[eventDate.getDay()]
    const parseDate = `${monthNames[eventDate.getMonth()]} ${eventDate.getDate()}`
    
    return (
        <div className="item-card">
            <div className="event--date">
                <p>{eventDay}</p>
                <h3>{parseDate}</h3>
            </div>
            <div className="event--description">
                <h4>{props.event.title}</h4>
                <p>{props.event.location}</p>
            </div>
        </div>
    )
}

export default EventCard