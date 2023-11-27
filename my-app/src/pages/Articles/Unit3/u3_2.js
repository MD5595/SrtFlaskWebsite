import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_3_2() {
    const firstIf = useRef(null);
    const secondElif = useRef(null);
    const thirdElse = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if ((firstIf.current.value.replaceAll(' ', '') == 'ifnum1%2==1andnum1<5:' || firstIf.current.value.replaceAll(' ', '') == 'ifnum1<5andnum1%2==1:') &&
            (secondElif.current.value.replaceAll(' ', '') == 'elifnum1%2==1andnum1>=5:' || secondElif.current.value.replaceAll(' ', '') == 'elifnum1>=5andnum1%2==1:') &&
            thirdElse.current.value.replaceAll(' ', '') == 'else:') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

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
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Finish the following code given the following prompt:<br/>
                            Write a program that asks the user to input a number that ranges from 0-10. <br/>
                            If the number is odd and less than 5, print "This is a special number". <br/>
                            Else if the number is odd and more than/equal to 5, print "This is also a special
                            number." <br/>
                            Otherwise print "Just a number". <br/>
                            Note: To determine if a number is even or odd use the remainder operator.
                        </p>
                        <inter><code>
                            num1 = int(input("Input a number between 0 and 10: "))<br/>
                            <label><input ref={firstIf} type="text"/></label><br/>
                            &emsp;print("This is a special number")<br/>
                            <label><input ref={secondElif} type="text"/></label><br/>
                            &emsp;print("This is also a special number")<br/>
                            <label><input ref={thirdElse} type="text"/></label><br/>
                            &emsp;print("Just a number")

                        </code></inter>
                        <br/>
                    </label>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p>
                                <pre><code>
                            num1 = int(input("Input a number between 0 and 10: "))<br/>
                                    <b>if num1 % 2 == 1 and num1 &lt; 5:</b><br/>
                            &emsp;print("This is a special number")<br/>
                                    <b>elif num1 % 2 == 1 and num1 >= 5 :</b><br/>
                            &emsp;print("This is also a special number")<br/>
                                    <b>else:</b><br/>
                            &emsp;print("Just a number")

                        </code></pre>
                            </p>
                        </div>
                    )}   </form>
                <br/></div>
            <br/>
            <Link to="/quiz3" className="btn-quiz">Take an optional quiz for additional practice!</Link>
            <br/><br/><br/>
            <Link to="/u3_1" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u4_1" className="btn btn-primary">Next</Link>
        </div>
    );
}
