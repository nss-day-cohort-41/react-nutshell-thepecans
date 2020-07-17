import React, { useState } from "react"
import APIManager from "../../modules/APIManager"

const EventForm = props => {
    const [event, setEvent] = useState({ title: "", location: "", date: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...event }
        stateToChange[evt.target.id] = evt.target.value
        setEvent(stateToChange)
    }

    const constructNewEvent = evt => {
        evt.preventDefault()
        if (event.title === "" || event.location === "" || event.date === "") {
            window.alert("Please provide all information about the event")
        } else {
            setIsLoading(true)
            const newEvent = {
                title: event.title,
                location: event.location,
                date: new Date(`${event.date}T00:00:00`).getTime() / 1000,
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            APIManager.postNewItem("events", newEvent)
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
                            placeholder="Event Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="location"
                            placeholder="Event Location"
                            />
                        <label htmlFor="location">Location</label>
                        <input 
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="date"
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="button">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default EventForm