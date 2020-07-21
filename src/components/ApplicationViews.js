// Initial file created by David Larsen

import { Route, Redirect } from "react-router-dom"
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
import RegistrationForm from "./auth/RegistrationForm"
import MessageList from './messages/MessageList'

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route 
                exact path="/"
                render={props => {
                    if (hasUser) {
                        return <Home {...props}/>
                    } else {
                        return <Redirect to="/login" />
                }
                }}
            />     
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />
            <Route path="/RegistrationForm" render={props => {
                return <RegistrationForm setUser={setUser} {...props} />
            }} />
            {/* article related routes  */}
            <Route
                exact path="/articles"
                render={props => {
                    if (hasUser) {
                        return <ArticleList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/articles/new"
                render={props => {
                    if (hasUser) {
                        return <ArticleForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/articles/:articleId(\d+)/edit"
                render={props => {
                    if (hasUser) {
                        return <EditArticleForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            {/* event related routes  */}
            <Route
                exact path="/events"
                render={props => {
                    if (hasUser) {
                        return <EventList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/events/new"
                render={props => {
                    if (hasUser) {
                        return <EventForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/events/:eventId(\d+)/edit"
                render={props => {
                    if (hasUser) {
                        return <EditEventForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
        {/* friend related routes  */}
            <Route 
                path="/friends"
                render={props => {
                    if (hasUser) {
                        return <FriendList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
        {/* task related routes  */}
            <Route
                exact
                path="/tasks"
                render={props => {
                    if (hasUser) {
                        return <TaskList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                exact
                path="/completedTasks"
                render={props => {
                    if (hasUser) {
                    return <CompletedTaskList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route path="/tasks/new" render={(props) => {
                if (hasUser) {
                    return <TaskForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route 
                path="/messages"
                render={props => {
                    if (hasUser) {
                        return <MessageList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            {/* <Route path="/tasks" render={(props) => {
                return <TaskCheckbox {...props} />
            }} /> */}

        </>
    )
}

export default ApplicationViews