import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"

const Pecans = () => {
    
    // Temporary "login"
    sessionStorage.setItem("credentials", "2")

    return (
        <>
            <ApplicationViews />
        </>
    )
}

export default Pecans