import React, {useState, useEffect} from 'react';
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

let username = '';


function LandingPage() {
    var navigate = useNavigate();
    let [isChecked, updateCheckbox] = useState(false)
    const [localUsername, setLocalUsername] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('username', localUsername);
            setLocalUsername(localUsername);
            var checkbox = document.getElementById("checkAcc");
            isChecked = checkbox.checked;

            axios.post('http://localhost:5000/students', {isChecked, username}).then(response => {
                console.log("SUCCESS", response);
                updateCheckbox(isChecked);
                navigate("/HomePage");
            })
                .catch(error => {
                    console.error(error);
                });

            navigate("/HomePage");
        } catch (error) {
            console.error('Error submitting username:', error);
        }
    };


    const CheckboxChange = (e) => {
        var checkbox = document.getElementById("checkAcc");
        isChecked = checkbox.checked;
    };


    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <label htmlFor="name">Username:</label><br/>
                <input type="text" id="name" name="name" value={localUsername}
                       onChange={(e) => setLocalUsername(e.target.value)}/><br/>
                <input type="submit" id="submitButton" value="Submit"/>
            </form>
            <label htmlFor="checkAcc">Create New Account</label>
            <input type="checkbox" id="checkAcc" name="checkAcc" value="False" onChange={CheckboxChange}/>
        </div>
    );
}


export default LandingPage;
export { username };