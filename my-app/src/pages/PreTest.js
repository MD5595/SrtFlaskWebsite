import React, {useState} from 'react';
import PreTestGrader  from './components/PreTestGrader';
import LandingPage, { username } from './pages/LandingPage';
import React, {useEffect, useState} from 'react';


function PreTest() {
    const [userScore, setUserScore] = useState(0);

    return (
        <div className="container">
            <h1>JavaScript Pre-Test</h1>
            <form>
                {/* Question 1 */}


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

                {/* Question 4 */}
                <label htmlFor="answer4">4. Write a program that contains a function that simulates a pen being clicked
                    every time it is called, and call the function 3 times.</label>
                <input type="text" id="answer4"/>

                {/* Question 5 */}
                <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
                <input type="text" id="answer5"/>

                {/* Question 6 */}
                <label htmlFor="answer6">6. Write a program that has a number a user has to guess. The user will be
                    asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if
                    correct or, “Nope, better luck next time”, if incorrect.</label>
                <input type="text" id="answer6"/>

                {/* Question 7 */}
                <label htmlFor="answer7">7. Write a program that has a variable that contains an integer, and a second
                    variable that is the first variable casted to a float.</label>
                <input type="text" id="answer7"/>

                {/* Question 8 */}
                <label htmlFor="answer8">8. What does the append() function do?</label>
                <select id="answer8">
                    <option value="none">Select an option</option>
                    <option value="adds_element">Adds an element to the end of a list</option>
                    <option value="adds_number">Adds a number to the end of a variable</option>
                    <option value="varies">Varies based on what is placed within it</option>
                    <option value="adds_variable">Adds a variable to the start of a list</option>
                </select>

                {/* Question 9 */}
                <label htmlFor="answer9">9. Create a list that has floats, integers, and strings stored within
                    it.</label>
                <input type="text" id="answer9"/>

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

                {/* Question 11 */}
                <label htmlFor="answer11">11. What kind of data type is most commonly associated with
                    conditionals?</label>
                <input type="text" id="answer11"/>

                {/* Question 12 */}
                <label htmlFor="answer12">12. Write a program that randomly chooses between 4 numbers, then prints the
                    chosen number.</label>
                <input type="text" id="answer12"/>

                {/* Question 13 */}
                <label htmlFor="answer13">13. What would the following code print? for _ in range(48, 38, -2): print(_,
                    end=" ")</label>
                <input type="text" id="answer13"/>

                {/* Question 14 */}
                <label htmlFor="answer14">14. Which variable name below is valid? 333number, –hi-, __Num__,
                    (age)</label>
                <input type="text" id="answer14"/>

                {/* Question 15 */}
                <label htmlFor="answer15">15. Input the code that would allow the user to input a number, cast the input
                    as a float, and assign the value to the variable “num1”</label>
                <input type="text" id="answer15"/>

                {/* Question 16 */}
                <label htmlFor="answer16">16. What will print(10//4) display on the terminal?</label>
                <input type="text" id="answer16"/>

                {/* Question 17 */}
                <label htmlFor="answer17">17. When to use = instead of ==?</label>
                <input type="text" id="answer17"/>

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

                {/* Question 19 */}
                <label htmlFor="answer19">19. Write a program which has 2 variables, one of which equals 2 and the other
                    equals. There should be a while loop that only stops when...</label>
                <input type="text" id="answer19"/>

                {/* Question 20 */}
                <label htmlFor="answer20">20. What type of loop would you use if you wanted to make it stop after
                    receiving a certain input?</label>
                <input type="text" id="answer20"/>

                {/* Question 21 */}
                <label htmlFor="answer21">
  21. Select all of the variable names that would not work in Python.
  <ul>
    <li><input type="checkbox" id="option1" name="answer21" value="--Hi"/> <label htmlFor="option1">--Hi</label></li>
    <li><input type="checkbox" id="option2" name="answer21" value="33number"/> <label htmlFor="option2">33number</label></li>
    <li><input type="checkbox" id="option3" name="answer21" value="Car1%"/> <label htmlFor="option3">Car1%</label></li>
    <li><input type="checkbox" id="option4" name="answer21" value="My age"/> <label htmlFor="option4">My age</label></li>
  </ul>
</label>


                {/* Question 22 */}
                <label htmlFor="answer22">22. What operator would you first use if you wanted to determine how many
                    quarters would fit inside an amount of money a user inputted?</label>
                <input type="text" id="answer22"/>

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

                {/* Question 24 */}
                <label htmlFor="answer24">24. Write a program that has a list with 3 numbers within it. Use a function
                    to add 45 to the list.</label>
                <input type="text" id="answer24"/>

                {/* Question 25 */}
                <label htmlFor="answer25">25. What comparison operator would be used if you wanted to make a logical
                    statement that hinges on an expression being equal to a specific number?</label>
                <input type="text" id="answer25"/>

                <button type="button" onClick={() => gradeTest()}>
                    Submit
                </button>

            </form>

            <div id="result"></div>
        </div>
    );
}

export default PreTest;