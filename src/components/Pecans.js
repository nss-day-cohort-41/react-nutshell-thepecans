// Initial file created by David Larsen

import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"
import "./Pecans.css"

const Pecans = () => {
    
    // Temporary "login"
    sessionStorage.setItem("credentials", 2)
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

    return (
        <>
            <ApplicationViews hasUser={hasUser} setUser={setUser}/>
        </>
    )
}

export default Pecans