import React, {useEffect, useState} from 'react';
import axios from "axios";

function PreTestGrader() {
    let score = 0;
    const username = localStorage.getItem('username');


    // Question 2
    const q2_answer = document.getElementById('answer2').value.toLowerCase();
    if (q2_answer.includes('math')) {
        score++;
    }

    // Question 3
    const q3_answer = document.getElementById('answer3').value.toLowerCase();
    if (q3_answer.includes('and')) {
        score++;
    }

    // Question 8
    const q8_answer = document.getElementById('answer8').value;
    if (q8_answer.includes('a')) {
        score++;
    }


    // Question 10
    const q10_answer = document.getElementById('answer10').value.toLowerCase();
    if (q10_answer.includes('d')) {
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
    if (q13_answer.includes('b')) {
        score++;
    }

    // Question 14
    const q14_answer = document.getElementById('answer14').value.toLowerCase();
    if (q14_answer === 'c') {
        score++;
    }


    // Question 16
    const q16_answer = document.getElementById('answer16').value.toLowerCase();
    if (q16_answer.includes('c')) {
        score++;
    }

    // Question 17
    const q17_answer = document.getElementById('answer17').value.toLowerCase();
    if (q17_answer.includes('a')) {
        score++;
    }

    // Question 18
    const q18_answer = document.getElementById('answer18').value.toLowerCase();
    if (q18_answer.includes("d")) {
        score++;
    }


    // Question 20
    const q20_answer = document.getElementById('answer20').value.toLowerCase();
    if (q20_answer.includes('while')) {
        score++;
    }

    // Question 21
    const q21_answer = document.getElementById('answer21').value.toLowerCase();
    if (q21_answer.includes("a") && q21_answer.includes("b") && q21_answer.includes("c") && q21_answer.includes("d")) {
        score++;
    }

    // Question 22
    const q22_answer = document.getElementById('answer22').value;
    if (q22_answer.includes('//')) {
        score++;
    }

    // Question 23
    const q23_answer = document.getElementById('answer23').value.toLowerCase();
    if (q23_answer.includes("a")) {
        score++
    }

    let num = 0;
    // Question 25
    const q25_answer = document.getElementById('answer25').value;
    if (q25_answer.includes('==')) {
        score++;
        num += 1;
    } else {
        num += 1
    }
    return score

}

function PreTest() {

    const [userScore, setUserScore] = useState(0);
    const username = localStorage.getItem('username');
    const [x, setX] = useState(0);
    const [q1Answer, setQ1Answer] = useState('');
    const [q4Answer, setQ4Answer] = useState('');
    const [q5Answer, setQ5Answer] = useState('');
    const [q6Answer, setQ6Answer] = useState('');
    const [q7Answer, setQ7Answer] = useState('');
    const [q9Answer, setQ9Answer] = useState('');
    const [q15Answer, setQ15Answer] = useState('');
    const [q19Answer, setQ19Answer] = useState('');
    const [q24Answer, setQ24Answer] = useState('');
    const [score, setScore] = useState('');

    // Question 1

    useEffect(() => {
        let code = q1Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
            console.log("SUCCESS", response);
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);

    // Question 4
    useEffect(() => {
        let code = q4Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
            console.log("SUCCESS", response);
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 5
    useEffect(() => {
        let code = q5Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
            console.log("SUCCESS", response);
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 6
    useEffect(() => {
        let code = q6Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
            console.log("SUCCESS", response);
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 7
    useEffect(() => {
        let code = q7Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
            console.log("SUCCESS", response);
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);

    // Question 9
    useEffect(() => {
        let code = q9Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 15
    useEffect(() => {
        let code = q15Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 19
    useEffect(() => {
        let code = q19Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
    // Question 24

    useEffect(() => {
        let code = q24Answer;
        axios.post('http://localhost:5000/pretestProgram', {username, code}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [x]);
 useEffect(() => {
        let test = "PreTest";
        axios.post('http://localhost:5000/postUserScore', {username, test, score}).then(response => {
        })
            .catch(error => {
                console.error(error);

            });
    }, [score]);
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
                <input type="text" id="answer2"/>
                <br/><br/>
                {/*Question 3 */}
                <label htmlFor="answer3">
                    3. Fill in the blank.<br/> <br/>num = int(input("Enter a number"))<br/>
                    if num &gt; 0 ____ num &lt; 100:<br/>
                    &emsp;print("Your number is between 0 and 100")<br/>
                </label>
                <input type="text" id="answer3"/>
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
                <select id="answer8">
                    <option value="a">Adds an element to the end of a list</option>
                    <option value="b">Adds a number to the end of a variable</option>
                    <option value="c">Varies based on what is placed within it</option>
                    <option value="d">Adds a variable to the start of a list</option>
                </select>
                <br/><br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label>
                <input type="text" id="answer9"value={q9Answer}
                          onChange={(e) => setQ9Answer(e.target.value)}/>/>
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
                <input type="text" id="answer12"/>
                <br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label><br/>
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
                <br/> <textarea id="answer15" style={{width: '200px', height: '100px'}} value={q15Answer}
                                onChange={(e) => setQ15Answer(e.target.value)}/>
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
                <br/> <textarea id="answe19" style={{width: '200px', height: '100px'}} value={q19Answer}
                                onChange={(e) => setQ19Answer(e.target.value)}/>
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
                        <li><input type="checkbox" id="option1" name="answer21" value="a"/> <label
                            htmlFor="option1">--Hi</label></li>
                        <li><input type="checkbox" id="option2" name="answer21" value="b"/> <label
                            htmlFor="option2">33number</label></li>
                        <li><input type="checkbox" id="option3" name="answer21" value="c"/> <label
                            htmlFor="option3">Car1%</label></li>
                        <li><input type="checkbox" id="option4" name="answer21" value="d"/> <label
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
                    23. Select the value that could be picked by random.randint(20, 49).<br/>
                    <select id="answer23" name="answer23">
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
                <input type="text" id="answer25"/>
                <br/>
                <br/>
                <button type="button" onClick={() => {
                    setScore(PreTestGrader())
                    setX(x + 1)
                }}>
                    Submit
                </button>

            </form>

            <div id="result"></div>

        </div>

    );
}

export default PreTest;