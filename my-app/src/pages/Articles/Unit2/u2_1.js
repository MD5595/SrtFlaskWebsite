import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_2_1() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '');
        if (cleaned == '16%3') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 2.1: Basic Symbols</title>
            </head>

            <body>
            <h1>Unit 2.1: Basic Symbols</h1>
            <p>Mathematical symbols, which are operators, are used in Python equations.</p>

            <p>Here are the more basic math operators:</p>
            <ul>
                <li><strong>+</strong> - Addition</li>
                <li><strong>-</strong> - Subtraction</li>
                <li><strong>*</strong> - Multiplication</li>
                <li><strong>/</strong> - Division</li>
                <li><strong>%</strong> - Remainder. The left number after division</li>
                <li><strong>**</strong> - Exponents. The base is placed to the left of the symbol while the power is to
                    the
                    right
                </li>
                <li><strong>//</strong> - Floor Division. Removes any decimals produced from the division</li>
            </ul>

            <p>When you want to display the solution to a math problem, you can either assign it to a variable then
                print it,
                directly place the equation in a print statement, or place an equation using variables inside a print
                statement.</p>

            <pre><code>
      num1 = 10 % 3 <br/>
      num2 = 3 ** 2 <br/>
      num3 = 5 // 2 <br/>
      num4 = 2 <br/>
      num5 = 14 <br/>
      <br/>
      print(num1) <br/>
      print(num2) <br/>
      print(num3) <br/>
      print(3 // 10) <br/>
      print(num4 / num5) <br/>
    </code></pre>

            <p>Outputs:</p>
            <pre><code>
      1 <br/>
      9 <br/>
      2 <br/>
      0 <br/>
      7 <br/>
    </code></pre>
            </body>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Complete the code below if you wanted to print the remainder of 16 after dividing by 3.</p>
                        <inter><code>
                            print(<input ref={inputRef} type="text"/>)
                        </code></inter>
                        <br/>

                    </label><br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p>16%3<br/>
                        </div>
                    )}         </form>
                <br/></div>
            <br/>
            <Link to="/u1_5" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u2_2" className="btn btn-primary">Next</Link></div>
    );
}
