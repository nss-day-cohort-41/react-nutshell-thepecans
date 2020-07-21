// Header and navbar by David Larsen

import React from "react"
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
                <img src={require("../images/pecan.png")} alt="nutshell logo" />
                <h1>nutshell</h1>
            </div>

            <nav className="navbar">
                {console.log(props.hasUser)}
                <ul>
                    <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/">
                            Dashboard
                        </NavLink>
                    </li>
                        {(props.location.pathname !== "/friends")
                            && <li>
                            <NavLink className="nav-link" activeClassName="hidden" exact to="/friends">
                                Friends
                            </NavLink>
                    </li>}
                    {(props.location.pathname !== "/messages")
                    && <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/messages">
                            Messages
                        </NavLink>
                    </li>}
                    {(props.location.pathname !== "/events")
                    && <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/events">
                            Events
                        </NavLink>
                    </li>}
                    {(props.location.pathname !== "/articles")
                    && <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/articles">
                            Articles
                        </NavLink>
                    </li>}
                    {(props.location.pathname !== "/tasks")
                    && <li>
                        <NavLink className="nav-link" activeClassName="hidden" exact to="/tasks">
                            Tasks
                        </NavLink>
                    </li>}
                </ul>
            </nav>

            <div className="current-user">
                {props.hasUser
                ? <>
                    <h2>Welcome, {sessionStorage.getItem("username")}!</h2>
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

        </header>
    )
}

export default withRouter(Header)