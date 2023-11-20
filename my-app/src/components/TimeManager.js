import React, { useState, useEffect } from 'react';
import { Link, Redirect,Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


const [startTimer, setUsername] = useState('');
let time = 0;
let totalTime= 0
let intervalStorage = null
const startTimer = () => {
    intervalStorage = setInterval(() => {
      time += 1;
    }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalStorage);
  let intervalStorage = null;
  totalTime +=time
  return totalTime
};
const unloading=()=>{
    useEffect(() => {
    const handleUnload = () => {
      stopTimer()
    };
    window.addEventListener('unload', handleUnload);
    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, []);
  return <div></div>;
};

export {startTimer, stopTimer,unloading};