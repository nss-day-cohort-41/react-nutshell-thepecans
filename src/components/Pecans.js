// Initial file created by David Larsen

import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"

const Pecans = () => {
    
    // Temporary "login"
    sessionStorage.setItem("credentials", "1")

    return (
        <>
            <ApplicationViews />
        </>
    )
}

export default Pecans