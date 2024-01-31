import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_6_2() {

    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const four = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (one.current.value.replaceAll(' ', ' ') == 'random' &&
            two.current.value.replaceAll(' ', '') == 'choice' &&
            three.current.value.replaceAll(' ', '') == 'append' &&
            four.current.value.replaceAll(' ', '') == 4) {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 6.2: List Functions</title>
            </head>

            <body>
            <h1>Unit 6.2: List Functions</h1>
            <p>
                Just like any other variable, lists can be manipulated by
                functions. Unlike other data types, when a list goes through
                a function, it automatically gets its original value changed.
            </p>

            <p>
                The code below shows how you need to manually assign a variable being affected by a function to itself
                if you want to store the changes made to the variable.
            </p>

            <pre>
          <code>
            var = "HELLO"<br/>
            var.lower()<br/>
            print(var)<br/>

            var = var.lower()<br/>
            print(var)<br/>
          </code>
        </pre>

            <p>Output:</p>
            <pre>
          <code>
            HELLO<br/>
            hello
          </code>
        </pre>

            <p>
                The code below shows a list being manipulated without assignment.
            </p>

            <pre>
          <code>
            list = [1, 2, "word"]<br/>
            list.append(3)<br/>

            print(list)
          </code>
        </pre>

            <p>Output:</p>
            <pre>
          <code>
            [1, 2, "word", 3]
          </code>
        </pre>

            <p>Below are functions that can be used on lists.</p>

            <pre>
          <code>
            import random<br/>
<br/>
            y = [1, 3, 2, 5]<br/>
            x = 3<br/>
<br/>
            y.append(x)           # Adds an element to the end of a list<br/>
            y.count(x)            # Returns the number of elements that have the value x<br/>
            y.sort()              # Sorts the list in ascending order (can’t mix strings and numbers)<br/>
            var1 = random.choice(y)  # Picks a random value within a list
          </code>
        </pre>

            <p>
                Most variable types do not have their values change after they are placed within a function.
            </p>

            <p>
                Of course, you can create functions that manipulate lists. The code below asks the user how long they
                want the list to be, then builds a list that is filled with random numbers.
            </p>

            <pre>
          <code>
            import random<br/>

            amount = int(input("How many values do you want to add to the list?: "))<br/>
<br/>
            l = []<br/>
            def buildList(l, amount):<br/>
              &emsp;for _ in range(amount):<br/>
              &emsp;&emsp;num1 = random.randint(100, 199)<br/>
              &emsp;&emsp;l.append(num1)<br/>

            buildList(l, amount)<br/>
<br/>
            l.sort()<br/>
            print(l)<br/>
          </code>
        </pre>
            </body>

            <div className="container-exercise">
                <h2>Practice Exercise:</h2>
                <p>Finish the following code given the following prompt:<br/>
                    Make a program that that randomly choices 5 elements from a list and adds those value to a new list.
                    After this print the 5th element the new list.
                </p>
                <form onSubmit={handleSubmit}>

                    <inter><code>
                        import <label><input ref={one} type="text"/></label><br/>
                        <br/>
                        list1 = ["apple", 53, "dog", 1, 5,7,3,2] <br/>
                        list2 = [] <br/>

                        for i in range(5):<br/>
                        &emsp;val = random.<label><input ref={two} type="text"/></label>(list1) <br/>
                        &emsp;list2.<label><input ref={three} type="text"/></label>(val) <br/>
                        print(list2[<label><input ref={four} type="text"/></label>]) <br/>

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
            <Link to="/quiz6" className="btn-quiz">Take an optional quiz for additional practice!</Link><br/><br/>

            <Link to="/u6_1" className="btn btn-primary">
                Back
            </Link>
            &nbsp;

        </div>
    );
}