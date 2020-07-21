// Header and navbar by David Larsen

import React, { useState } from "react"
import {NavLink, withRouter } from "react-router-dom"
import "./Header.css"

const Header = props => {
    
    const handleLogout = () => {
        props.clearUser()
        props.history.push("/")
    }

    return (
        <header>
            <div className="site-title">
                <h1>Nutshell</h1>
            </div>
            <nav>
                <ul className="navbar">
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/friends">
                            Friends
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/messages">
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/events">
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/articles">
                            Articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/tasks">
                            Tasks
                        </NavLink>
                    </li>
                </ul>
                <div className="current-user">
                    {props.hasUser
                    ? <>
                        <h2>Welcome, user!</h2>
                        <div className="loginlogout" onClick={handleLogout}>
                            Logout
                        </div>
                    </>
                    : <div>
                        <NavLink className="loginlogout" to="/login">
                        Login
                    </NavLink>
                    </div>}
                </div>
            </nav>
        </header>
    )
}

export default withRouter(Header)