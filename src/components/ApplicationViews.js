// Initial file created by David Larsen

import { Route } from "react-router-dom"
import React from "react"
import Home from './home/Home.js'
import ArticleList from "./articles/ArticleList"
import ArticleForm from "./articles/ArticleForm"
import EditArticleForm from "./articles/EditArticleForm"
import FriendList from "./friends/FriendList.js"
import TaskList from "./tasks/TaskList"
import TaskForm from "./tasks/TaskForm"
import CompletedTaskList from "./tasks/completedTasks"
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EditEventForm from "./events/EditEventForm"
import Login from "./auth/Login"

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route 
                exact path="/"
                render={props => {
                    return <Home />
                }}
            />     
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />
         {/* article related routes  */}
         <Route
                exact path="/articles"
                render={props => {
                    return <ArticleList {...props} />
                }}
            />
            <Route
                path="/articles/new"
                render={props => {
                    return <ArticleForm {...props} />
                }}
            />
            <Route
                path="/articles/:articleId(\d+)/edit"
                render={props => {
                    return <EditArticleForm {...props} />
                }}
            />
            {/* event related routes  */}
            <Route
                exact path="/events"
                render={props => {
                    return <EventList {...props} />
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
        {/* friend related routes  */}
            <Route 
                path="/friends"
                render={props => {
                    return <FriendList {...props} />
                }}
            />

            <Route
                exact
                path="/tasks"
                render={props => {
                    return <TaskList {...props} />
                }}
            />
            <Route
                exact
                path="/completedTasks"
                render={props => {
                    return <CompletedTaskList {...props} />
                }}
            />
            <Route path="/tasks/new" render={(props) => {
                return <TaskForm {...props} />
            }} />

            {/* <Route path="/tasks" render={(props) => {
                return <TaskCheckbox {...props} />
            }} /> */}

        </>
    )
}

export default ApplicationViews