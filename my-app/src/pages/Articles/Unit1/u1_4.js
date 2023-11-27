import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {send_time} from '../../../components/AxiosCalls';

export default function Unit_1_4() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.toLowerCase().replaceAll(' ', '');
        if (cleaned == 'input("writeyourname")' || cleaned == "input('writeyourname')") {
            alert('Correct!');
        } else {alert('Incorrect - try again!');}
      }
      const loggedInUser = localStorage.getItem('username');
      send_time('unit1_4', loggedInUser);
    return (
        <div className="container">
            <head>
                <title>Unit 1.4: Printing and Inputting</title>
            </head>

            <body>
            <h1>Unit 1.4: Printing and Inputting</h1>
            <p>As Unit 1.1 showed, code you write can be displayed on the console by
                utilizing <code>print()</code> functions.</p>

            <p>If you want to print a number or the contents of a variable, you simply place the number/variable inside
                the
                parentheses as shown below:</p>

            <pre><code>
                Name = "Jesse"<br/>
                print(Name)<br/>
                print(16)
            </code></pre>

            <p>Output:</p>
            <pre><code>
                Jesse<br/>
                16
            </code></pre>

            <p>When printing a statement, you surround your text with quotation marks:</p>

            <pre><code>
                print("Hello, it’s nice to meet you.")
            </code></pre>

            <p>Output:</p>
            <pre><code>
                Hello, it’s nice to meet you.
            </code></pre>

            <p>Oftentimes, you will be required to make your programs interactive. This will be done by utilizing the
                <code>input()</code> function. A variable will be assigned the text that the user inputs:</p>

            <pre><code>
                Age = input("Input your age: ")<br/>
                print("You are " + Age)
            </code></pre>

            <p>Input:</p>
            <pre><code>
                Input your age: 17
            </code></pre>

            <p>Output:</p>
            <pre><code>
                You are 17
            </code> </pre>

            <p>Inputs are automatically seen as words/text. In order to have an input that's a number be seen as one by
                the
                computer, which would allow the variable the input is assigned to partake in math equations,
                the <code>int()</code>
                function must be used. And when you want to print a number and words/letters in the same line, ensure
                the number is
                within a <code>str()</code> function, which turns the number into a string while it is within
                the <code>print</code>
                statement:</p>

            <pre><code>
                Age = int(input("Input your age: "))<br/>
                Age_plus_ten = Age + 10<br/>
                print("You will be " + str(Age_plus_ten) + " in 10 years.")<br/>
            </code></pre>

            <p>Input:</p>
            <pre><code>
                Input your age: 17
            </code></pre>

            <p>Output:</p>
            <pre><code>
                You will be 27 in 10 years.
            </code></pre>
            </body>
            <br/>

            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Write an input statement that asks the user to "Write your name"</p>
                        <input ref={inputRef} type="text"/>
                    </label><br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p><pre><code>input("Write your name")<br/>
                                </code></pre></p>
                        </div>
                    )} </form>
                <br/></div>
            <br/><br/>
            <Link to="/u1_3" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u1_5" className="btn btn-primary">Next</Link>
        </div>
    );
}
