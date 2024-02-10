import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import {baseURL} from "../config.js"


function PreTest() {

    var headers = {
        'Content-Type': 'application/json',
    }

    const username = localStorage.getItem('username');
    const [scoreTest, triggerScoreTest] = useState(false);

    const [q1Answer, setQ1Answer] = useState('');
    const [q4Answer, setQ4Answer] = useState('');
    const [q5Answer, setQ5Answer] = useState('');
    const [q6Answer, setQ6Answer] = useState('');
    const [q7Answer, setQ7Answer] = useState('');
    const [q9Answer, setQ9Answer] = useState('');
    const [q15Answer, setQ15Answer] = useState('');
    const [q19Answer, setQ19Answer] = useState('');
    const [q24Answer, setQ24Answer] = useState('');
    const [score, setScore] = useState(0);

    const [q2Answer, setQ2Answer] = useState('');
    const [q3Answer, setQ3Answer] = useState('');
    const [q8Answer, setQ8Answer] = useState('');
    const [q10Answer, setQ10Answer] = useState('');
    const [q11Answer, setQ11Answer] = useState('');
    const [q12Answer, setQ12Answer] = useState('');
    const [q13Answer, setQ13Answer] = useState('');
    const [q14Answer, setQ14Answer] = useState('');
    const [q16Answer, setQ16Answer] = useState('');
    const [q17Answer, setQ17Answer] = useState('');
    const [q18Answer, setQ18Answer] = useState('');
    const [q20Answer, setQ20Answer] = useState('');
    const [q21Answer, setQ21Answer] = useState('');
    const [q22Answer, setQ22Answer] = useState('');
    const [q23Answer, setQ23Answer] = useState('');
    const [q25Answer, setQ25Answer] = useState('');
    var navigate = useNavigate();
    var code = {}


    function PreTestGrader() {
        navigate("/HomePage");
        triggerScoreTest(true)
        console.log(code)
    }

    useEffect(() => {
        if (q2Answer.includes('math')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q3Answer.includes('and')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q8Answer.includes('a')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q10Answer.includes('d')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q12Answer.includes('random')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q13Answer.includes('math')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q14Answer.includes('c')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q14Answer.includes('c')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q16Answer.includes('c')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q17Answer.includes('a')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q18Answer.includes('d')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q20Answer.includes('while')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q22Answer.includes('//') || q22Answer.includes('%')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q23Answer.includes('a')) {
            setScore((prevScore) => prevScore + 1);
        }
        if (q25Answer.includes('==')) {
            setScore((prevScore) => prevScore + 1);

        }
        code["q1"] = q1Answer;
            code["q4"] = q4Answer;
            code["q5"] = q5Answer;
            code["q6"] = q6Answer;
            code["q7"] = q7Answer;
            code["q9"] = q9Answer;
            code["q15"] = q15Answer;
            code["q19"] = q19Answer;
            code["q24"] = q24Answer;
    }, [scoreTest]);


    useEffect(() => {
        let test = "PreTest";
        axios.post(baseURL + '/postUserScore', {username, test, score}, headers = headers).then(response => {
        })
            .catch(error => {
                console.error(error);

            });
    }, [scoreTest]);

    useEffect(() => {
        axios.post(baseURL + '/pretestProgram', {username, code}, headers = headers).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [scoreTest]);

    return (
        <div className="container">
            <h1> Pre-Test</h1>
            <p>{username}</p>
            <form>
                {/* Question 1 */}
                <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                    user gets the right answer. </label>
                <textarea id="answer1" style={{width: '200px', height: '100px'}}
                          value={q1Answer}
                          onChange={(e) => setQ1Answer(e.target.value)}/>
                <br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
                <input type="text" id="answer2" value={q2Answer}
                       onChange={(e) => setQ2Answer(e.target.value)}/>
                <br/><br/>
                {/*Question 3 */}
                <label htmlFor="answer3">
                    3. Fill in the blank.<br/> <br/>num = int(input("Enter a number"))<br/>
                    if num &gt; 0 ____ num &lt; 100:<br/>
                    &emsp;print("Your number is between 0 and 100")<br/>
                </label>
                <input type="text" id="answer3" value={q3Answer}
                       onChange={(e) => setQ3Answer(e.target.value)}/>
                <br/>
                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <br/> <textarea id="answer4" style={{width: '200px', height: '100px'}}
                                value={q4Answer}
                                onChange={(e) => setQ4Answer(e.target.value)}/>
                <br/>
                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <br/> <textarea id="answer5" style={{width: '200px', height: '100px'}}
                                value={q5Answer}
                                onChange={(e) => setQ5Answer(e.target.value)}/>
                <br/>
                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <textarea id="answer6" style={{width: '200px', height: '100px'}}
                          value={q6Answer}
                          onChange={(e) => setQ6Answer(e.target.value)}/>
                <br/>
                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label><br/>
                <textarea id="answer7" style={{width: '200px', height: '100px'}}
                          value={q7Answer}
                          onChange={(e) => setQ7Answer(e.target.value)}/> <br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label><br/>
                <select id="answer8" value={q8Answer}
                        onChange={(e) => setQ8Answer(e.target.value)}>
                    <option value="a">Adds an element to the end of a list</option>
                    <option value="b">Adds a number to the end of a variable</option>
                    <option value="c">Varies based on what is placed within it</option>
                    <option value="d">Adds a variable to the start of a list</option>
                </select>
                <br/><br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label>
                <textarea id="answer9" style={{width: '200px', height: '100px'}}
                          value={q9Answer}
                          onChange={(e) => setQ9Answer(e.target.value)}/> <br/>
                <br/>
                <br/>
                {/* Question 10 */}
                <label htmlFor="answer10">10. Which symbol has the highest precedence in mathematical
                    operations?</label><br/>
                <select id="answer10" value={q10Answer}
                        onChange={(e) => setQ10Answer(e.target.value)}>
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
                <select id="answer11" value={q11Answer}
                        onChange={(e) => setQ11Answer(e.target.value)}>
                    <option value="a">Strings</option>
                    <option value="b">Booleans</option>
                    <option value="c">Lists</option>
                    <option value="d">Floats</option>
                </select>

                <br/>
                <br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. What module would you import to use the choice() function?</label>
                <input type="text" id="answer12" value={q12Answer}
                       onChange={(e) => setQ12Answer(e.target.value)}/>
                <br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label><br/>
                <select id="answer13" value={q13Answer}
                        onChange={(e) => setQ13Answer(e.target.value)}><br/>
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
                <select id="answer14" value={q14Answer}
                        onChange={(e) => setQ14Answer(e.target.value)}><br/>
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
                <br/> <textarea id="answer15" style={{width: '200px', height: '100px'}} value={q15Answer}
                                onChange={(e) => setQ15Answer(e.target.value)}/>
                <br/>
                <br/>
                {/* Question 16 */}
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label><br/>
                <select id="answer16" value={q16Answer}
                        onChange={(e) => setQ16Answer(e.target.value)}>
                    <option value="a">2.0</option>
                    <option value="b">2.5</option>
                    <option value="c">2</option>
                    <option value="d">10//4</option>
                </select>
                <br/>
                <br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label><br/>
                <select id="answer17" value={q17Answer}
                        onChange={(e) => setQ17Answer(e.target.value)}>
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
                    <select id="answer18" value={q18Answer}
                            onChange={(e) => setQ18Answer(e.target.value)}>
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
                <br/> <textarea id="answe19" style={{width: '200px', height: '100px'}} value={q19Answer}
                                onChange={(e) => setQ19Answer(e.target.value)}/>
                <br/>
                <br/>
                {/* Question 20 */}
                <label htmlFor="answer20">20. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                <input type="text" id="answer20" value={q20Answer}
                       onChange={(e) => setQ20Answer(e.target.value)}/>
                <br/>
                <br/>
                {/* Question 21 */}
                <label htmlFor="answer21">
                    21. What line of code will make the variable `str` hold the string "here, T"?<br/>
                    <select id="answer21" value={q21Answer} onChange={(e) => setQ18Answer(e.target.value)}>
                        <option value="a">str[::2]</option>
                        <option value="b">str[1:7]</option>
                        <option value="c">str[6:1:-1]</option>
                        <option value="d">str[:7]</option>
                    </select>
                </label>
                <br/>
                <br/>

                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would be the best choice if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?(There are two possible answers. Input
                    the symbol to answer.)</label>
                <br/> <input type="text" id="answer22" value={q22Answer}
                             onChange={(e) => setQ22Answer(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="answer23">
                    23. Select the value that could be picked by random.randint(20, 49).<br/>
                    <select id="answer23" value={q23Answer}
                            onChange={(e) => setQ23Answer(e.target.value)}>
                        <option value="">Select an option</option>
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
                <br/> <textarea id="answer24" style={{width: '200px', height: '100px'}} value={q24Answer}
                                onChange={(e) => setQ24Answer(e.target.value)}/>
                <br/>
                <br/>
                {/* Question 25 */}
                <label htmlFor="answer25">25. What comparison operator would be used if you wanted to make a logical
                    statement that hinges on an expression being equal to a specific number?</label><br/>
                <input type="text" id="answer25" value={q25Answer}
                       onChange={(e) => setQ25Answer(e.target.value)}/>
                <br/>
                <br/>
                <button type="button" onClick={PreTestGrader}>
                    Submit
                </button>

            </form>

            <div id="result"></div>

        </div>

    );
}

export default PreTest;