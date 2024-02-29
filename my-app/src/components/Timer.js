import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from "../config.js"

function Timer() {
        const username = localStorage.getItem('username');

    var headers = {
        'Content-Type': 'application/json',
      }
    const [time, setTime] = useState(0);
    const [sendTime, setSendTime] = useState(false)
    if(time>=20){
        setSendTime((sendTime) => !sendTime);
        setTime(0)
    }
    const timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
    }, 1000);

    useEffect(() => {
        axios.post(baseURL + '/postUserTime', {username:username ,time:time},
            headers = headers);

        return () => clearInterval(timer);
    }, [sendTime]);


}

export default Timer;