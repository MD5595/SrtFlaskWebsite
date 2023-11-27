import React from 'react';
import {Link} from "react-router-dom";

function u22() {
    return (
        <div className="container">
            <head>
                <title>Unit 2.2: The Order of Operations</title>
            </head>

            <body>
            <h1>Unit 2.2: The Order of Operations</h1>
            <p>Whenever a Python program has multiple operators in one line, different parts of the equation will be
                solved in
                a specific order.</p>

            <p>Below is the order in which Python operations are processed:</p>
            <ol>
                <li><strong>()</strong> - Parentheses</li>
                <li><strong>**</strong> - Exponents</li>
                <li><strong>*</strong>, <strong>/</strong>, <strong>//</strong>, <strong>%</strong> - Multiplication,
                    Division,
                    Floor Division, Modulus
                </li>
                <li><strong>+</strong>, <strong>-</strong> - Addition, Subtraction</li>
            </ol>

            <p>Once all operators left have the same precedence, the equation will be solved from left to right.</p>

            <p>Look at the order of operations in action:</p>
            <pre>
X = 3 * 6 + 3 * (6 / 2) + 2 ** 2
print(X)
</pre>

            <p>Output:</p>
            <pre>
31
</pre>

            <p>First (6 / 2), then 2 ** 2, 3 * 6, 3 * 3, 18 + 9, and finally 27 + 4 to get 31.</p>

            <p>Python does basic math in the same order you would do on paper.</p>
            </body>
<br/>
            <Link to="/u2_3">2.3</Link>
        </div>
    );
}

export default u22;