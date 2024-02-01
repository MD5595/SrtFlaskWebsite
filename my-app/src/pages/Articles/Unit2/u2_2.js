import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_2_2() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '');
        if (cleaned == 'print(((38*2.1)/12)/3**2)') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

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
            <pre><code>
                X = 3 * 6 + 3 * (6 / 2) + 2 ** 2 <br/>
                print(X)
            </code></pre>

            <p>Output:</p>
            <pre><code>
                31
            </code></pre>

            <p>First (6 / 2), then 2 ** 2, 3 * 6, 3 * 3, 18 + 9, and finally 27 + 4 to get 31.</p>

            <p>Python does basic math in the same order you would do on paper.</p>
            </body>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Write code that prints the product of 38 and 2.1, divided by 12, divided by 3 which is raised
                            to the second power</p>
                        <input ref={inputRef} type="text"/>
                    </label><br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p>print(((38*2.1)/12)/3**2)<br/>
                        </div>
                    )}</form>
                <br/></div>
            <br/><br/>
            <Link to="/u2_1" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u2_3" className="btn btn-primary">Next</Link></div>
    );
}
