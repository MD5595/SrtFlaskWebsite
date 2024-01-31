import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_5_1() {
    const funCall = useRef(null);
    const funcParam = useRef(null);
    const returnCall = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(funCall, funcParam, returnCall)
        if (funCall.current.value.replaceAll(' ', '') == 'def' &&
            funcParam.current.value.replaceAll(' ', '') == 'x' &&
            (returnCall.current.value.replaceAll(' ', '') == 'x+2' || returnCall.current.value.replaceAll(' ', '') == '2+x')) {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 6.1: Functions</title>
            </head>

            <body>
            <h1>Unit 6.1: Functions</h1>
            <p>Python comes preloaded with many functions, and more can be used by importing modules. You have the
                ability to
                create your own functions.</p>

            <p>Functions are generally made to decrease the amount of repetitive code you have to write, shortening your
                program
                and lowering its complexity.</p>

            <pre><code>
        def count_down(): <br/>
                &emsp;print("3") <br/>
                &emsp;print("2") <br/>
                &emsp;print("1") <br/>
                &emsp;print("0") <br/>
            <br/>
        count_down() <br/>
    </code></pre>

            <p>Output:</p>
            <pre><code>
        3 <br/>
        2 <br/>
        1 <br/>
        0 <br/>
    </code></pre>

            <p>Functions like this perform a predefined task without the option of customization.</p>

            <p><code>def</code> is a keyword that allows you to define a function. A defined function is made up of a
                function
                name, the parameters (optional), a colon, the action the function performs, and
                the <code>return</code> keyword
                (optional and typically only present when there are parameters), in that order.</p>
            </body>
            <div className="container-exercise">
                <h2>Practice Exercise:</h2>
                <p>Write a function called "add_two" that takes a value x and returns x+2.</p><br/>
                <form onSubmit={handleSubmit}>

                    <inter><code>
                        <label><input ref={funCall} type="text"/></label> add_two(<label><input ref={funcParam}
                                                                                                type="text"/></label>):<br/>
                        return <label><input ref={returnCall} type="text"/></label><br/>
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
            <Link to="/u4_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u5_2" className="btn btn-primary">Next</Link>
        </div>
    );
}
