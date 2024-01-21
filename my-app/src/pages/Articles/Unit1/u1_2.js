import React from 'react';
import {Link} from "react-router-dom";

function u12() {
    return (
        <div className="container">
            <head>
                <title>1.2 Python Syntax and Formatting Conventions</title>
            </head>


            <h1>1.2 Python Syntax and Formatting Conventions</h1>
            <p>A Python file being formatted improperly or having inappropriately named components will cause it to not
                function.</p>

            <p>The most errors you will face as you program will be syntax errors. Even if your logic is sound, if you
                spell
                something incorrectly your program will not function. Computers are good at following instructions but
                mistakes
                as minor as writing <pre><code>rint("Hello")</code></pre> instead of <pre><code>print("Hello")</code></pre> will trip up the
                computer.</p>

            <p>Indentation indicates a line/block of code is related to the non-indented code directly above it. The
                following
                code will not work due to the unnecessary indent:</p>

            <pre>
                <code>
                    print("Hi.")<br/>
                    &emsp; print("Hi.")
                </code>
            </pre>

            <p>Starting in Unit 3, cases where indentation is required will appear.</p>

            <p>Ensure you include the correct spelling, spacing, and indents within your code.</p>
            <br/>
<Link to="/u1_1" className="btn btn-primary" >Back</Link>
    <Link to="/u1_3" className="btn btn-primary" >Next</Link>         </div>

    );
}

export default u12;