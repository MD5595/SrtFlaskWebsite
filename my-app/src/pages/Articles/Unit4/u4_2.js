import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_4_2() {
    const firstVal = useRef(null);
    const secondVal = useRef(null);
    const thirdVal = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (firstVal.current.value == '50' && secondVal.current.value == '33' && thirdVal.current.value == '-2') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">

            <head>
                <title>Unit 4.2: For Loops</title>
            </head>

            <body>
            <h1>Unit 4.2: For Loops</h1>
            <p>For loops are used when you know how many iterations your bit of code will have. The for loop below uses
                the range()
                function to cycle through the numbers 0-9 (programming languages start counting at 0 instead of 1).</p>

            <pre><code>
    for x in range(10): <br/>
                &emsp;print("X is less than ten") <br/>
                &emsp;x += 1
    </code></pre>

            <p>range(start, stop, step) is the format the range() function follows, with only the stop
                parameter/argument being
                required (step is the amount the count variable increases every loop. When the start argument is included, the for loop will start iterating at that value. When only one value is placed inside the range function,
                the start and step values are automatically 1 while the stop value will be the entered value.
            When two values are entered, they will be the start and stop, respectively, and the step value will be 1. </p>

            <p>Break is a keyword that can be used in both for and while loops. Break causes a loop to end. Break is
                typically used in if-statements to exit a loop based on a condition.
            </p>
            <pre><code>num = int(input(“Enter a number: From 1-20”))<br/>
for i in range(2,10):<br/>
                &emsp;print(i)<br/>
                &emsp;if i==num:<br/>
                &emsp;&emsp;break<br/>
                &emsp;X += 1<br/><br/>
for i in range(9):<br/>
                &emsp;if i > 3:<br/>
                &emsp;&emsp;break<br/>
                &emsp;print(i)<br/>
</code></pre>
            </body>
            <div className="container-exercise">
                <h2>Practice Exercise:</h2>
                <p>Fill in the blank for the range function that starts at 50, ends at 33, and decreases by 2 every loop.<br/>
                </p>
                <form onSubmit={handleSubmit}>

                    <inter><code>
                        range(
                        <label><input ref={firstVal} type="text"/></label><br/>,<label><input ref={secondVal}
                                                                                              type="text"/></label><br/>,
                        <label><input ref={thirdVal} type="text"/></label><br/>)

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
                    )}</form>

                <br/></div>
            <br/>
            <Link to="/quiz4" className="btn-quiz">Take an optional quiz for additional practice!</Link>
            <br/><br/><br/>
            <Link to="/u4_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u5_1" className="btn btn-primary">Next</Link>
        </div>
    );
}
