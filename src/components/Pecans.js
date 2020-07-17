import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"

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