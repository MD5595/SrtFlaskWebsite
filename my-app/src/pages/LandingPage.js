import React, {useState} from 'react';
import axios from 'axios';

let username = '';


function LandingPage() {

    var headers = {
        'Content-Type': 'application/json',
      }

    let [isChecked, updateCheckbox] = useState(false)
    const [localUsername, setLocalUsername] = useState('');

    function handleSubmit(e) {
        console.log(isChecked, localUsername);
        e.preventDefault()
        axios
        .post('http://127.0.0.1:5000/students', {
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
        </div>
    );
}


export default LandingPage;
export { username };