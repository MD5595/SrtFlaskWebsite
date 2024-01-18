import React from 'react';

function PostTest() {
    const username = localStorage.getItem('username');

    function PostTestGrader() {
        let score = 0;

        // Question 1
        const q1_answer = document.getElementById('answer1').value.toLowerCase();


        // Question 2
        const q2_answer = document.getElementById('answer2').value.toLowerCase();
        if (q2_answer.includes("module")) {
            score++;
        }

        // Question 3
        const q3_answer = document.getElementById('answer3').value.toLowerCase();
        if (q3_answer.includes("0") && q3_answer.includes("100")) {
            score++;
        }

        const q4_answer = document.getElementById('answer4').value.toLowerCase();
        if (q4_answer.includes("placeholder") && q4_answer.includes("variables")) {
            score++;
        }

// Question 5
        const q5_answer = document.getElementById('answer5').value.toLowerCase();
// Check if the answer is correct
        if (q5_answer.includes("inclusive")) {
            score++;
        }

// Question 6
        const q6_answer = document.getElementById('answer6').value.toLowerCase();
// Check if the answer is correct
        if (q6_answer.includes("math") && q6_answer.includes("fabs")) {
            score++;
        }

// Question 7
        const q7_answer = document.getElementById('answer7').value.toLowerCase();
// Check if the answer is correct
        if (q7_answer.includes("48 46 44 42 40")) {
            score++;
        }

// Question 8
        const q8_answer = document.getElementById('answer8').value.toLowerCase();
// Check if the answer is correct
// (Assuming the correct answer is to randomly choose a number from a list)
        if (q8_answer.includes("random") && q8_answer.includes("list")) {
            score++;
        }

// Question 9
        const q9_answer = document.getElementById('answer9').value.toLowerCase();
// Check if the answer is correct
// (Assuming the correct answer is A, B, C, D)
        if (q9_answer.includes("a") && q9_answer.includes("b") && q9_answer.includes("c") && q9_answer.includes("d")) {
            score++;
        }

// Question 10
        const q10_answer = document.getElementById('answer10').value.toLowerCase();
        if (q10_answer.includes("symbol") && q10_answer.includes("ignore")) {
            score++;
        }

// Question 11
        const q11_answer = document.getElementById('answer11').value.toLowerCase();
// Check if the answer is correct
// (Assuming the correct answers are 0, 1, 2, 3)
        if (q11_answer.includes("0") && q11_answer.includes("1") && q11_answer.includes("2") && q11_answer.includes("3")) {
            score++;
        }

// Question 12
        const q12_answer = document.getElementById('answer12').value.toLowerCase();

        if (q12_answer.includes("5^^5") || q12_answer.includes("5.pow(5)")) {
            score++;
        }

// Question 13
        const q13_answer = document.getElementById('answer13').value.toLowerCase();
// Check if the answer is correct
        if (q13_answer.includes("25")) {
            score++;
        }

// Question 14
        const q14_answer = document.getElementById('answer14').value.toLowerCase();

        if (q14_answer.includes("b ")) {
            score++;
        }

// Question 15
        const q15_answer = document.getElementById('answer15').value.toLowerCase();
        if (q15_answer.includes("0")) {
            score++;
        }
        return (
            <div className="container">
                {/* Question 1 */}
                <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the
                    user gets the right answer. If the user gets the answer wrong 5 times, make the game stop and print,
                    “Better luck next time.”</label>
                <input type="text" id="answer1"/>
                <br/><br/>
                {/* Question 2 */}
                <label htmlFor="answer2">2. What are Math and Random?</label>
                <input type="text" id="answer2"/>
                <br/><br/>
                {/* Question 3 */}
                <label htmlFor="answer3">3. Write a program that asks the user to input a number, then prints, "Your
                    number is between 0 and 100" if the number is between 0 and 100 (inclusive).</label>
                <input type="text" id="answer3"/>
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
                <label htmlFor="answer7">7. What would the following code print: for _ in range(48,38,-2): print(_,
                    end=" ")</label>
                <input type="text" id="answer7"/>
                <br/><br/>
                {/* Question 8 */}
                <label htmlFor="answer8">8. Write a program that randomly chooses a number from a list and prints the
                    chosen number.</label>
                <input type="text" id="answer8"/>
                <br/><br/>
                {/* Question 9 */}
                <label htmlFor="answer9">9. What would the code below print if the user enters 10? (multiple choice)
                    x = int(input("Enter a number: "))
                    <br/>
                    if x != 7:
                    <br/>
                    &emsp;print("A")
                    <br/>
                    if x >= 10:
                    <br/>
                    &emsp;print("B")
                    <br/>
                    if x < 10:
                    <br/>
                    &emsp;print("C")
                    <br/>
                    if x % 2 == 0:
                    <br/>
                    &emsp;print("D")
                </label>
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
                <label htmlFor="answer11">11. When using the modular operator, what are the only possible answers when
                    the divisor is 4?
                    <br/>
                    A) 0 1 2 3
                    <br/>
                    B) 0 1 2 3 4
                    <br/>
                    C) 1 2 3 4 5 6 7 8
                    <br/>
                    D) 1 2 3 4
                </label>
                <select id="answer11">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
                <br/><br/>
                {/* Question 12 */}
                <label htmlFor="answer12">12. Input one way you can raise 5 to the 3rd power</label>
                <input type="text" id="answer12"/>
                <br/><br/>
                {/* Question 13 */}
                <label htmlFor="answer13">13. What is the output of the code below:
                    c = 1
                    sum = 0
                    while (c &lt; 10):
                    c = c + 2
                    sum = sum + c
                    print(sum)</label>
                <input type="text" id="answer13"/>
                <br/><br/>
                {/* Question 14 */}
                {/* Question 14 */}
                <label htmlFor="answer14">14. Which range function will go through every even number through 8-42
                    (inclusive)?
                    <br/>
                    <select id="answer14">
                        <option value="a">a) range(8,42)</option>
                        <option value="b">b) range(8,44,2)</option>
                        <option value="c">c) range(2,8,44)</option>
                        <option value="d">d) range(8,42,2)</option>
                    </select>
                </label>
                <br/><br/>
                {/* Question 15 */}
                <label htmlFor="answer15">15. How many times is 'Hi' printed?
                    for i in range (14, 45, 15):
                    print("Hi")</label>
                <input type="text" id="answer15"/>
                <br/><br/>
                {/* Question 16 */}
                <label htmlFor="answer16">16. Write a program that simulates a coin flipping 100 times. The program
                    should print the average amount of times heads and tails land.</label>
                <input type="text" id="answer16"/>
                <br/><br/>
                {/* Question 17 */}
                <label htmlFor="answer17">17. What is the following code’s output if 100 then 50 are entered?
                    <br/>
                    <input type="checkbox" id="answer17_a" value="a"/>
                    <label htmlFor="answer17_a">a) 350</label>
                    <br/>
                    <input type="checkbox" id="answer17_b" value="b"/>
                    <label htmlFor="answer17_b">b) 150</label>
                    <br/>
                    <input type="checkbox" id="answer17_c" value="c"/>
                    <label htmlFor="answer17_c">c) 255</label>
                    <br/>
                    <input type="checkbox" id="answer17_d" value="d"/>
                    <label htmlFor="answer17_d">d) 310</label>
                </label>
                <br/><br/>
                {/* Question 18 */}
                <label htmlFor="answer18">18. What shows the range of r’s possible value?
                    <br/>
                    <select id="answer18">
                        <option value="a">a) 1.0 &lt; r &lt;= 2.0</option>
                        <option value="b">b) 1.0 &lt;= r &lt;= 2.0</option>
                        <option value="c">c) 1.0 &lt;= r &lt; 2.0</option>
                        <option value="d">d) 1.0 &lt; r &lt; 2.0</option>
                    </select>
                </label>
                <br/><br/>
                {/* Question 19 */}
                <label htmlFor="answer19">19. Write code that receives 3 numbers (label your variables a, b, and c) and
                    determines if a triangle can exist with the side lengths inputted. Use the formula a^2 + b^2 =
                    c^2</label>
                <input type="text" id="answer19"/>
                <br/><br/>
                {/* Question 20 */}
                <label htmlFor="answer20">20. Create a function that has 3 parameters and prints, “All good!”, if all
                    parameters have an even square root, and “Not all good.” if they don't all have even square
                    roots.</label>
                <input type="text" id="answer20"/>
                <br/><br/>
                {/* Question 21 */}
                <label htmlFor="answer21">21. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                <input type="text" id="answer21"/>
                <br/><br/>
                {/* Question 22 */}
                <label htmlFor="answer22">22. Select all of the variable names that would not work in Python.
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
                <label htmlFor="answer23">23. Write a program that receives a monetary amount ranging from .01 cents to
                    1.00 dollar. Have your program print out the same value in the least amount of coins, starting from
                    quarters and going down to dimes.</label>
                <input type="text" id="answer23"/>
                <br/><br/>
               {/* Question 24 */}
<label htmlFor="answer24">24. Select all values that could be picked by random.randint(20,49)
    <br/>
    <input type="checkbox" id="a" name="answer24" value="a" />
    <label htmlFor="a">a) 49</label>
    <br/>
    <input type="checkbox" id="b" name="answer24" value="b" />
    <label htmlFor="b">b) 19</label>
    <br/>
    <input type="checkbox" id="c" name="answer24" value="c" />
    <label htmlFor="c">c) 20</label>
    <br/>
    <input type="checkbox" id="d" name="answer24" value="d" />
    <label htmlFor="d">d) 48</label>
</label>
                <br/><br/>
                {/* Question 25 */}
                <label htmlFor="answer25">25. Write a program that has a while loop that stops once the user inputs a
                    number that is divisible not by 2 and has a remainder of 3 when divided by 4.</label>
                <input type="text" id="answer25"/>
                <br/><br/>
                <button type="button" onClick={() => PostTestGrader()}>
                    Submit
                </button>
            </div>
        );
    }

    export default PostTest;