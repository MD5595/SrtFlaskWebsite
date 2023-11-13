import React from 'react';
import {Link} from "react-router-dom";

function u13() {
  return (
    <div className="container">
      <head>
    <title>1.3 Variables</title>
</head>

<body>
    <h1>1.3 Variables</h1>
    <p>Variables are values or characters that are stored within a phrase. Some of the data types that variables can store
        are strings (any characters placed within " "), integers (any whole number), and floats (numbers with decimal
        places).</p>

    <p>Making a variable and giving it a value is called variable declaration. Some examples are shown below:</p>

    <pre>
A = 28
My_name = "John"
Number1 = 1
_car_ = "F-150"
    </pre>

    <p>Note the use of an equal sign to assign values to the variables. In Unit 3.1, we will go over Python's equal
        symbol.</p>

    <p>By using variables, we can label information using names that allow code to be clear.</p>

    <p>Below is the code for a program:</p>

    <pre>
import random

num1 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
animal = random.choice(["Cow", "Pig", "Sheep", "Dog", "Whale"])

your_random_password = str(animal) + str(num1)
print(your_random_password)
    </pre>

    <p>Even if you don't understand some parts such as <code>random.choice</code> and <code>str()</code>, you can reasonably
        figure out that this is the code for a random password generator. As you progress through this course, you will
        find out that it is not hard to get lost when overlooking code you are currently working on. By having
        appropriately named variables, you will reduce the time you spend rereading your code to regain an understanding
        of it.</p>

    <p>Below is the same code but with non-descriptive names:</p>

    <pre>
import random

dwq = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
ejd = random.choice(["Cow", "Pig", "Sheep", "Dog", "Whale"])
qua = str(ejd) + str(dwq)
print(qua)
    </pre>

    <p>As you can see, this code is much harder to understand compared to its descriptive version.</p>

    <p>There are some rules tied with variable naming:</p>

    <ul>
        <li>Variables must start with a letter or underscore.</li>
        <li>Variables can only contain the letters/symbols A-Z, 0-9, and _.</li>
        <li>Variables with different capitalization are different, even if the spelling is the same.</li>
        <li>When making a variable that holds a word, " " must be used.</li>
        <li>Variables cannot have the same name as keywords.</li>
    </ul>

    <p>Some examples of incorrect variable names, along with reasoning as to why the code is incorrect:</p>

    <pre>
--hi = "hi"  # A non-letter/underscore character is at the front of the variable name
333number = 21  # A number starts off the variable
%&$*() = "Word"  # Illegal characters
my age = "17"  # A space
    </pre>

    <p>Making your variables descriptive is vital to creating readable code that is easily decipherable.</p>
</body><br/>
            <Link to="/u1_4">1.4</Link>
    </div>
  );
}

export default u13;