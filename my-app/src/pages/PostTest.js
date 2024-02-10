import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import {baseURL} from "../config.js";


function PostTest() {
    const username = localStorage.getItem('username');
    var navigate = useNavigate();
    var code = {}
    const [score, setScore] = useState(0);
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

    function PostTestGrader() {
        navigate("/HomePage");
        triggerScoreTest(true)
    }



    useEffect(() => {
        if (q2Answer.includes("module")) {
            setScore(num => num + 1);
        }

        if (q4Answer.includes("parameter")) {
            setScore(num => num + 1);
        }

        if (q5Answer.includes("inclusive")) {
            setScore(num => num + 1);
        }
        if (q6Answer.includes("math")) {
            setScore(num => num + 1);
        }

        if (q7Answer.includes("48 46 44 42 40")) {
            setScore(num => num + 1);
        }


        if (q9Answer.includes("a")) {
            setScore(num => num + 1);
        }

        if (q10Answer.includes("#")) {
            setScore(num => num + 1);
        }


        if (q11Answer.includes("a")) {
            setScore(num => num + 1);

        }


        if (q12Answer.includes("5**3") || q12Answer.includes("pow(5,3)") || q12Answer.includes("math.pow(5,3)")) {
            setScore(num => num + 1);
        }

        if (q13Answer.includes("35")) {
            setScore(num => num + 1);
        }


        if (q14Answer.includes("b ")) {
            setScore(num => num + 1);
        }

        if (q15Answer.includes("3")) {
            setScore(num => num + 1);

        }

        if (q17Answer.includes("b")) {
            setScore(num => num + 1);
        }

        if (q18Answer.includes("c")) {
            setScore(num => num + 1);
        }



        if (q21Answer.includes("while")) {
            setScore(num => num + 1);
        }
        if (!q22Answer.includes("a") && q22Answer.includes("b") && q22Answer.includes("c") && q22Answer.includes("d")) {
            setScore(num => num + 1);
        }


        if (q24Answer.includes("a") && q24Answer.includes("c") && q24Answer.includes("d") && !q24Answer.includes("b")) {
            setScore(num => num + 1);
        }
 code["q1"] = q1Answer;
    code["q3"] = q3Answer;
    code["q8"] = q8Answer;
    code["q16"] = q16Answer;
    code["q19"] = q19Answer;
    code["q20"] = q20Answer;
    code["q23"] = q23Answer;
    code["q25"] = q25Answer;
    }, [scoreTest]);

    useEffect(() => {

        axios.post(baseURL + '/posttestProgram', {username, code}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [scoreTest]);


    useEffect(() => {
        const test = "Post-Test"
        axios.post(baseURL + '/postUserScore', {username, test, score}).then(response => {
        })
            .catch(error => {
                console.error(error);
            });
    }, [scoreTest]);


    return (
        <div className="container">
            {/* Question 1 */}
            <h1>PostTest</h1>
            <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                user gets the right answer. If the user gets the answer wrong 5 times, make the game stop and print,
                “Better luck next time.”</label><br/>
            <textarea id="answer1" value={q1Answer}
                      onChange={(e) => setQ1Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>
            <br/><br/>
            {/* Question 2 */}
            <label htmlFor="answer2">2. What are Math and Random?</label>
            <input type="text" id="answer2" value={q2Answer}
                   onChange={(e) => setQ2Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 3 */}
            <label htmlFor="answer1">3. Write a program that asks the user to input a number, then prints, "Your
                number is between 0 and 100" if the number is between 0 and 100 (inclusive).</label><br/>
            <textarea id="answer3" value={q3Answer}
                      onChange={(e) => setQ3Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>
            <br/><br/>
            {/* Question 4 */}
            <label htmlFor="answer4">4. What are the placeholder variables within a function called?</label>
            <input type="text" id="answer4" value={q4Answer}
                   onChange={(e) => setQ4Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 5 */}
            <label htmlFor="answer5">5. Is random.randint inclusive or exclusive?</label>
            <input type="text" id="answer5" value={q5Answer}
                   onChange={(e) => setQ5Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 6 */}
            <label htmlFor="answer6">6. Which module is .fabs stored in?</label>
            <input type="text" id="answer6" value={q6Answer}
                   onChange={(e) => setQ6Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 7 */}
            <label htmlFor="answer7">7. What would the following code print: <br/>for _ in range(48,38,-2): <br/>print(_,
                end=" ")</label><br/>
            <input type="text" id="answer7" value={q7Answer}
                   onChange={(e) => setQ7Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 8 */}
            <label htmlFor="answer8">8. Write a program that randomly chooses a number from a list and prints the
                chosen number.</label><br/>
            <textarea id="answer8" value={q8Answer}
                      onChange={(e) => setQ8Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>
            <br/><br/>

            {/* Question 9 */}
            <label htmlFor="answer9">9. What would the code below print if the user enters 10?
                <br/> x = int(input("Enter a number: "))
                <br/>
                if x != 7:
                <br/>
                &emsp;print("A")
                <br/>
                elif x &gt;= 10:
                <br/>
                &emsp;print("B")
                <br/>
                elif x &lt;10:
                <br/>
                &emsp;print("C")
                <br/>
                elif x % 2 == 0:
                <br/>
                &emsp;print("D")
            </label>
            <br/>
            <select id="answer9" value={q9Answer}
                    onChange={(e) => setQ9Answer(e.target.value)}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <br/><br/>
            {/* Question 10 */}
            <label htmlFor="answer10">10. What symbol do you use when you want your program to ignore a
                line?</label>
            <input type="text" id="answer10" value={q10Answer}
                   onChange={(e) => setQ10Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 11 */}
            <label htmlFor="answer11">11. When using the modular operator, what are the only possible results when
                the divisor is 4?
                <br/>

            </label>
            <select id="answer11" value={q11Answer}
                    onChange={(e) =>
                        setQ11Answer(e.target.value)}>
                <option value="A">0, 1, 2, and 3</option>
                <option value="B">0, 1, 2, 3, and 4</option>
                <option value="C">1, 2, 3, 4, 5, 6, 7, and 8</option>
                <option value="D">1, 2, 3, and 4</option>
            </select>
            <br/><br/>
            {/* Question 12 */}
            <label htmlFor="answer12">12. Input one way you can raise 5 to the 3rd power (If you use a function, do not
                worry about importing).</label>
            <input type="text" id="answer12" value={q12Answer}
                   onChange={(e) => setQ12Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 13 */}
            <label htmlFor="answer13">13. What is the output of the code below?
                <br/>c = 1
                <br/>sum = 0
                <br/>while (c &lt; 10):
                <br/>c = c + 2
                <br/>sum = sum + c
                <br/>print(sum)</label><br/>
            <input type="text" id="answer13" value={q13Answer}
                   onChange={(e) =>
                       setQ13Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 14 */}

            <label htmlFor="answer14">14. Which range function will go through every even number through 8-42
                (inclusive)?
                <br/>
                <select id="answer14" value={q14Answer}
                        onChange={(e) => setQ14Answer(e.target.value)}>
                    <option value="a">range(8,42)</option>
                    <option value="b">range(8,44,2)</option>
                    <option value="c">range(2,8,44)</option>
                    <option value="d">range(8,42,2)</option>
                </select>
            </label>
            <br/><br/>
            {/* Question 15 */}
            <label htmlFor="answer15">15. How many times does the function below print 'Hi'?
                <br/>for i in range (14, 45, 15):<br/>
                &emsp;print("Hi")</label><br/>
            <input type="text" id="answer15" value={q15Answer}
                   onChange={(e) => setQ15Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 16 */}
            <label htmlFor="answer16">16. Write a program that simulates a coin flipping 100 times. The program
                should print the average amount of times heads and tails land.</label><br/>
            <textarea id="answer16" value={q16Answer}
                      onChange={(e) => setQ16Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 17 */}
            <label htmlFor="answer17">17.
                What is the following code’s output if 5 then 123 are entered?<br/><br/>

                start = int(input("Enter a number: "))<br/>
                stop = int(input("Enter another number: "))<br/>
                <br/>
                x = 6<br/>
                list = []<br/>
                <br/>
                for i in range (start, stop, x):<br/>
                &emsp;list.append(x)<br/>
                &emsp;x+=i<br/>
                print(list[5])<br/>

                <br/>

                <select id="answer17" value={q17Answer}
                        onChange={(e) => setQ17Answer(e.target.value)}>
                    <option value="a">120</option>
                    <option value="b">126</option>
                    <option value="c">132</option>
                    <option value="d">133</option>
                </select>
            </label>
            <br/><br/>
            {/* Question 18 */}
            <label htmlFor="answer18">18. What shows the range of r’s possible value?
                r = random.random() + 1
                <br/>
                <select id="answer18" value={q18Answer}
                        onChange={(e) => setQ18Answer(e.target.value)}>
                    <option value="a">1.0 &lt; r &lt;= 2.0</option>
                    <option value="b">1.0 &lt;= r &lt;= 2.0</option>
                    <option value="c">1.0 &lt;= r &lt; 2.0</option>
                    <option value="d">1.0 &lt; r &lt; 2.0</option>
                </select>
            </label>
            <br/><br/>
            {/* Question 19 */}
            <label htmlFor="answer19">19. Write code that receives 3 numbers (label your variables a, b, and c) and
                determines if a triangle can exist with the side lengths inputted. Use the formula a^2 + b^2 =
                c^2</label><br/>
            <textarea id="answer19" value={q19Answer}
                      onChange={(e) => setQ19Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 20 */}
            <label htmlFor="answer20">20. Create a function that has 3 parameters and prints, “All good!”, if all
                parameters have an even square root, and “Not all good.” if they don't all have even square
                roots.</label><br/>
            <textarea id="answer20" value={q20Answer}
                      onChange={(e) => setQ20Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 21 */}
            <label htmlFor="answer21">21. What type of loop would you use if you wanted to make it stop after
                receiving a certain input?</label>
            <input type="text" id="answer21" value={q21Answer}
                   onChange={(e) => setQ21Answer(e.target.value)}/>
            <br/><br/>
            {/* Question 22 */}
            <label htmlFor="answer22">22. Select all invalid variable names.
                <br/>
                <input type="checkbox" id="a" name="answer22" value="a"/>
                <label htmlFor="a">a) _</label>
                <br/>
                <input type="checkbox" id="b" name="answer22" value="b"/>
                <label htmlFor="b">b) 33number</label>
                <br/>
                <input type="checkbox" id="c" name="answer22" value="c"/>
                <label htmlFor="c">c) Car1%</label>
                <br/>
                <input type="checkbox" id="d" name="answer22" value="d"/>
                <label htmlFor="d">d) My age</label>
            </label>
            <br/><br/>
            {/* Question 23 */}
            <label htmlFor="answer1">23. Write a program that receives an amount of cents ranging from 1 to 100 from a
                user,
                then prints out the number of quarters, dimes, nickels, and pennies that would make up this value in the
                least amount of coins. </label><br/>
            <textarea id="answer23" value={q23Answer}
                      onChange={(e) => setQ23Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>
            <br/><br/>
            {/* Question 24 */}
            <label htmlFor="answer24">24. Select all values that could be picked by random.randint(20,49)
                <br/>
                <input type="checkbox" id="a" name="answer24" value="a"/>
                <label htmlFor="a">49</label>
                <br/>
                <input type="checkbox" id="b" name="answer24" value="b"/>
                <label htmlFor="b">19</label>
                <br/>
                <input type="checkbox" id="c" name="answer24" value="c"/>
                <label htmlFor="c">20</label>
                <br/>
                <input type="checkbox" id="d" name="answer24" value="d"/>
                <label htmlFor="d">48</label>
            </label>
            <br/><br/>
            {/* Question 25 */}
            <label htmlFor="answer1">25. Write a program that has a while loop that stops once the user inputs a
                number that is divisible not by 2 and has a remainder of 3 when divided by 4.</label><br/>
            <textarea id="answer25" value={q25Answer}
                      onChange={(e) => setQ25Answer(e.target.value)} style={{width: '200px', height: '100px'}}/>
            <br/><br/>

            <button type="button" onClick={() => PostTestGrader()}>
                Submit

            </button>
        </div>
    );
}


export default PostTest;