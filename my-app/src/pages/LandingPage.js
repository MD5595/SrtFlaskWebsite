import React, {useState, useEffect} from 'react';
import {Link, Redirect, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';

function LandingPage1() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');


    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/students', {username});
            navigate("/HomePage");
        } catch (error) {
            console.error('Error submitting username:', error);
        }

    };

    export function updateCheckbox(checkbox) {
        const isChecked = checkbox.checked;

        axios.post('http://localhost:5000/updateCheckbox', {isChecked})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error updating checkbox on the server:', error);
            });
    }


    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <label htmlFor="name">Username:</label><br/>
                <input type="text" id="name" name="name" value={username}
                       onChange={(e) => setUsername(e.target.value)}/><br/>
                <input type="submit" id="submitButton" value="Submit"/>
            </form>
            <label htmlFor="checkAcc">Create New Account</label>
            <input type="checkbox" id="checkAcc" name="checkAcc" value="False"/>

        </div>
    );
}

export default LandingPage
