import React, { useState } from 'react';

function PreTest() {
  const [userScore, setUserScore] = useState(0);

  function checkAnswer(questionNumber, correctAnswer) {
    const answerInput = document.getElementById(`answer${questionNumber}`).value.toLowerCase();
    if (answerInput === correctAnswer) {
      setUserScore((prevScore) => prevScore + 1);
    }
  }

  function gradeTest() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your score: ${userScore} out of 10`;
  }

  return (
    <div className="container">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JavaScript Pre-Test</title>
      </head>
      <body>
        <form id="moduleQuestionForm">
          {/* Question 1 */}
          <label htmlFor="answer1">
            1. Make a user input-based number guessing game that keeps looping until the user gets the right answer.
          </label>
          <input type="text" id="answer1" name="answer1" />
          <br />

          {/* Question 2 */}
          <label htmlFor="answer2">2. What module would you use if you wanted to use the sqrt() function?</label>
          <input type="text" id="answer2" name="answer2" />
          <br />

          {/* Question 3 */}
          <label htmlFor="answer3">
            3. Fill in the blank
            num = int(input("Enter a number"))
            if (num > 0 && num < 100){
                console.log("This number is between 0 and 100.")}
          </label>
          <input type="text" id="answer3" name="answer3" />
          <br />

          {/* Question 4 */}
          <label htmlFor="answer4">
            4. Write a program that contains a function that simulates a pen being clicked every time it is called, and call the function 3 times.
          </label>
          <input type="text" id="answer4" name="answer4" />
          <br />

          {/* Question 5 */}
          <label htmlFor="answer5">5. Write a function that allows variables to be cast as strings.</label>
          <input type="text" id="answer5" name="answer5" />
          <br />

          {/* Question 6 */}
          <label htmlFor="answer6">
            6. Write a program that has a number a user has to guess. The user will be asked to enter a number between 0 and 10 (inclusive), and the computer will print, “Correct!”, if correct or, “Nope, better luck next time”, if incorrect.
          </label>
          <input type="text" id="answer6" name="answer6" />
          <br />

          {/* Question 7 */}
          <label htmlFor="answer7">
            7. Write a program that has a variable that contains an integer, and a second variable that is the first variable casted to a float.
          </label>
          <input type="text" id="answer7" name="answer7" />
          <br />

          {/* Question 8 */}
          <label htmlFor="answer8">8. What does the append() function do?</label>
          <select id="answer8" name="answer8">
            <option value="none">Select an option</option>
            <option value="adds_element">Adds an element to the end of a list</option>
            <option value="adds_number">Adds a number to the end of a variable</option>
            <option value="varies">Varies based on what is placed within it</option>
            <option value="adds_variable">Adds a variable to the start of a list</option>
          </select>
          <br />

          {/* Question 9 */}
          <label htmlFor="answer9">9. Create a list that has flats, integers, and strings stored within it.</label>
          <input type="text" id="answer9" name="answer9" />
          <br />

          {/* Question 10 */}
          <label htmlFor="answer10">10. Which symbol has the highest precedence in mathematical operations?</label>
          <select id="answer10" name="answer10">
            <option value="none">Select an option</option>
            <option value="double_slash">//</option>
            <option value="double_star">**</option>
            <option value="minus">-</option>
            <option value="parentheses">( )</option>
          </select>
          <br />

          <button type="button" onClick={() => gradeTest()}>
            Submit
          </button>
        </form>

        <div id="result"></div>
      </body>
    </div>
  );
}

export default PreTest;