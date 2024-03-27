import React, {useState, useEffect} from 'react';
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import {baseURL} from "../config.js"

let username = '';


function LandingPage() {
    var navigate = useNavigate();
    var headers = {
        'Content-Type': 'application/json',
      }

    let [isChecked, updateCheckbox] = useState(false)
    const [localUsername, setLocalUsername] = useState('');
        function handleSubmit(e) {
        navigate('/HomePage');
        console.log(isChecked, localUsername);
        e.preventDefault()
        axios
        .post(baseURL + '/students', {
            isChecked: isChecked,
            username: localUsername,
            },
        headers=headers);
        console.log("SUCCESS");
        updateCheckbox(isChecked);
        localStorage.setItem('username', localUsername)
      }

    const CheckboxChange = (e) => {
        var checkbox = document.getElementById("checkAcc");
        isChecked = checkbox.checked;
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label><br/>
                <input type="text" id="name" name="name" value={localUsername}
                       onChange={(e) => setLocalUsername(e.target.value)}/><br/>
                <input type="submit" id="submitButton" value="Submit"/>
            </form>
            <label htmlFor="checkAcc">Create New Account</label>
            <input type="checkbox" id="checkAcc" name="checkAcc" value="False" onChange={CheckboxChange}/>
            <p>
                The first time you enter this website, ensure that you follow the format below when making your username
                and to check the checkbox.<br/>
                Username: FirstnameLastInitial<br/>
                If your name was John Doe, your username would be JohnD.<br/>

            </p>
        </div>
    );
}


export default LandingPage;
export {username};