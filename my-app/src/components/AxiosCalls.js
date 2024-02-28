import axios from "axios";
import {baseURL} from "../config.js"

async function send_time(page, username) {
    const username = localStorage.getItem('username');

    var headers = {
        'Content-Type': 'application/json',
      }

  const response = await axios.post(baseURL + '/sendLocationTime', 
        {page: page, username: username },headers=headers);
    console.log("SUCCESS", response);
}

export {
    send_time
};

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from "../config.js"

function send_time() {
    const username = localStorage.getItem('username');

    useEffect(() => {
        axios.post(baseURL + '/sendLocationTime', {page: page, username: username },
            headers=headers);


        return () => clearInterval(timer);
    }, );


}

export default send_time;