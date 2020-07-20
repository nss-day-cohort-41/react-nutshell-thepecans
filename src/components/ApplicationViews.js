// Initial file created by David Larsen

import { Route } from "react-router-dom"
import React from "react"
import Home from './home/Home.js'
import FriendList from "./friends/FriendList.js"
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EditEventForm from "./events/EditEventForm"

const ApplicationViews = (props) => {
    
    return (
        <>
            <Route 
                exact path="/"
                render={props => {
                    return <Home />
                }}
            />

        {/* event related routes  */}
            <Route
                exact path="/events"
                render={props => {
                    return <EventList {...props} />
                }}
            />

        {/* friend related routes  */}
            <Route 
                path="/friends"
                render={props => {
                    return <FriendList {...props} />
                }}
            />

            <Route
                path="/events/new"
                render={props => {
                    return <EventForm {...props} />
                }}
            />
            <Route
                path="/events/:eventId(\d+)/edit"
                render={props => {
                    return <EditEventForm {...props} />
                }}
            />
        </>
    )
}

export default ApplicationViews