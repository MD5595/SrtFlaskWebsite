import axios from "axios";
//import {baseURL} from "../config.js"


async function send_time(page, username) {
    var headers = {
        'Content-Type': 'application/json',
      }

  const response = await axios.post('http://127.0.0.1:5000/sendLocationTime', 
        {page: page, username: username },headers=headers);
    console.log("SUCCESS", response);
}

export {
    send_time
};
