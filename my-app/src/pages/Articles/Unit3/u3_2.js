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

            <pre><code>
            Name = input("Enter your name")<br/>
            <br/>
            if x == "Tom": <br/>
            &emsp;print("Hi")<br/>
            elif x == "John":<br/>
            &emsp;print("Hi John")<br/>
            elif x == "June":<br/>
            &emsp;print("Hi June")<br/>
            </code></pre>

            <p>Any number of conditions can be placed within if/elif statements, and there can be any number of elif
                statements
                within one conditional. Some else-if and if statements have no "else" statement, meaning if none of the
                above
                conditions are met nothing will happen.</p>

            <p>Remember that you can place anything within if statements, including more if statements and
                conditionals.</p>
            </body>
            <br/>
            <Link to="/quiz3" className="btn-quiz">Take an optional quiz for additional practice!</Link>
<br/><br/><br/>
             <Link to="/u3_1" className="btn btn-primary" >Back</Link>
             &nbsp;<Link to="/u4_1" className="btn btn-primary" >Next</Link>
        </div>
    );
}

export default u32;