import React, {useState} from 'react';
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';

const KeyPage = () => {
    const [inputValue, setInputValue] = useState('');
    var navigate = useNavigate();

    const handleClick = () => {
        if (inputValue.toLowerCase() === 'blank') {
            navigate("/ABCDEFG");
        } else {
            navigate("/KeyPage");
        }
    };

    return (
        <div>
            <p>Enter the key to access the Post-Test</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
                Submit
            </button>
        </div>
    );
};

export default KeyPage;
