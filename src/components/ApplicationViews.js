import { Route } from "react-router-dom"
import React from "react"
//import TaskList from "./tasks/TaskList"
import EventList from "./events/EventList"
import EventForm from "./events/Eventform"

const ApplicationViews = (props) => {
    
    return (
        <>
            <Route
                exact path="/events"
                render={props => {
                    return <EventList {...props} />
                }}
            />
            {/* <Route
                path="/tasks"
                render={props => {
                    return <TaskList {...props} />
                }}
            /> */}
            <Route
                path="/events/new"
                render={props => {
                    return <EventForm {...props} />
                }}
            />
        </>
    )
}

export default ApplicationViews