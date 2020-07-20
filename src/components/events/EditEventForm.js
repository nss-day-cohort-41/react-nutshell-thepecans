// EditEventForm by David Larsen

import React, { useState, useEffect } from "react"
import ApiManager from "../../modules/ApiManager"

const EventForm = props => {
    const [event, setEvent] = useState({ title: "", location: "", date: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...event }
        stateToChange[evt.target.id] = evt.target.value
        setEvent(stateToChange)
    }

    useEffect(() => {
        ApiManager.getExpanded("events", props.match.params.eventId)
        .then(event => {
            setEvent(event)
            setIsLoading(false)
        })
    }, [props.match.params.eventId])

    const updateEvent = evt => {
        evt.preventDefault()
        if (event.title === "" || event.location === "" || event.date === "") {
            window.alert("Please provide all information about the event")
        } else {
            setIsLoading(true)
            const editedEvent = {
                id: props.match.params.eventId,
                title: event.title,
                location: event.location,
                date: new Date(`${event.date.substr(0, 10)}T00:00:00`),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            ApiManager.editObject("events", editedEvent)
            .then(() => props.history.push("/events"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="entryForm">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            value={event.title}
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                            />
                        <label htmlFor="location">Location</label>
                        <input 
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date.substr(0, 10)}
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="button">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default EventForm