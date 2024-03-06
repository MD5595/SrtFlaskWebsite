import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import {baseURL} from "../config.js"


function PreTest() {
    const username = localStorage.getItem('username');
    var navigate = useNavigate();
    var headers = {
        'Content-Type': 'application/json',
      }
      function handleSubmit(e) {
        e.preventDefault()
        var answers = new Object();
        const form = e.target;

        answers.q1 = form.answer1.value
        answers.q2 = form.answer2.value
        answers.q3 = form.answer3.value
        answers.q4 = form.answer4.value
        answers.q5 = form.answer5.value
        answers.q6 = form.answer6.value
        answers.q7 = form.answer7.value
        answers.q8 = form.answer8.value
        answers.q9 = form.answer9.value
        answers.q10 = form.answer10.value
        answers.q11 = form.answer11.value
        answers.q12 = form.answer12.value
        answers.q13 = form.answer13.value
        answers.q14 = form.answer14.value
        answers.q15 = form.answer15.value
        answers.q16 = form.answer16.value        
        answers.q17 = form.answer17.value
        answers.q18 = form.answer18.value
        answers.q19 = form.answer19.value
        answers.q20 = form.answer20.value
        answers.q21 = form.answer21.value
        answers.q22 = form.answer22.value
        answers.q23 = form.answer23.value
        answers.q24 = form.answer24.value
        answers.q25 = form.answer25.value

        axios.post(baseURL + '/pretestProgram', {username, answers}, headers=headers).then(response => {
            console.log("SUCCESS", response);
        navigate('/HomePage');
        }).catch(error => {
                console.error(error);

            });
    }

    return (
        <div className="container">
            <h1> Pre-Test</h1>
            <p>{username}</p>
            
            <form onSubmit={handleSubmit}>
                {/* Question 1 */}
                <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                    user gets the right answer. </label>
                <textarea id="answer1" style={{width: '200px', height: '100px'}}/>
                <br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
                <br/><input type="text" id="answer2"/>
                <br/><br/>
                {/*Question 3 */}
                <label htmlFor="answer3">
                    3. Fill in the blank.<br/>num = int(input("Enter a number"))<br/>
                    if num &gt; 0 ____ num &lt; 100:<br/>
                    &emsp;print("Your number is between 0 and 100")<br/><br/>
                </label>
                <input type="text" id="answer3" />
                <br/><br/>
                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <br/> <textarea id="answer4" style={{width: '200px', height: '100px'}}/>
                <br/><br/>
                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <br/> <textarea id="answer5" style={{width: '200px', height: '100px'}}/>
                <br/><br/>
                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <textarea id="answer6" style={{width: '200px', height: '100px'}}/>
                <br/><br/>
                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label><br/>
                <textarea id="answer7" style={{width: '200px', height: '100px'}}/> <br/><br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label><br/>
                <select id="answer8">
                    <option value="a">Adds an element to the end of a list</option>
                    <option value="b">Adds a number to the end of a variable</option>
                    <option value= "c">Varies based on what is placed within it</option>
                    <option value="d">Adds a variable to the start of a list</option>
                </select>
                <br/><br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label><br/>
                <textarea id="answer9" style={{width: '200px', height: '100px'}}/> <br/>
                <br/>
                <br/>
                {/* Question 10 */}
                <label htmlFor="answer10">10. Which symbol has the highest precedence in mathematical
                    operations?</label><br/>
                <select id="answer10">
                    <option value="a">//</option>
                    <option value="b">**</option>
                    <option value="c">-</option>
                    <option value="d">( )</option>
                </select>
                <br/>
                <br/>
                {/* Question 11 */}
                <label htmlFor="answer11">11. What kind of data type is most commonly associated with
                    conditionals?</label><br/>
                <select id="answer11">
                    <option value="a">Strings</option>
                    <option value="b">Booleans</option>
                    <option value="c">Lists</option>
                    <option value="d">Floats</option>
                </select>

                <br/>
                <br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. What module would you import to use the choice() function?</label>
                <br/><input type="text" id="answer12"/>
                <br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print?<br/>
                for _ in range(48, 38, -2):<br/>
                print(_, end=" ")</label><br/>
                <select id="answer13"><br/>
                    <option value="a">46 44 42 40 38</option>
                    <br/>
                    <option value="b">48 46 44 42 40</option>
                    <br/>
                    <option value="c">46 44 42 40</option>
                    <br/>
                    <option value="d">48 46 44 42 40 38</option>
                    <br/>
                </select>
                <br/>
                <br/>
                {/* Question 14 */}
                <label htmlFor="answer14">14. Which variable name below is valid? </label><br/>
                <select id="answer14"><br/>
                    <option value="a">333number</option>
                    <br/>
                    <option value="b">–hi-</option>
                    <br/>
                    <option value="c">__Num__</option>
                    <br/>
                    <option value="d">(age)</option>
                    <br/>
                </select>
                <br/>
                <br/>
                {/* Question 15 */}
                <label htmlFor="answer15">15. Input the code that would allow the user to input a number, cast the input
                    as a float, and assign the value to the variable “num1”</label>
                <br/> <textarea id="answer15" style={{width: '200px', height: '100px'}}/>
                <br/>
                <br/>
                {/* Question 16 */}
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label><br/>
                <select id="answer16">
                    <option value="a">2.0</option>
                    <option value="b">2.5</option>
                    <option value="c">2</option>
                    <option value="d">10//4</option>
                </select>
                <br/>
                <br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label><br/>
                <select id="answer17">
                    <option value="a">When you want to assign a value to a variable</option>
                    <option value="b">When you want to make a logical statement that hinges on values being equal
                        to each other
                    </option>
                    <option value="c">== is not present in Python</option>
                    <option value="d">For mathematical equations</option>
                </select>
                <br/>
                <br/>
                {/* Question 18 */}
                <label htmlFor="answer18">18. Which line of code will not return an error?<br/>
                    <select id="answer18">
                        <option value="a">print(The answer is 10)</option>
                        <option value="b">print("The answer is" + 10)</option>
                        <option value="c">print(The answer is + str(10))</option>
                        <option value="d">print("The answer is " + str(10))</option>
                    </select>
                </label>
                <br/>
                <br/>
                {/* Question 19 */}
                <label htmlFor="answer19">19. Write a program which has 2 variables, one of which equals 2 and the other
                    equals. There should be a while loop that only stops when...</label>
                <br/> <textarea id="answer19" style={{width: '200px', height: '100px'}}/>
                <br/>
                <br/>
                {/* Question 20 */}
                <label htmlFor="answer20">20. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                    <br/><input type="text" id="answer20"/>
                <br/>
                <br/>
                {/* Question 21 */}
                <label htmlFor="answer21">
                    21. Select the variable name that would not work in Python<br/>
                    <select id="answer21">
                        <option value="a">__Hi</option>
                        <option value="b">33number</option>
                        <option value="c">Car1</option>
                        <option value="d">MyAge-</option>
                    </select>
                </label>
                <br/>
                <br/>

                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would be the best choice if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?(There are two possible answers. Input
                    the symbol to answer.)</label>
                <br/> <input type="text" id="answer22"/>
                <br/>
                <br/>
                <label htmlFor="answer23">
                    23. Select the value that could be picked by random.randint(20, 49).<br/>
                    <select id="answer23">

                        <option value="a">49</option>
                        <option value="b">50</option>
                        <option value="c">20.5</option>
                        <option value="d">19.6</option>
                    </select>
                </label>

                <br/>
                <br/>
                {/* Question 24 */}
                <label htmlFor="answer24">24. Write a program that has a list with 3 numbers within it. Use a function
                    to add 45 to the list.</label>
                <br/> <textarea id="answer24" style={{width: '200px', height: '100px'}}/>
                <br/>
                <br/>
                {/* Question 25 */}
                <label htmlFor="answer25">25. What comparison operator would be used if you wanted to make a logical
                    statement that hinges on an expression being equal to a specific number?</label><br/>
                <input type="text" id="answer25"/>
                <br/>
                <br/>

                <input type="submit" id="submitButton" value="Submit"/>
                </form>
        </div>

    );
}

export default PreTest;