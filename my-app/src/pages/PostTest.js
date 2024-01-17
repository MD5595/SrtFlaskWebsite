import React from 'react';

function PostTest() {
    const username = localStorage.getItem('username');

  return (
     <div className="container">
            {/* Question 1 */}
            <label htmlFor="answer1">1. Make a user input-based number guessing game that keeps looping until the user gets the right answer. If the user gets the answer wrong 5 times, make the game stop and print, “Better luck next time.”</label>
            <input type="text" id="answer1" />

            {/* Question 2 */}
            <label htmlFor="answer2">2. What are Math and Random?</label>
            <input type="text" id="answer2" />

            {/* Question 3 */}
            <label htmlFor="answer3">3. Write a program that asks the user to input a number, then prints, "Your number is between 0 and 100" if the number is between 0 and 100 (inclusive).</label>
            <input type="text" id="answer3" />

            {/* Question 4 */}
            <label htmlFor="answer4">4. What are the placeholder variables within a function called?</label>
            <input type="text" id="answer4" />

            {/* Question 5 */}
            <label htmlFor="answer5">5. Is random.randint inclusive or exclusive?</label>
            <input type="text" id="answer5" />

            {/* Question 6 */}
            <label htmlFor="answer6">6. Which module is .fabs stored in?</label>
            <input type="text" id="answer6" />

            {/* Question 7 */}
            <label htmlFor="answer7">7. What would the following code print: for _ in range(48,38,-2): print(_, end=" ")</label>
            <input type="text" id="answer7" />

            {/* Question 8 */}
            <label htmlFor="answer8">8. Write a program that randomly chooses a number from a list and prints the chosen number.</label>
            <input type="text" id="answer8" />

            {/* Question 9 */}
            <label htmlFor="answer9">9. What would the code below print if the user enters 10? (multiple choice)
                x = int(input("Enter a number: "))
                if x != 7:
                print("A")
                if x >= 10:
                print("B")
                if x < 10:
                print("C")
                if x % 2 == 0:
                print("D")</label>
            <input type="text" id="answer9" />

            {/* Question 10 */}
            <label htmlFor="answer10">10. What symbol do you use when you want your program to ignore a line?</label>
            <input type="text" id="answer10" />

            {/* Question 11 */}
            <label htmlFor="answer11">11. When using the modular operator, what are the only possible answers when the divisor is 4?</label>
            <input type="text" id="answer11" />

            {/* Question 12 */}
            <label htmlFor="answer12">12. Input one way you can raise 5 to the 3rd power</label>
            <input type="text" id="answer12" />

            {/* Question 13 */}
            <label htmlFor="answer13">13. What is the output of the code below:
                c = 1
                sum = 0
                while (c < 10):
                c = c + 2
                sum = sum + c
                print(sum)</label>
            <input type="text" id="answer13" />

            {/* Question 14 */}
            <label htmlFor="answer14">14. Which range function will go through every even number through 8-42 (inclusive)?
                <br/>
                a) range(8,42)
                <br/>
                b) range(8,44,2)
                <br/>
                c) range(2,8,44)
                <br/>
                d) range(8,42,2)</label>
            <input type="text" id="answer14" />

            {/* Question 15 */}
            <label htmlFor="answer15">15. How many times is 'i' printed?
                for i in range (14, 45, 15):
                print("Hi")</label>
            <input type="text" id="answer15" />

            {/* Question 16 */}
            <label htmlFor="answer16">16. Write a program that simulates a coin flipping 100 times. The program should print the average amount of times heads and tails land.</label>
            <input type="text" id="answer16" />

            {/* Question 17 */}
            <label htmlFor="answer17">17. What is the following code’s output if 100 then 50 are entered?
                <br/>
                start = int(input("Enter the starting number: "))
                <br/>
                stop = int(input("Enter the ending number: "))
                <br/>
                x = -15
                <br/>
                sum = 0
                <br/>
                for i in range (start, stop, x):
                <br/>
                sum = sum + i
                <br/>
                print(sum)
            </label>
            <input type="text" id="answer17" />

            {/* Question 18 */}
            <label htmlFor="answer18">18. What shows the range of r’s possible value?
                <br/>
                r = random.random() + 1
                <br/>
                a) 1.0 < r <= 2.0
                <br/>
                b) 1.0 <= r <= 2.0
                <br/>
                c) 1.0 <= r < 2.0
                <br/>
                d) 1.0 < r < 2.0
            </label>
            <input type="text" id="answer18" />

            {/* Question 19 */}
            <label htmlFor="answer19">19. Write code that receives 3 numbers (label your variables a, b, and c) and determines if a triangle can exist with the side lengths inputted. Use the formula a^2 + b^2 = c^2</label>
            <input type="text" id="answer19" />

            {/* Question 20 */}
            <label htmlFor="answer20">20. Create a function that has 3 parameters and prints, “All good!”, if all parameters have an even square root, and “Not all good.” if they don't all have even square roots.</label>
            <input type="text" id="answer20" />

            {/* Question 21 */}
            <label htmlFor="answer21">21. What type of loop would you use if you wanted to make it stop after receiving a certain input?</label>
            <input type="text" id="answer21" />

            {/* Question 22 */}
            <label htmlFor="answer22">22. Select all of the variable names that would not work in Python.
                <br/>
                a) _
                <br/>
                b) 33number
                <br/>
                c) Car1%
                <br/>
                d) My age
            </label>
            <input type="text" id="answer22" />

            {/* Question 23 */}
            <label htmlFor="answer23">23. Write a program that receives a monetary amount ranging from .01 cents to 1.00 dollar. Have your program print out the same value in the least amount of coins, starting from quarters and going down to dimes.</label>
            <input type="text" id="answer23" />

            {/* Question 24 */}
            <label htmlFor="answer24">24. Select all values that could be picked by random.randint(20,49)
                <br/>
                a) 49
                <br/>
                b) 19
                <br/>
                c) 20
                <br/>
                d) 48
            </label>
            <input type="text" id="answer24" />

            {/* Question 25 */}
            <label htmlFor="answer25">25. Write a program that has a while loop that stops once the user inputs a number that is divisible not by 2 and has a remainder of 3 when divided by 4.</label>
            <input type="text" id="answer25" />

            <button type="button" onClick={() => PostTestGrader()}>
                Submit
            </button>
        </div>
  );
}

export default PostTest;