import React, {useState, useEffect,createContext,useContext} from 'react';
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <UserContext.Provider value={{ username, updateUsername }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UseContext used outside of scope');
  }
  return context;
};
function LandingPage1() {
    var navigate = useNavigate();
    var [username, updateUsername] = useUser();
    let [isChecked, updateCheckbox] = useState(false)

        const handleClick = async (e) => {
            e.preventDefault();
            try {
                var checkbox = document.getElementById("checkAcc");
                isChecked = checkbox.checked;
                updateUsername(username);
                axios.post('http://localhost:5000/students', {isChecked, username}).then(response => {console.log("SUCCESS", response);
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
                <input type="text" id="name" name="name" value={username}
                       onChange={(e) => updateUsername(e.target.value)}/><br/>
                <input type="submit" id="submitButton" value="Submit"/>
            </form>
            <label htmlFor="checkAcc">Create New Account</label>
            <input type="checkbox" id="checkAcc" name="checkAcc" value="False" onChange={CheckboxChange}/>
        </div>
    );
}

export default {LandingPage, LandingPage1, UserContext, UserProvider};

