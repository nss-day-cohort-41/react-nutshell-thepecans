// Initial file created by David Larsen

import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"
import "./Pecans.css"

const Pecans = () => {
    
    // Temporary "login"
    sessionStorage.setItem("credentials", "3")

    return (
        <>
            <ApplicationViews />
        </>
    )
}

export default Pecans