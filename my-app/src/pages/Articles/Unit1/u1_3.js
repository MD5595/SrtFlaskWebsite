import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import { send_time } from '../../../components/AxiosCalls';

export default function Unit_1_3() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '');
        if (/[a-zA-Z_]/.test(cleaned.charAt(0)) && cleaned.includes('="dog"')) {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>1.3 Variables</title>
            </head>

            <body>
            <h1>1.3 Variables</h1>
            <p>Variables are values or characters that are stored within a phrase. Some of the data types that variables
                can store
                are strings (any characters placed within " "), integers (any whole number), and floats (numbers with
                decimal
                places).</p>

            <p>Making a variable and giving it a value is called variable declaration. Some examples are shown
                below:</p>

            <pre><code>
        A = 28<br/>
        My_name = "John"<br/>
        Number1 = 1<br/>
        _car_ = "F-150"<br/>
    </code></pre>

            <p>Note the use of an equal sign to assign values to the variables. In Unit 3.1, we will go over Python's
                equal
                symbol.</p>

            <p>By using variables, we can label information using names that allow code to be clear.</p>

            <p>Below is the code for a program:</p>

            <pre><code>
        import random<br/>
        <br/>
        num1 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])<br/>
        animal = random.choice(["Cow", "Pig", "Sheep", "Dog", "Whale"])<br/>

        your_random_password = str(animal) + str(num1)<br/><br/>
        print(your_random_password)<br/>
    </code></pre>

            <p>Even if you don't understand some parts such as <code>random.choice</code> and <code>str()</code>, you
                can reasonably
                figure out that this is the code for a random password generator. As you progress through this course,
                you will
                find out that it is not hard to get lost when overlooking code you are currently working on. By having
                appropriately named variables, you will reduce the time you spend rereading your code to regain an
                understanding
                of it.</p>

            <p>Below is the same code but with non-descriptive names:</p>

            <pre><code>
        import random
        <br/>
        dwq = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])<br/>
        ejd = random.choice(["Cow", "Pig", "Sheep", "Dog", "Whale"])<br/>
        qua = str(ejd) + str(dwq)<br/><br/>
        print(qua)<br/>
    </code></pre>

            <p>As you can see, this code is much harder to understand compared to its descriptive version.</p>

            <p>There are some rules tied with variable naming:</p>

            <ul>
                <li>Variables must start with a letter or underscore.</li>
                <li>Variables can only contain the letters/symbols A-Z, 0-9, and _.</li>
                <li>Variables with different capitalization are different, even if the spelling is the same.</li>
                <li>When making a variable that holds a word, " " must be used.</li>
                <li>Variables cannot have the same name as keywords.</li>
            </ul>

            <p>Some examples of incorrect variable names, along with reasoning as to why the code is incorrect:</p>

            <pre><code>
        --hi = "hi"  # A non-letter/underscore character is at the front of the variable name<br/>
        333number = 21  # A number starts off the variable<br/>
        %&$*() = "Word"  # Illegal characters<br/>
        my age = "17"  # A space<br/>
    </code></pre>

            <p>Making your variables descriptive is vital to creating readable code that is easily decipherable.</p>
            </body>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Create a variable and assign it the value "dog"</p>
                        <input ref={inputRef} type="text"/>
                    </label><br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p><pre><code><b>variable_name = "dog"</b></code></pre></p>
                        </div>
                    )}</form>
                </div>
            <br/><br/>
            <Link to="/u1_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u1_4" className="btn btn-primary">Next</Link></div>
    );
}
