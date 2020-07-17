import React from "react"
// import { Link } from "react-router-dom"

const EventCard = props => {

    const eventDate = new Date(props.event.date * 1000)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const parseDate = `${daysOfWeek[eventDate.getUTCDay()]}, ${monthNames[eventDate.getMonth()]} ${eventDate.getUTCDate()}, ${eventDate.getFullYear()}`
    
    return (
        <div className="item-card">

            <h3>{props.event.title}</h3>
            <p>Location: <span>{props.event.location}</span></p>
            <p>{parseDate}</p>

        </div>
    )
}

export default EventCard