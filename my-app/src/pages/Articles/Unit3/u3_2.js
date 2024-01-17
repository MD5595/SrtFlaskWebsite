import React from 'react';
import {Link} from "react-router-dom";

function u32() {
    return (
        <div className="container">
            <head>
                <title>Unit 3.2: Else-if</title>
            </head>

            <body>
            <h1>Unit 3.2: Else-if</h1>
            <p>The more complicated version of if else statements are else-if statements, which have 2 or more
                statements. Below is
                a program that utilizes the else if statements.</p>

            <pre>
Name = input("Enter your name")

if x == "Tom":
    print("Hi")
elif x == "John":
    print("Hi John")
elif x == "June":
    print("Hi June")
    </pre>

            <p>Any number of conditions can be placed within if/elif statements, and there can be any number of elif
                statements
                within one conditional. Some else-if and if statements have no "else" statement, meaning if none of the
                above
                conditions are met nothing will happen.</p>

            <p>Remember that you can place anything within if statements, including more if statements and
                conditionals.</p>
            </body>
            <br/>
             <Link to="/u3_1" className="btn btn-primary" >Back</Link>
    <Link to="/u4_1" className="btn btn-primary" >Next</Link>
        </div>
    );
}

export default u32;