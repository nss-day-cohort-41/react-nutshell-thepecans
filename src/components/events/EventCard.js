// EventCard by David Larsen
import React from "react"
import "./Event.css"

const EventCard = props => {

    // Parse date into proper display format
    const eventDate = new Date(props.event.date)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const eventDay = daysOfWeek[eventDate.getDay()]
    const parseDate = `${monthNames[eventDate.getMonth()]} ${eventDate.getDate()}`
    
    return (
        // Add additional class name to the first event in the list
        <div className={"item-card " + (props.firstEvent ? "event--first" : "") + (props.event.userId !== props.currentUserId ? "event--friend" : "")}>
            <div className="event--date"> 
                <p>{eventDay}</p>
                <h3>{parseDate}</h3>
            </div>
            <div className="event--description">
                <h4>{props.event.title}</h4>
                <p>{props.event.location}</p>
            </div>
            {props.event.userId === props.currentUserId
            ? <div className="event--buttons">
            <button type="button" className="card--button" onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</button>
            {props.deleteEvent
                && <button type="button" className="card--button" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
            }
            </div>
            : "" }
        </div>
    )
}

export default EventCard