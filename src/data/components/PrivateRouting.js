import React from "react";
import {Redirect} from "react-router-dom"

function PrivateRouting() {
    return(
    <>
        <Redirect to="/Login"/>
    </>
    )
}

export default PrivateRouting;