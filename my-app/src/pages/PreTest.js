import React, {useEffect, useState} from 'react';
import axios from "axios";


function PreTest() {
    const [userScore, setUserScore] = useState(0);
    const username = localStorage.getItem('username');
    function PreTestGrader() {
        let score = 0;

        // Question 1
        const q1_answer = document.getElementById('answer1').value.toLowerCase();


        // Question 2
        const q2_answer = document.getElementById('answer2').value.toLowerCase();
        if (q2_answer === 'math') {
            score++;
        }

        // Question 3
        const q3_answer = document.getElementById('answer3').value.toLowerCase();
        if (q3_answer === '&&') {
            score++;
        }

        // Question 4


        // Question 5


        // Question 6


        // Question 7


        // Question 8
        const q8_answer = document.getElementById('answer8').value.toLowerCase();
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
        if (q11_answer.includes('boolean')) {
            score++;
        }

        // Question 12
        const q12_answer = document.getElementById('answer12').value.toLowerCase();
        const randomNum = Math.floor(Math.random() * 4) + 1;
        if (parseInt(q12_answer) === randomNum) {
            score++;
        }

        // Question 13
        const q13_answer = document.getElementById('answer13').value.toLowerCase();
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
            <h1>JavaScript Pre-Test</h1>
            <p>{username}</p>
            <form>
                {/* Question 1 */}

                <br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
                <input type="text" id="answer2"/>

                {/* <label htmlFor="answer3">
                    3. Fill in the blank: num = int(input("Enter a number"))
                    if num > 0 _ num < 100:
                    print("Your number is between 0 and 100")
                </label>
                <input type="text" id="answer3"/>
                Question 3 */}
                <br/>
                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <input type="text" id="answer4"/>
                <br/>
                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <input type="text" id="answer5"/>
                <br/>
                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <input type="text" id="answer6"/>
                <br/>
                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label>
                <input type="text" id="answer7"/>
                <br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label>
                <select id="answer8">
                    <option value="none">Select an option</option>
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
                    <option value="none">Select an option</option>
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
                <input type="text" id="answer11"/>
<br/>
                <br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. Write a program that randomly chooses between 4 numbers, then prints the
                    chosen number.</label>
                <input type="text" id="answer12"/>
<br/>
                <br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label>
                <input type="text" id="answer13"/>
<br/>
                <br/>
                {/* Question 14 */}
                <label htmlFor="answer14">14. Which variable name below is valid? 333number, –hi-, __Num__,
                    (age)</label>
                <input type="text" id="answer14"/>
<br/>
                <br/>
                {/* Question 15 */}
                <label htmlFor="answer15">15. Input the code that would allow the user to input a number, cast the input
                    as a float, and assign the value to the variable “num1”</label>
                <input type="text" id="answer15"/>
<br/>
                <br/>
                {/* Question 16 */}
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label>
                <input type="text" id="answer16"/>
<br/>
                <br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label>
                <input type="text" id="answer17"/>
<br/>
                <br/>
                {/* Question 18 */}
                <label htmlFor="answer18">18. Which line of code will not return an error?
                    <ol>
                        <li>print(The answer is 10)</li>
                        <li>print("The answer is" + 10)</li>
                        <li>print("The answer is + str(10)")</li>
                        <li>print("The answer is " + str(10))</li>
                    </ol>
                </label>
                <input type="text" id="answer18"/>
<br/>
                <br/>
                {/* Question 19 */}
                <label htmlFor="answer19">19. Write a program which has 2 variables, one of which equals 2 and the other
                    equals. There should be a while loop that only stops when...</label>
                <input type="text" id="answer19"/>
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
                        <li><input type="checkbox" id="option1" name="answer21" value="--Hi"/> <label
                            htmlFor="option1">--Hi</label></li>
                        <li><input type="checkbox" id="option2" name="answer21" value="33number"/> <label
                            htmlFor="option2">33number</label></li>
                        <li><input type="checkbox" id="option3" name="answer21" value="Car1%"/> <label
                            htmlFor="option3">Car1%</label></li>
                        <li><input type="checkbox" id="option4" name="answer21" value="My age"/> <label
                            htmlFor="option4">My age</label></li>
                    </ul>
                </label>
<br/>
                <br/>

                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would you first use if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?</label>
                <input type="text" id="answer22"/>
<br/>
                <br/>
                {/* Question 23 */}
                <label htmlFor="answer23">23. Select all values that could be picked by random.randint(20, 49)
                    <ol>
                        <li>49</li>
                        <li>19</li>
                        <li>20</li>
                        <li>48</li>
                    </ol>
                </label>
                <input type="text" id="answer23"/>
<br/>
                <br/>
                {/* Question 24 */}
                <label htmlFor="answer24">24. Write a program that has a list with 3 numbers within it. Use a function
                    to add 45 to the list.</label>
                <input type="text" id="answer24"/>
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