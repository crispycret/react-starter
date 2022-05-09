
import { useState, useEffect, useRef } from 'react';



export const Logout = (props: any) => {

    const createHistory = require("history").createBrowserHistory;

    function logoutCallback(response: any) {
        console.log("Logout Callback")
        props.redirect('/')
    }

    useEffect(() => {

        props.auth.logout(logoutCallback); 

    }, []);

    return (
        <></>
    );


}



export default Logout;

