import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, Redirect, Navigate, useNavigate, useLocation} from 'react-router-dom';
import {baseURL} from "../config.js";


function PostTest() {
    const username = localStorage.getItem('username');
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

        axios.post(baseURL + '/posttestProgram', {username, answers}, headers=headers).then(response => {
            console.log("SUCCESS", response);

        }).catch(error => {
                console.error(error);

            });
    }


    return (
        <div className="container">
            <h1>PostTest</h1>

            <form onSubmit={handleSubmit}>
            {/* Question 1 */}
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
            <label htmlFor="answer3">3. Write a program that asks the user to input a number, then prints, "Your
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
            <label htmlFor="answer16">16. Write a program that simulates a coin flipping 100 times. The program
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

                <select id="answer17">
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
            <label htmlFor="answer19">19. Write code that receives 3 numbers (label your variables a, b, and c) and
                determines if a triangle can exist with the side lengths inputted. Use the formula a^2 + b^2 =
                c^2</label><br/>
            <textarea id="answer19" style={{width: '200px', height: '100px'}}/>

            <br/><br/>
            {/* Question 20 */}
            <label htmlFor="answer20">20. Create a function that has 3 parameters and prints, “All good!”, if all
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
                <label htmlFor="a"> _</label>
                <br/>
                <input type="checkbox" id="b" name="answer22" value="b"/>
                <label htmlFor="b"> 33number</label>
                <br/>
                <input type="checkbox" id="c" name="answer22" value="c"/>
                <label htmlFor="c"> Car1%</label>
                <br/>
                <input type="checkbox" id="d" name="answer22" value="d"/>
                <label htmlFor="d"> My age</label>
            </label>
            <br/><br/>
            {/* Question 23 */}
            <label htmlFor="answer23">23. Write a program that receives an amount of cents ranging from 1 to 100 from a
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
            <label htmlFor="answer25">25. Write a program that has a while loop that stops once the user inputs a
                number that is divisible not by 2 and has a remainder of 3 when divided by 4.</label><br/>
            <textarea id="answer25" style={{width: '200px', height: '100px'}}/>
            <br/><br/>

            <input type="submit" id="submitButton" value="Submit"/>

            </form>
        </div>
    );
}


export default PostTest;