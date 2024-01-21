import React, {useEffect, useState} from 'react';
import axios from "axios";
import {username} from "./LandingPage";


function PreTest() {
    const [userScore, setUserScore] = useState(0);
    const username = localStorage.getItem('username');
    const [x, setX] = useState(0);

    function PreTestGrader() {
        let score = 0;
        setX(x + 1);
        // Question 1
        const q1_answer = document.getElementById('answer1').value.toLowerCase();

        useEffect(() => {
            let code = q1_answer;
            axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 2
        const q2_answer = document.getElementById('answer2').value.toLowerCase();
        if (q2_answer === 'math') {
            score++;
        }

        // Question 3
        const q3_answer = document.getElementById('answer3').value.toLowerCase();
        if (q3_answer === 'and') {
            score++;
        }

        // Question 4
        const q4_answer = document.getElementById('answer4').value;
        useEffect(() => {
            let code = q4_answer;
            axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 5
        const q5_answer = document.getElementById('answer5').value;
        useEffect(() => {
            let code = q5_answer;
            axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 6
        const q6_answer = document.getElementById('answer6').value;
        useEffect(() => {
            let code = q6_answer;
            axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 7
        const q7_answer = document.getElementById('answer7').value;
        useEffect(() => {
            let code = q7_answer;
            axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 8
        const q8_answer = document.getElementById('answer8').value;
        if (q8_answer === 'adds an element to the end of a list') {
            score++;
        }

        // Question 9


        // Question 10
        const q10_answer = document.getElementById('answer10').value.toLowerCase();
        if (q10_answer === '**') {
            score++;
        }

        // Question 11
        const q11_answer = document.getElementById('answer11').value.toLowerCase();
        if (q11_answer.includes('booleans')) {
            score++;
        }

        // Question 12
        const q12_answer = document.getElementById('answer12').value.toLowerCase();
        if (q12_answer.includes('random')) {
            score++;
        }

        // Question 13
        const q13_answer = document.getElementById('answer13').value;
        if (q13_answer === '48 46 44 42 40') {
            score++;
        }

        // Question 14
        const q14_answer = document.getElementById('answer14').value.toLowerCase();
        if (q14_answer === '__num__') {
            score++;
        }

        // Question 15


        // Question 16
        const q16_answer = document.getElementById('answer16').value.toLowerCase();
        if (q16_answer === '2') {
            score++;
        }

        // Question 17


        // Question 18
        const q18_answer = document.getElementById('answer18').value.toLowerCase();
        if (q18_answer === 'print("The answer is " + str(10))') {
            score++;
        }

        // Question 19


        // Question 20
        const q20_answer = document.getElementById('answer20').value.toLowerCase();
        if (q20_answer.includes('while')) {
            score++;
        }

        // Question 21
        const q21_answer = document.getElementById('answer21').value.toLowerCase();
        if (q21_answer === '-hi-' || q21_answer === 'car1%' || q21_answer === '(age)') {
            score++;
        }

        // Question 22
        const q22_answer = document.getElementById('answer22').value.toLowerCase();
        if (q22_answer.includes('//')) {
            score++;
        }

        // Question 23
        const q23_answer = document.getElementById('answer23').value.toLowerCase();
        if (q23_answer === '20' || q23_answer === '21' || q23_answer === '22' || q23_answer === '23' || q23_answer === '24' || q23_answer === '25' || q23_answer === '26' || q23_answer === '27' || q23_answer === '28' || q23_answer === '29' || q23_answer === '30' || q23_answer === '31' || q23_answer === '32' || q23_answer === '33' || q23_answer === '34' || q23_answer === '35' || q23_answer === '36' || q23_answer === '37' || q23_answer === '38' || q23_answer === '39' || q23_answer === '40' || q23_answer === '41' || q23_answer === '42' || q23_answer === '43' || q23_answer === '44' || q23_answer === '45' || q23_answer === '46' || q23_answer === '47' || q23_answer === '48') {
            score++;
        }

        // Question 24


        // Question 25
        const q25_answer = document.getElementById('answer25').value.toLowerCase();
        if (q25_answer === '==') {
            score++;
        }
        useEffect(() => {
            let test = "PreTest";
            axios.post('http://localhost:5000/postUserScore', {username, test, score}).then(response => {
            })
                .catch(error => {
                    console.error(error);

                });
        },);
    }

    return (
        <div className="container">
            <h1> Pre-Test</h1>
            <p>{username}</p>
            <form>
                {/* Question 1 */}
                <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                    user gets the right answer. </label>
                <textarea id="answer1" style={{width: '200px', height: '100px'}}/>
                <br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
                <input type="text" id="answer2"/>
                <br/><br/>
                <label htmlFor="answer3">
                    3. Fill in the blank: <br/>num = int(input("Enter a number"))<br/>
                    if num &gt; 0 ____ num &lt; 100:<br/>
                    print("Your number is between 0 and 100")<br/>
                </label>
                <input type="text" id="answer3"/>
                {/*Question 3 */}
                <br/>
                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <br/> <textarea id="answer4" style={{width: '200px', height: '100px'}}/>
                <br/>
                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <br/> <textarea id="answer5" style={{width: '200px', height: '100px'}}/>
                <br/>
                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <textarea id="answer6" style={{width: '200px', height: '100px'}}/>
                <br/>
                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label><br/>
                <textarea id="answer1" style={{width: '200px', height: '100px'}}/> <br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label>
                <select id="answer8">
                    <option value="adds_element">Adds an element to the end of a list</option>
                    <option value="adds_number">Adds a number to the end of a variable</option>
                    <option value="varies">Varies based on what is placed within it</option>
                    <option value="adds_variable">Adds a variable to the start of a list</option>
                </select>
                <br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label>
                <input type="text" id="answer9"/>
                <br/>
                <br/>
                {/* Question 10 */}
                <label htmlFor="answer10">10. Which symbol has the highest precedence in mathematical
                    operations?</label>
                <select id="answer10">
                    <option value="double_slash">//</option>
                    <option value="double_star">**</option>
                    <option value="minus">-</option>
                    <option value="parentheses">( )</option>
                </select>
                <br/>
                <br/>
                {/* Question 11 */}
                <label htmlFor="answer11">11. What kind of data type is most commonly associated with
                    conditionals?</label>
                <select id="answer11">
                    <option value="strings">Strings</option>
                    <option value="booleans">Booleans</option>
                    <option value="lists">Lists</option>
                    <option value="floats">Floats</option>
                </select>

                <br/>
                <br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. What module would you import to use the choice() function?</label>
                <input type="text" id="answer12"/>
                <br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label>
                <select id="answer13"><br/>
                    <option value="option1">46 44 42 40 38</option>
                    <br/>
                    <option value="option2">48 46 44 42 40</option>
                    <br/>
                    <option value="option3">46 44 42 40</option>
                    <br/>
                    <option value="option4">48 46 44 42 40 38</option>
                    <br/>
                </select>
                <br/>
                <br/>
                {/* Question 14 */}
                <label htmlFor="answer14">14. Which variable name below is valid? 333number, –hi-, __Num__,
                    (age)</label>
                <select id="answer14"><br/>
                    <option value="option1">333number</option>
                    <br/>
                    <option value="option2">–hi-</option>
                    <br/>
                    <option value="option3">__Num__</option>
                    <br/>
                    <option value="option4">(age)</option>
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
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label>
                <select id="answer16">
                    <option value="option1">2.0</option>
                    <option value="option2">2.5</option>
                    <option value="option3">2</option>
                    <option value="option4">10//4</option>
                </select>
                <br/>
                <br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label>
                <select id="answer17">
                    <option value="option1">When you want to assign a value to a variable</option>
                    <option value="option2">When you want to make a logical statement that hinges on values being equal
                        to each other
                    </option>
                    <option value="option3">== is not present in Python</option>
                    <option value="option4">For mathematical equations</option>
                </select>
                <br/>
                <br/>
                {/* Question 18 */}
                <label htmlFor="answer18">18. Which line of code will not return an error?
                    <select id="answer18">
                        <option value="option1">print(The answer is 10)</option>
                        <option value="option2">print("The answer is" + 10)</option>
                        <option value="option3">print("The answer is + str(10)")</option>
                        <option value="option4">print("The answer is " + str(10))</option>
                    </select>
                </label>
                <br/>
                <br/>
                {/* Question 19 */}
                <label htmlFor="answer19">19. Write a program which has 2 variables, one of which equals 2 and the other
                    equals. There should be a while loop that only stops when...</label>
                <br/> <textarea id="answe19" style={{width: '200px', height: '100px'}}/>
                <br/>
                <br/>
                {/* Question 20 */}
                <label htmlFor="answer20">20. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                <input type="text" id="answer20"/>
                <br/>
                <br/>
                {/* Question 21 */}
                <label htmlFor="answer21">
                    21. Select all of the variable names that would not work in Python.
                    <ul>
                        <li><input type="checkbox" id="option1" name="answer21" value="option1"/> <label
                            htmlFor="option1">--Hi</label></li>
                        <li><input type="checkbox" id="option2" name="answer21" value="option2"/> <label
                            htmlFor="option2">33number</label></li>
                        <li><input type="checkbox" id="option3" name="answer21" value="option3"/> <label
                            htmlFor="option3">Car1%</label></li>
                        <li><input type="checkbox" id="option4" name="answer21" value="option4"/> <label
                            htmlFor="option4">My age</label></li>
                    </ul>
                </label>
                <br/>
                <br/>

                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would you first use if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?</label>
                <br/> <input type="text" id="answer22"/>
                <br/>
                <br/>
                <label htmlFor="answer23">
                    23. Select the value that could be picked by random.randint(20, 49).
                    <ul>
                        <li>
                            <input type="radio" id="option1" name="answer23" value="option1"/>
                            <label htmlFor="option1">49</label>
                        </li>
                        <li>
                            <input type="radio" id="option2" name="answer23" value="option2"/>
                            <label htmlFor="option2">19</label>
                        </li>
                        <li>
                            <input type="radio" id="option3" name="answer23" value="option3"/>
                            <label htmlFor="option3">20</label>
                        </li>
                        <li>
                            <input type="radio" id="option4" name="answer23" value="option4"/>
                            <label htmlFor="option4">48</label>
                        </li>
                    </ul>
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
                    statement that hinges on an expression being equal to a specific number?</label>
                <input type="text" id="answer25"/>
                <br/>
                <br/>
                <button type="button" onClick={() => PreTestGrader()}>
                    Submit
                </button>

            </form>

            <div id="result"></div>
        </div>
    );
}

export default PreTest;