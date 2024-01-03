import React, {useState, useEffect} from 'react';
import {LandingPage, UserProvider, useUser} from "./pages/LandingPage";


function Timer() {
    const {username} = useUser();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(PSeconds => PSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [username]);

     useEffect(() => {
    if (seconds > 0 && seconds % 30 === 0) {
        var time = seconds;
      axios.post('http://localhost:5000/totalTime', {time, username}).then(response => {
        console.log('SUCCESS', response);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [seconds, username]);

}

export default Timer;