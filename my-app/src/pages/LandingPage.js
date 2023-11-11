import React from 'react';
import {Link, Redirect} from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <form>
        <label htmlFor="name">Username:</label><br />
        <input type="text" id="name" name="name" /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LandingPage;


