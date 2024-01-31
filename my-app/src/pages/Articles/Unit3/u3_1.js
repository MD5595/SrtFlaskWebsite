import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_3_1() {
    const firstIf = useRef(null);
    const secondIf = useRef(null);
    const firstElse = useRef(null);
    const secondElse = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (firstIf.current.value.replaceAll(' ', '') == 'ifx==y:' &&
            secondIf.current.value.replaceAll(' ', '') == 'ifx==y:' &&
            firstElse.current.value.replaceAll(' ', '') == 'else:' &&
            secondElse.current.value.replaceAll(' ', '') == 'else:') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 3.1: If-Else Statements</title>
            </head>

            <body>
            <h1>Unit 3.1: If-Else Statements</h1>
            <p>Conditional statements determine if one or multiple conditions have been met, then, depending on whether
                the
                condition got fulfilled or not, perform an action.</p>

            <p>Conditionals use logical operators.</p>

            <p>Below are the comparison operators:</p>
            <ul>
                <li><strong>&gt;</strong> - Greater than</li>
                <li><strong>&lt;</strong> - Less than</li>
                <li><strong>==</strong> - Equal to</li>
                <li><strong>!=</strong> - Not equal to</li>
                <li><strong>&gt;=</strong> - Greater than or equal to</li>
                <li><strong>&lt;=</strong> - Less than or equal to</li>
            </ul>

            <p>Below are the logical operators. The first two are used to combine conditions while
                the <code>not</code> statement
                is used to reverse the Boolean value of a statement:</p>
            <ul>
                <li><strong>and</strong> - If both statements are true, the condition is fulfilled</li>
                <li><strong>or</strong> - If either condition is true, the condition is fulfilled</li>
                <li><strong>not</strong> - Reverses the Boolean value of a statement</li>
            </ul>

            <p>Values get compared and if the statement is true (returning True, a Boolean value) then the statement
                under the
                condition will get executed.</p>

            <p>The <code>if</code> statement below is made up of a conditional (is x greater than 10) statement then
                performs an action if it is met (prints “Hello”):</p>

            <pre><code>
                if x &gt; 10 or x != 10: <br/>
                &emsp;print("Hello")
            </code></pre>

            <p>Note the indented portion of the code and the colon at the end of the condition that signifies that
                everything
                below that is indented only happens if the condition is met.</p>

            <p><code>If-else</code> statements are the same as <code>if</code> statements, but if the original condition
                is
                not fulfilled, another action will occur:</p>

            <pre><code>
            X = int(input("Enter a number"))<br/>

            if X &gt; 10:<br/>
                &emsp;print("X is greater than 10.")<br/>
            else: <br/>
                &emsp;print("X is either less than 10")<br/>
                &emsp;print("Or 10.")
    </code></pre>

            <p>Note how you can include multiple actions under one condition.</p>
            </body>
            <div className="container-exercise">
                <h2>Practice Exercise:</h2>
                <p>Finish the following code given the following prompt:<br/>
                    Write a program that receives a number and prints "Good Job!" if it has a whole square root.<br/>
                    If it doesn't, it gives the user another chance to input another number and try again. <br/>
                    If the user succeeds on the second try it prints "Good Job!", otherwise "Maybe next time!".</p>
                <form onSubmit={handleSubmit}>

                    <inter><code>
                        import math <br/>
                        num1 = int(input("Input a number: ")) <br/>
                        x = math.sqrt(num1) <br/>
                        y = math.floor(x) <br/><br/>
                        <label><input ref={firstIf} type="text"/></label><br/>

                        print("Good job!") <br/><br/>
                        <label><input ref={firstElse} type="text"/></label><br/>

                        &emsp;print("Try one more time.") <br/>
                        &emsp;num1 = int(input(" Input a number: ")) <br/>
                        &emsp;x = math.sqrt(num1) <br/>
                        &emsp;y = math.floor(x) <br/><br/>
                        <label><input ref={secondIf} type="text"/></label><br/>


                        &emsp;&emsp; print("Good job!")<br/><br/>
                        <label><input ref={secondElse} type="text"/></label><br/>

                        &emsp;&emsp; print("Maybe next time!")<br/><br/>
                    </code></inter>
                    <br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p>name = input("Write your name")<br/>
                                <b>print</b>(name)</p>
                        </div>
                    )}  </form>

                <br/></div>
            <br/>
            <br/>
            <Link to="/u2_3" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u3_2" className="btn btn-primary">Next</Link></div>
    );
}
