import React, {useState, useEffect,createContext,useContext} from 'react';
import {UserProvider, useUser} from "./components/UserContext";
import axios from 'axios'


function Timer() {
    const {username, updateUsername} = useUser();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(PSeconds => PSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds, username]);

     useEffect(() => {
    if (seconds > 0 && seconds % 30 === 0) {
        var time = seconds;
        setSeconds(0)
      axios.post('http://localhost:5000/totalTime', {time, username}).then(response => {
        console.log('SUCCESS', response);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [seconds, username]);

}

export default Timer;