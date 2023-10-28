import React from 'react';

function u1_4() {
    return (
        <div className="container">
            <head>
                <title>Unit 1.4: Printing and Inputting</title>
            </head>

            <body>
            <h1>Unit 1.4: Printing and Inputting</h1>
            <p>As Unit 1.1 showed, code you write can be displayed on the console by
                utilizing <code>print()</code> functions.</p>

            <p>If you want to print a number or the contents of a variable, you simply place the number/variable inside
                the
                parentheses as shown below:</p>

            <pre>
Name = "Jesse"
print(Name)
print(16)
    </pre>

            <p>Output:</p>
            <pre>
Jesse
16
    </pre>

            <p>When printing a statement, you surround your text with quotation marks:</p>

            <pre>
print("Hello, it’s nice to meet you.")
    </pre>

            <p>Output:</p>
            <pre>
Hello, it’s nice to meet you.
    </pre>

            <p>Oftentimes, you will be required to make your programs interactive. This will be done by utilizing the
                <code>input()</code> function. A variable will be assigned the text that the user inputs:</p>

            <pre>
Age = input("Input your age: ")
print("You are " + Age)
    </pre>

            <p>Input:</p>
            <pre>
Input your age: 17
    </pre>

            <p>Output:</p>
            <pre>
You are 17
    </pre>

            <p>Inputs are automatically seen as words/text. In order to have an input that's a number be seen as one by
                the
                computer, which would allow the variable the input is assigned to partake in math equations,
                the <code>int()</code>
                function must be used. And when you want to print a number and words/letters in the same line, ensure
                the number is
                within a <code>str()</code> function, which turns the number into a string while it is within
                the <code>print</code>
                statement:</p>

            <pre>
Age = int(input("Input your age: "))
Age_plus_ten = Age + 10
print("You will be " + str(Age_plus_ten) + " in 10 years.")
    </pre>

            <p>Input:</p>
            <pre>
Input your age: 17
    </pre>

            <p>Output:</p>
            <pre>
You will be 27 in 10 years.
            </pre> </body>
        </div>
);
}

export default u1_4;