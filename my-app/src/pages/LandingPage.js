import React from 'react';
import { Link, Redirect,Navigate, useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/HomePage");
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="name">Username:</label><br />
        <input type="text" id="name" name="name" /><br />
        <input type="submit" id="submitButton" onClick={handleClick} />
      </form>
    </div>
  );
}

export default LandingPage;

