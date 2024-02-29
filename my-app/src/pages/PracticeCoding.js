import React from 'react';

function PracticeCoding() {
  return (
    <div className="container">
      <h1><a href="https://www.programiz.com/python-programming/online-compiler/"
             target="_blank">Practice Coding</a>
</h1>
        <p>At the top of this page is a link to an online code complier,
            where you can practice coding. Below are numerous practice problems that you can solve. You can utilize them,
            or just play around with the complier .</p>
        <p><b>Unit 1: Introduction </b><br/>
        1) Make a program that contains 4 variables. There should be a int, float, and string.
            <br className="small-break"/>
            2) Make a program that asks the user for their age. Cast the variable that had
            the input assigned to it as a float, then print it.
            <br className="small-break"/>
            3) Make a program that has 2 variables that contain different numbers.
            Utilize an f-string to print out these numbers with the sentence, "The numbers __ and __ are awesome"
        </p>
        <p><b>Unit 2: Math</b>
        <br/>
            1) Write a program that utilizes a function to calculate the area on a circle with a radius of 4.
           <br className="small-break"/>
            2) Assign -4.25 to a variable, and use an imported function to make the variable's value -4. Use
            another function to make the variable's value 4.
            <br className="small-break"/>
            3) Write a Python program that converts radians to degrees (1 radian = 180 π).<br/>
        </p>
        <p><b>Unit 3: Conditional</b>
            <br/>
1) Make a program that asks the user for their age. If they are 15, have the program "You are allowed to enter" If the user inputs a number other than 15,
            have the program print "You are not allowed to enter".<br className="small-break"/>
            2) Make a program that first asks the user to input their name and grade. Next write an else if statement that prints, "Welcome, &#123;the inputted username&#125;"
          if the name is not John or Sam, and "You are not welcome" if the inputted grade
            is greater than or equal to 10. Have any other input make the else if statement print, "Sorry, please come again tomorrow"<br className="small-break"/>
        </p>
        <p><b>Unit 4: Loops </b><br className="small-break"/>
1)Create a program that prints out the output (in the same format) below using a for loop.<br/>
<pre><code>
    &emsp;&emsp;&emsp;&emsp;&emsp;*<br/>
&emsp;&emsp;&emsp;&emsp;**<br/>
&emsp;&emsp;&emsp;***<br/>
&emsp;&emsp;****<br/>
&emsp;*****<br/></code></pre>
2) Create a for loop that has a range of 1 to 30. Have it print "Fizz" if the
            current count variable is divisble by 3, "Buzz" if the current count variable is divisble by 5,
            and "FizzBuzz" if the current count variable is divisble by 3 and 5.
            <br className="small-break"/>
        </p>
        3) Create a number guessing game. Have the correct number be a value from 1 to 100, and a while loo that prints out that your guess is wrong, as well as if the
        guess is too high or low if the guess is wrong, and "Correct!" if the guess is right. If the number is guessed correctly within the first 5 guesses have "Congrats, you are the best!" be printed instead.
        <p><b>Unit 5: Functions</b><br/>
1) Create a function that has 2 parameters. If the remainder <br className="small-break"/>
          2) Create a program that allows the user to input 4 numbers. Include a function named largest_abs_val with 4 parameters that 
          returns the number with the largest absolute value. Call the function the function and have the 4 inputted values be used in the function. <br className="small-break"/>
            3) Create a function that has one parameter, and  <br className="small-break"/>
        </p>
        <p><b>Unit 6: Lists</b><br/>
1) Create a list that contains one value of each datatype. After this use a preexisting function to add 4 to the list.<br className="small-break"/>
            2) Create a list that contains 4 values. Have the 3rd index of the list be printed.<br className="small-break"/>
            3) Write a function that replaces the 4th index of a list with a random value between 0 and 50.<br className="small-break"/>
            4) Write a function that reverses the order of a list's contents.<br className="small-break"/>
            5) Write a function that lowercases the first and last strings in a list. <br className="small-break"/>
            6) Create an empty list, then make a for loop that adds 10 random numbers to the list that are between 1 and 200. Include an if else statement at the end of the program that prints "Nice!" if the remainder
            of the first two values is greater the reminder of the 
            if more than 39, and "Not nice!" in any other situation. <br className="small-break"/>

        </p>

    </div>
  );
}

export default PracticeCoding;
