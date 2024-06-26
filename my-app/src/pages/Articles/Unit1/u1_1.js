import {React, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {send_time} from '../../../components/AxiosCalls';

export default function Unit_1_1() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (inputRef.current.value.toLowerCase() === 'print') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const loggedInUser = localStorage.getItem('username');
    send_time('unit1_1', loggedInUser);

    return (
        <div className="container">
            <h1>1.1 Hello World</h1>
            <p><strong>What is Python?</strong> Python is a programming language that is used for a variety of purposes
                such as automation of tasks, data analysis, and website creation. Python is known for its simplicity;
                writing code in Python is often like writing in plain English. It is often recommended as the first
                programming language for beginners. Many of Python's features are intuitive and straightforward to
                implement.</p>

            <p>Here is a simple program:</p>
            <pre><code>
            # Prints "Hello world"<br/>
            print("Hello World!")
            </code> </pre>

            <p>Python code like this can be created in an Integrated Development Environment (IDE) or a code editor. For
                this course, a code editor integrated onto this website will be used.</p>

            <p>In the program above, there are three components: the comment, the print() function, and the text
                within it. By putting this code into a text editor and running it, the following code will be outputted
                to the console:</p>
            <pre><code>
            Hello World!
            </code></pre>

            <p>The comment on the first line is not read by the computer due to the `#`.
                Comments are used when you want
                to note a piece of information within your code.</p>
            <br/>
            <p>Now that you understand the basics of the “Hello World!” program, we will
                go over how to properly set up Python programs.</p><br/>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Insert the missing part of the code below to output the users name:</p>

                        <pre><code>
                            name = input("Write your name") <br/>
                            <input ref={inputRef} type="text"/>(name)
                        </code></pre>
                        <br/>
                    </label>
                    <button type="submit">Submit answer</button> <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p><pre><code>name = input("Write your name!")<br/>
                            <b>print</b>(name)</code></pre></p>
                        </div>
                    )}
                </form>
            </div>


            <br/>
            <Link to="/u1_2" className="btn btn-primary">
                Next
            </Link>
        </div>
    );
}