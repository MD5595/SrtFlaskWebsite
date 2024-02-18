import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {baseURL} from "../config.js"


function PreTest() {

    var headers = {
        'Content-Type': 'application/json',
    }

    const username = localStorage.getItem('username');
    const [sendTest, triggerSendTest] = useState(false);

    var navigate = useNavigate();
    const [code, setCode] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '',
        q7: '', q8: '', q9: '', q10: '', q11: '', q12: '',
        q13: '', q14: '', q15: '', q16: '', q17: '', q18: '',
        q19: '', q20: '', q21: '', q22: '', q23: '', q24: '',
        q25: ''
    });

    useEffect(() => {
 if(sendTest== true) {
     navigate('/HomePage');
     console.log("Sending data:");
     axios.post(baseURL + '/pretestProgram', {username, code}, {headers: headers}).then(response => {
     })
         .catch(error => {
             console.error(error);
         });
 }
    }, [sendTest]);


    return (
        <div className="container">
            <h1> Pre-Test</h1>
            <p>{username}</p>
            <form>
                {/* Question 1 */}
                <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                    user gets the right answer. </label>
                <textarea id="answer1" style={{width: '200px', height: '100px'}}

                          onChange={(e) => {
                              code["q1"] = e.target.value;

                          }}/>
                <br/> <br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
                <br/><input type="text" id="answer2"
                            onChange={(e) => {

                                code["q2"] = e.target.value;

                            }}/>
                <br/><br/>
                {/*Question 3 */}
                <label htmlFor="answer3">
                    3. Fill in the blank.<br/> <br/>num = int(input("Enter a number"))<br/>
                    if num &gt; 0 ____ num &lt; 100:<br/>
                    &emsp;print("Your number is between 0 and 100")<br/>
                </label>
                onChange={(e) => {
                code["q3"] = e.target.value;
            }}/>
                <br/> <br/>
                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <br/> <textarea id="answer4" style={{width: '200px', height: '100px'}}
                                onChange={(e) => {
                                    code["q4"] = e.target.value;

                                }}/>
                <br/> <br/>
                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <br/> <textarea id="answer5" style={{width: '200px', height: '100px'}}
                                onChange={(e) => {
                                    code["q5"] = e.target.value;
                                }}/> <br/> <br/>
                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <textarea id="answer6" style={{width: '200px', height: '100px'}}
                          onChange={(e) => {
                              code["q6"] = e.target.value;
                          }}/>
                <br/> <br/>
                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label><br/>
                <textarea id="answer7" style={{width: '200px', height: '100px'}}
                          onChange={(e) => {
                              code["q7"] = e.target.value;
                          }}/> <br/> <br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label><br/>
                <select id="answer8"
                        onChange={(e) =>
                            code["q8"] = e.target.value}>
                    <option value="x">Select an answer</option>
                    <option value="a">Adds an element to the end of a list</option>
                    <option value="b">Adds a number to the end of a variable</option>
                    <option value="c">Varies based on what is placed within it</option>
                    <option value="d">Adds a variable to the start of a list</option>
                </select>
                <br/><br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label> <br/>
                <textarea id="answer9" style={{width: '200px', height: '100px'}}

                          onChange={(e) => {
                              code["q9"] = e.target.value;
                          }}/> <br/>
                <br/>
                <br/>
                {/* Question 10 */}
                <label htmlFor="answer10">10. Which symbol has the highest precedence in mathematical
                    operations?</label><br/>
                <select id="answer10"
                        onChange={(e) => code["q10"] = e.target.value}>
                    <option value="x">Select an answer</option>
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
                <select id="answer11"
                        onChange={(e) =>
                            code["q11"] = e.target.value}>
                    <option value="x">Select an answer</option>
                    <option value="a">Strings</option>
                    <option value="b">Booleans</option>
                    <option value="c">Lists</option>
                    <option value="d">Floats</option>
                </select>

                <br/>
                <br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. What module would you import to use the choice() function?</label>
                <br/> <input type="text" id="answer12"
                             onChange={(e) =>
                                 code["q12"] = e.target.value}/>
                <br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label><br/>
                <select id="answer13"
                        onChange={(e) =>
                            code["q13"] = e.target.value}><br/>
                    <option value="x">Select an answer</option>
                    <option value="a">46 44 42 40 38</option>
                    <option value="b">48 46 44 42 40</option>
                    <option value="c">46 44 42 40</option>
                    <option value="d">48 46 44 42 40 38</option>
                    <br/>
                </select>
                <br/>
                <br/>
                {/* Question 14 */}
                <label htmlFor="answer14">14. Which variable name below is valid? </label><br/>
                <select id="answer14"
                        onChange={(e) =>
                            code["q14"] = e.target.value}><br/>
                    <option value="x">Select an answer</option>
                    <option value="a">333number</option>
                    <option value="b">–hi-</option>
                    <option value="c">__Num__</option>
                    <option value="d">(age)</option>
                </select>
                <br/>
                <br/>
                {/* Question 15 */}
                <label htmlFor="answer15">15. Input the code that would allow the user to input a number, cast the input
                    as a float, and assign the value to the variable “num1”</label>
                <br/> <textarea id="answer15" style={{width: '200px', height: '100px'}}
                                onChange={(e) => {
                                    code["q15"] = e.target.value
                                }
                                }/>
                <br/>
                <br/>
                {/* Question 16 */}
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label><br/>
                <select id="answer16"
                        onChange={(e) => code["q16"] = e.target.value}>
                    <option value="x">Select an answer</option>
                    <option value="a">2.0</option>
                    <option value="b">2.5</option>
                    <option value="c">2</option>
                    <option value="d">10//4</option>
                </select>
                <br/>
                <br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label><br/>
                <select id="answer17"
                        onChange={(e) => code["q17"] = e.target.value}>
                    <option value="x">Select an answer</option>
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
                    <select id="answer18"
                            onChange={(e) => code["q18"] = e.target.value}>
                        <option value="x">Select an answer</option>
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
                <br/> <textarea id="answer19" style={{width: '200px', height: '100px'}}
                                onChange={(e) =>
                                    code["q19"] = e.target.value}
            />
                <br/>
                <br/>
                {/* Question 20 */}
                <label htmlFor="answer20">20. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                <br/><input type="text" id="answer20"
                            onChange={(e) => code["q20"] = e.target.value}/>
                <br/>
                <br/>
                {/* Question 21 */}
                <label htmlFor="answer21">
                    21. Select all of the variable names that would not work in Python<br/>
                    <select id="answer21" onChange={(e) =>
                        code["q21"] = e.target.value}>
                        <option value="x">Select an answer</option>
                        <option value="a">--Hi</option>
                        <option value="b">33number</option>
                        <option value="c">Car1%</option>
                        <option value="d">My age</option>
                        <option value="e">None of the answers above</option>
                    </select>
                </label>
                <br/>
                <br/>

                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would be the best choice if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?(There are two possible answers. Input
                    the symbol to answer.)</label>
                <br/> <input type="text" id="answer22"
                             onChange={(e) => code["q22"] = e.target.value}/>
                <br/>
                <br/>
                <label htmlFor="answer23">
                    23. Select the value that could be picked by random.randint(20, 49).<br/>
                    <select id="answer23"
                            onChange={(e) => code["q23"] = e.target.value}>
                        <option value=" ">Select an option</option>
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
                <br/> <textarea id="answer24" style={{width: '200px', height: '100px'}}
                                onChange={(e) => {
                                    code["q24"] = e.target.value
                                }
                                }/>
                <br/>
                <br/>
                {/* Question 25 */}
                <label htmlFor="answer25">25. What comparison operator would be used if you wanted to make a logical
                    statement that hinges on an expression being equal to a specific number?</label><br/>
                <input type="text" id="answer25"
                       onChange={(e) => code["q25"] = e.target.value}/>
                <br/>
                <br/>


            </form>
            <button type="button" onClick={() => {
                triggerSendTest(true);
            }}>
                Submit
            </button>
            <div id="result"></div>

        </div>

    );
}

export default PreTest;