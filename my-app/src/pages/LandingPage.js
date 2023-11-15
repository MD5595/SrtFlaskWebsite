import React, { useState, useEffect } from 'react';
import { Link, Redirect,Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { startTimer, stopTimer} from 'TimeManager';
function LandingPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  let signedin = false;

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:5000/students', { username });
      navigate("/HomePage");
      let signedin = true
      startTimer()
    } catch(error){
        console.error('Error submitting username:', error);
    }

  };

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <label htmlFor="name">Username:</label><br />
        <input type="text" id="name" name="name" value={username}
               onChange={(e) => setUsername(e.target.value)}/><br />
        <input type="submit" id="submitButton" value = "Submit" />
      </form>
    </div>
  );
}

export default LandingPage;

