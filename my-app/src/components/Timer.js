import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from "../config.js"

function Timer() {
    const [time, setTime] = useState(0);
    const [sendTime, setSendTime] = useState(false)
    const username = localStorage.getItem('username');

    var headers = {
        'Content-Type': 'application/json',
      }

    if(time>=20){
        setSendTime((sendTime) => !sendTime);
        setTime(0)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        axios.post(baseURL + '/postUserTime', {username:username ,time:time},
            headers = headers);

     }, [sendTime]);


}

export default Timer;