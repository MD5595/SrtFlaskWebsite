import React from 'react';
import { Link, Redirect,Navigate, useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');


  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:5000/students', { username });
      navigate("/HomePage");
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
        <input type="submit" id="submitButton" onClick={handleClick} />
      </form>
    </div>
  );
}

export default LandingPage;

