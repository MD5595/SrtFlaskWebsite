import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';


function PostTest() {
    const username = localStorage.getItem('username');
    const [x, setX] = useState(0);
    var navigate = useNavigate();

    function PostTestGrader() {
        let score = 0;

        // Question 1
        const q1_answer = document.getElementById('answer1').value.toLowerCase();

        useEffect(() => {
            let code = q1_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 2
        const q2_answer = document.getElementById('answer2').value.toLowerCase();
        if (q2_answer.includes("module")) {
            score++;
        }

        // Question 3
        const q3_answer = document.getElementById('answer3').value;
        useEffect(() => {
            let code = q3_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
                console.log("SUCCESS", response);
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);

        const q4_answer = document.getElementById('answer4').value.toLowerCase();
        if (q4_answer.includes("parameter")) {
            score++;
        }

// Question 5
        const q5_answer = document.getElementById('answer5').value.toLowerCase();
        if (q5_answer.includes("inclusive")) {
            score++;
        }
// Question 6
        const q6_answer = document.getElementById('answer6').value.toLowerCase();
        if (q6_answer.includes("math")) {
            score++;
        }

// Question 7
        const q7_answer = document.getElementById('answer7').value.toLowerCase();
        if (q7_answer.includes("48 46 44 42 40")) {
            score++;
        }

// Question 8
        const q8_answer = document.getElementById('answer8').value;
        useEffect(() => {
            let code = q8_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);

// Question 9
        const q9_answer = document.getElementById('answer9').value.toLowerCase();
        if (q9_answer.includes("a")) {
            score++;
        }

// Question 10
        const q10_answer = document.getElementById('answer10').value.toLowerCase();
        if (q10_answer.includes("#")) {
            score++;
        }

// Question 11
        const q11_answer = document.getElementById('answer11').value.toLowerCase();

        if (q11_answer.includes("a")) {
            score++;
        }

// Question 12
        const q12_answer = document.getElementById('answer12').value.toLowerCase();

        if (q12_answer.includes("5**3") || q12_answer.includes("pow(5,3)") || q12_answer.includes("math.pow(5,3)")) {
            score++;
        }

// Question 13
        const q13_answer = document.getElementById('answer13').value.toLowerCase();
        if (q13_answer.includes("35")) {
            score++;
        }

// Question 14
        const q14_answer = document.getElementById('answer14').value.toLowerCase();

        if (q14_answer.includes("b ")) {
            score++;
        }

// Question 15
        const q15_answer = document.getElementById('answer15').value.toLowerCase();
        if (q15_answer.includes("3")) {
            score++;
        }
// Question 16
        const q16_answer = document.getElementById('answer16').value.toLowerCase();
        useEffect(() => {
            let code = q16_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
// Question 17
        const q17_answer = document.getElementById('answer17').value.toLowerCase();
        if (q17_answer.includes("b")) {
            score++;
        }
// Question 18
        const q18_answer = document.getElementById('answer18').value.toLowerCase();
        if (q18_answer.includes("c")) {
            score++;
        }
// Question 19
        const q19_answer = document.getElementById('answer19').value;
        useEffect(() => {
            let code = q19_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);

// Question 20
        const q20_answer = document.getElementById('answer20').value;
        useEffect(() => {
            let code = q20_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        // Question 21
        const q21_answer = document.getElementById('answer21').value.toLowerCase();
        if (q21_answer.includes("while")) {
            score++;
        }
        // Question 22
        const q22_answer = document.getElementById('answer22').value.toLowerCase();
        if (!q22_answer.includes("a") && q22_answer.includes("b") && q22_answer.includes("c") && q22_answer.includes("d")) {
            score++;
        }
        // Question 23
        const q23_answer = document.getElementById('answer23').value;
        useEffect(() => {
            let code = q23_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
//Question 24
        const q24_answer = document.getElementById('answer24').value;
        if (q24_answer.includes("a") && q24_answer.includes("c") && q24_answer.includes("d") && !q24_answer.includes("b")) {
            score++
        }
        // Question 25
        const q25_answer = document.getElementById('answer25').value;
        useEffect(() => {
            let code = q25_answer;
            axios.post('http://localhost:5000/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);
        navigate("/HomePage");


        useEffect(() => {
            const test = "Post-Test"
            axios.post('http://localhost:5000/postUserScore', {username, test, score}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [x]);

    }

    return (
        <div className="container">
            {/* Question 1 */}
            <h1>PostTest</h1>
            <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                user gets the right answer. If the user gets the answer wrong 5 times, make the game stop and print,
                “Better luck next time.”</label><br/>
            <textarea id="answer1" style={{width: '200px', height: '100px'}}/>
            <br/><br/>
            {/* Question 2 */}
            <label htmlFor="answer2">2. What are Math and Random?</label>
            <input type="text" id="answer2"/>
            <br/><br/>
            {/* Question 3 */}
            <label htmlFor="answer1">3. Write a program that asks the user to input a number, then prints, "Your
                number is between 0 and 100" if the number is between 0 and 100 (inclusive).</label><br/>
            <textarea id="answer3" style={{width: '200px', height: '100px'}}/>
            <br/><br/>
            {/* Question 4 */}
            <label htmlFor="answer4">4. What are the placeholder variables within a function called?</label>
            <input type="text" id="answer4"/>
            <br/><br/>
            {/* Question 5 */}
            <label htmlFor="answer5">5. Is random.randint inclusive or exclusive?</label>
            <input type="text" id="answer5"/>
            <br/><br/>
            {/* Question 6 */}
            <label htmlFor="answer6">6. Which module is .fabs stored in?</label>
            <input type="text" id="answer6"/>
            <br/><br/>
            {/* Question 7 */}
            <label htmlFor="answer7">7. What would the following code print: <br/>for _ in range(48,38,-2): <br/>print(_,
                end=" ")</label><br/>
            <input type="text" id="answer7"/>
            <br/><br/>
            {/* Question 8 */}
            <label htmlFor="answer1">8. Write a program that randomly chooses a number from a list and prints the
                chosen number.</label><br/>
            <textarea id="answer8" style={{width: '200px', height: '100px'}}/>
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
            <select id="answer9">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <br/><br/>
            {/* Question 10 */}
            <label htmlFor="answer10">10. What symbol do you use when you want your program to ignore a
                line?</label>
            <input type="text" id="answer10"/>
            <br/><br/>
            {/* Question 11 */}
            <label htmlFor="answer11">11. When using the modular operator, what are the only possible results when
                the divisor is 4?
                <br/>

            </label>
            <select id="answer11">
                <option value="A">0, 1, 2, and 3</option>
                <option value="B">0, 1, 2, 3, and 4</option>
                <option value="C">1, 2, 3, 4, 5, 6, 7, and 8</option>
                <option value="D">1, 2, 3, and 4</option>
            </select>
            <br/><br/>
            {/* Question 12 */}
            <label htmlFor="answer12">12. Input one way you can raise 5 to the 3rd power (If you use a function, do not
                worry about importing).</label>
            <input type="text" id="answer12"/>
            <br/><br/>
            {/* Question 13 */}
            <label htmlFor="answer13">13. What is the output of the code below?
                <br/>c = 1
                <br/>sum = 0
                <br/>while (c &lt; 10):
                <br/>c = c + 2
                <br/>sum = sum + c
                <br/>print(sum)</label><br/>
            <input type="text" id="answer13"/>
            <br/><br/>
            {/* Question 14 */}

            <label htmlFor="answer14">14. Which range function will go through every even number through 8-42
                (inclusive)?
                <br/>
                <select id="answer14">
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
            <input type="text" id="answer15"/>
            <br/><br/>
            {/* Question 16 */}
            <label htmlFor="answer1">16. Write a program that simulates a coin flipping 100 times. The program
                should print the average amount of times heads and tails land.</label><br/>
            <textarea id="answer16" style={{width: '200px', height: '100px'}}/>

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

                <select id="answer14">
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
                <select id="answer18">
                    <option value="a">1.0 &lt; r &lt;= 2.0</option>
                    <option value="b">1.0 &lt;= r &lt;= 2.0</option>
                    <option value="c">1.0 &lt;= r &lt; 2.0</option>
                    <option value="d">1.0 &lt; r &lt; 2.0</option>
                </select>
            </label>
            <br/><br/>
            {/* Question 19 */}
            <label htmlFor="answer1">19. Write code that receives 3 numbers (label your variables a, b, and c) and
                determines if a triangle can exist with the side lengths inputted. Use the formula a^2 + b^2 =
                c^2</label><br/>
            <textarea id="answer19" style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 20 */}
            <label htmlFor="answer1">20. Create a function that has 3 parameters and prints, “All good!”, if all
                parameters have an even square root, and “Not all good.” if they don't all have even square
                roots.</label><br/>
            <textarea id="answer20" style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 21 */}
            <label htmlFor="answer21">21. What type of loop would you use if you wanted to make it stop after
                receiving a certain input?</label>
            <input type="text" id="answer21"/>
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
            <textarea id="answer23" style={{width: '200px', height: '100px'}}/>
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
            <textarea id="answer25" style={{width: '200px', height: '100px'}}/>
            <br/><br/>

            <button type="button" onClick={() => PostTestGrader()}>
                Submit
            </button>
        </div>
    );
}


export default PostTest;