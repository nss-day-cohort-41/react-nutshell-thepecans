import { Route } from "react-router-dom"
import React from "react"
import Home from './home/Home.js'
import EventList from "./events/EventList.js"
import FriendList from "./friends/FriendList.js"

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
                path="/events"
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

        </>
    )
}

export default ApplicationViews