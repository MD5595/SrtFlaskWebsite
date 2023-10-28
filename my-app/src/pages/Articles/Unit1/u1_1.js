import React from 'react';

import {Link, useMatch, useResolvedPath} from "react-router-dom"

function u1_1() {
    return (
        <div className="container">
            <h1>1.1 Hello World</h1>
            <p><strong>What is Python?</strong> Python is a programming language that is used for a variety of purposes
                such as automation of tasks, data analysis, and website creation. Python is known for its simplicity;
                writing code in Python is often like writing in plain English. It is often recommended as the first
                programming language for beginners. Many of Python's features are intuitive and straightforward to
                implement.</p>

            <p>Here is a simple program:</p>
            <pre>
            # Prints "Hello world"
            print("Hello World!")
    </pre>

            <p>Python code like this can be created in an Integrated Development Environment (IDE) or a code editor. For
                this course, the PyCharm IDE will be used.</p>

            <p>In the program above, there are three components: the comment, the `print()` function, and the text
                within it. By putting this code into a text editor and running it, the following code will be outputted
                to the console:</p>
            <pre>
Hello World!
    </pre>

            <p>The comment on the first line is not read by the computer due to the `#`. Comments are used when you want
                to note a piece of information within your code.</p>

            <p>Now that you understand the basics of the “Hello World!” program, we will
                go over how to properly set up Python programs.</p>
        </div>
    );
}

export default u1_1;