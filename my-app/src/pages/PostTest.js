import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {baseURL} from "../config.js";


function PostTest() {
    const [sendTest, triggerSendTest] = useState(false);
    const username = localStorage.getItem('username');
    var navigate = useNavigate();
    const [code, setCode] = useState({
        q1: '', q2: '', q3: '', q4: '', q5: '', q6: '',
        q7: '', q8: '', q9: '', q10: '', q11: '', q12: '',
        q13: '', q14: '', q15: '', q16: '', q17: '', q18: '',
        q19: '', q20: '', q21: '', q22: '', q23: '', q24: '',
        q25: ''
    });


    useEffect(() => {
        if (sendTest == true) {
            navigate('/HomePage');
            axios.post(baseURL + '/posttestProgram', {username, code}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [sendTest]);


    return (
        <div className="container">
            {/* Question 1 */}
            <h1>PostTest</h1>
            <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                user gets the right answer. If the user gets the answer wrong 5 times, make the game stop and print,
                “Better luck next time.”</label><br/>
            <textarea id="answer1" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q1"] = e.target.value;

            }}/>
            <br/><br/>
            {/* Question 2 */}
            <label htmlFor="answer2">2. What are Math and Random?</label><br/>
            <input type="text" id="answer2" onChange={(e) => {
                code["q2"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 3 */}
            <label htmlFor="answer1">3. Write a program that asks the user to input a number, then prints, "Your
                number is between 0 and 100" if the number is between 0 and 100 (inclusive).</label><br/>
            <br/><textarea id="answer3" style={{width: '200px', height: '100px'}} onChange={(e) => {
            code["q3"] = e.target.value;
        }}/>
            <br/><br/>
            {/* Question 4 */}
            <label htmlFor="answer4">4. What are the placeholder variables within a function called?</label>
            <br/><input type="text" id="answer4" onChange={(e) => {
            code["q4"] = e.target.value;
        }}/>
            <br/><br/>
            {/* Question 5 */}
            <label htmlFor="answer5">5. Is random.randint inclusive or exclusive?</label>
            <br/><input type="text" id="answer5" onChange={(e) => {
            code["q5"] = e.target.value;
        }}/>
            <br/><br/>
            {/* Question 6 */}
            <label htmlFor="answer6">6. Which module is .fabs stored in?</label>
            <br/><input type="text" id="answer6" onChange={(e) => {
            code["q6"] = e.target.value;
        }}/>
            <br/><br/>
            {/* Question 7 */}
            <label htmlFor="answer7">7. What would the following code print: <br/>
                for _ in range(48,38,-2): <br/>&emsp;print(_,
                end=" ")</label><br/>
            <input type="text" id="answer7" onChange={(e) => {
                code["q7"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 8 */}
            <label htmlFor="answer1">8. Write a program that randomly chooses a number from a list and prints the
                chosen number.</label><br/>
            <textarea id="answer8" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q8"] = e.target.value;
            }}/>
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
            <select id="answer9" onChange={(e) => {
                code["q9"] = e.target.value;
            }}>
                <option value="x">Select an answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <br/><br/>
            {/* Question 10 */}
            <label htmlFor="answer10">10. What symbol do you use when you want your program to ignore a
                line?</label>
            <br/> <input type="text" id="answer10" onChange={(e) => {
            code["q10"] = e.target.value;
        }}/>
            <br/><br/>
            {/* Question 11 */}
            <label htmlFor="answer11">11. When using the modular operator, what are the only possible results when
                the divisor is 4?
                <br/>

            </label>
            <select id="answer11" onChange={(e) => {
                code["q11"] = e.target.value;
            }}>
                <option value="x">Select an answer</option>
                <option value="A">0, 1, 2, and 3</option>
                <option value="B">0, 1, 2, 3, and 4</option>
                <option value="C">1, 2, 3, 4, 5, 6, 7, and 8</option>
                <option value="D">1, 2, 3, and 4</option>
            </select>
            <br/><br/>
            {/* Question 12 */}
            <label htmlFor="answer12">12. Input one way you can raise 5 to the 3rd power (If you use a function, do
                not
                worry about importing).</label>
            <input type="text" id="answer12" onChange={(e) => {
                code["q12"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 13 */}
            <label htmlFor="answer13">13. What is the output of the code below?
                <br/>c = 1
                <br/>sum = 0
                <br/>while (c &lt; 10):
                <br/>&emsp;c = c + 2
                <br/>&emsp;sum = sum + c
                <br/>print(sum)</label><br/>
            <input type="text" id="answer13" onChange={(e) => {
                code["q13"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 14 */}

            <label htmlFor="answer14">14. Which range function will go through every even number through 8-42
                (inclusive)?
                <br/>
                <select id="answer14" onChange={(e) => {
                    code["q14"] = e.target.value;
                }}>
                    <option value="x">Select an answer</option>
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
            <input type="text" id="answer15" onChange={(e) => {
                code["q15"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 16 */}
            <label htmlFor="answer1">16. Write a program that simulates a coin flipping 100 times. The program
                should print the average amount of times heads and tails land.</label><br/>
            <textarea id="answer16" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q16"] = e.target.value;
            }}/>

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

                <select id="answer17" onChange={(e) => {
                    code["q17"] = e.target.value;
                }}>
                    <option value="x">Select an answer</option>
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
                <select id="answer18" onChange={(e) => {
                    code["q18"] = e.target.value;
                }}>
                    <option value="x">Select an answer</option>
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
            <textarea id="answer19" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q19"] = e.target.value;
            }}/>

            <br/><br/>
            {/* Question 20 */}
            <label htmlFor="answer20">20. Create a function that has 3 parameters and prints, “All good!”, if all
                parameters have an even square root, and “Not all good.” if they don't all have even square
                roots.</label><br/>
            <textarea id="answer20" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q20"] = e.target.value;
            }}/>

            <br/><br/>
            {/* Question 21 */}
            <label htmlFor="answer21">21. What type of loop would you use if you wanted to make it stop after
                receiving a certain input?</label>
            <br/><input type="text" id="answer21" onChange={(e) => {
                code["q21"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 22 */}
            <label htmlFor="answer22">22. Which is the valid variable name.
        <br/>
        <select id="answer22" name="answer22"onChange={(e) => {
                code["q22"] = e.target.value;
            }}>
            <option value="x">Select an answer</option>
            <option value="a">_</option>
            <option value="b">33number</option>
            <option value="c">Car1%</option>
            <option value="d">My age</option>
        </select>
    </label>
            <br/><br/>
            {/* Question 23 */}
            <label htmlFor="answer1">23. Write a program that receives an amount of cents ranging from 1 to 100 from
                a
                user,
                then prints out the number of quarters, dimes, nickels, and pennies that would make up this value in
                the
                least amount of coins. </label><br/>
            <textarea id="answer23" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q23"] = e.target.value;
            }}/>
            <br/><br/>
            {/* Question 24 */}
            <label htmlFor="answer24">Which value below can be picked by random.randint(20,49)?
        <br/>
        <select id="answer24" name="answer24">
            <option value="x">Select an answer</option>
            <option value="a">48.5</option>
            <option value="b">49</option>
            <option value="c">47.87</option>
            <option value="d">19</option>
        </select>
    </label>
            <br/><br/>
            {/* Question 25 */}
            <label htmlFor="answer1">25. Write a program that has a while loop that stops once the user inputs a
                number that is divisible not by 2 and has a remainder of 3 when divided by 4.</label><br/>
            <textarea id="answer25" style={{width: '200px', height: '100px'}} onChange={(e) => {
                code["q25"] = e.target.value;
            }}/>
            <br/><br/>

            <button type="button" onClick={() => {
                triggerSendTest(true);

            }}>
                Submit
            </button>
        </div>
    );
}

export default PostTest;