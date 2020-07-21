// Initial file created by David Larsen

import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"
import "./Pecans.css"

const Pecans = () => {
    
    // Temporary "login"
<<<<<<< HEAD
    sessionStorage.setItem("credentials", "1")
=======
    sessionStorage.setItem("credentials", 2)
>>>>>>> a29a19ee568aec5f13fadf5a0534ece950ec3b08
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