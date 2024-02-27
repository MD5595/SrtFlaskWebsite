import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from "../config.js"

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [sendTime, changeSendTime] = useState(false)
    if(seconds>=20){

    }
    const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    useEffect(() => {
        axios.post(baseURL + '/postUserTime', {},
            headers = headers);


        return () => clearInterval(timer);
    }, []);


}

export default Timer;