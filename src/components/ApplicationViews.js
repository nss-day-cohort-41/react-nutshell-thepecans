import { Route } from "react-router-dom"
import React from "react"
import TaskList from "./tasks/TaskList"
import TaskForm from "./tasks/TaskForm"
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
            <Route
                path="/tasks"
                render={props => {
                    return <TaskList {...props} />
                }}
            />
            <Route path="/tasks/new" render={(props) => {
                return <TaskForm {...props} />
            }} />
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