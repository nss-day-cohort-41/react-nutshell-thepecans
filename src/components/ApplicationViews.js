import { Route } from "react-router-dom"
import React from "react"
import EventList from "./events/EventList.js"

const ApplicationViews = (props) => {
    
    return (
        <>
            <Route
                path="/events"
                render={props => {
                    return <EventList {...props} />
                }}
            />
        </>
    )
}

export default ApplicationViews