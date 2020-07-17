import { Route } from "react-router-dom"
import React from "react"
import EventList from "./events/EventList.js"
//import TaskList from "./tasks/TaskList"

const ApplicationViews = (props) => {
    
    return (
        <>
            <Route
                path="/events"
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
        </>
    )
}

export default ApplicationViews