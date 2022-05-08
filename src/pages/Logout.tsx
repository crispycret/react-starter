
import { useState, useEffect, useRef } from 'react';



export const Logout = (props: any) => {

    const createHistory = require("history").createBrowserHistory;

    useEffect(() => {

        props.auth.logout(); 

        let history = createHistory();
        history.push("/");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;   

    }, []);

    return (
        <></>
    );


}



export default Logout;

