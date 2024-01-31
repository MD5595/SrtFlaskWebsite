import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_4_1() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '');
        if (cleaned == 'whilenum1%10!=0:') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 4.1: While Loops</title>
            </head>
            <body>
            <h1>Unit 4.1: While Loops</h1>

            <p>Like conditionals, loops check a statement and perform an action depending on if the statement is true or
                not.</p>

            <p>While loops check a condition and continuously perform an action as long as the condition is
                fulfilled.</p>

            <pre>
    <code>
      x = 30 <br/>
      while x > 29 and x != 35: <br/>
        &emsp;print(x, " is greater than 29") <br/>
        &emsp;x += 1
    </code>
    </pre>
            The above code produces this output:
            <pre><code>
    30  is greater than 29 <br/>
    31  is greater than 29 <br/>
    32  is greater than 29 <br/>
    33  is greater than 29 <br/>
    34  is greater than 29 <br/>
      </code></pre>
<p>In the program above x, the count variable, increments by one every time the program loops
    until x becomes 30. Without the third line of code this program would loop infinitely because
    the condition of x being less than 29 would always be true.
    <br/>
    The assignment operator, +=, assigns x its current value plus 1 in the program above.
<br/>
    <br/>
Below are some assignment operators. Consult Unit 2.1: Basic symbols for the meanings of
    the symbols next to =. Note that assignment operators can be used outside of loops.<br/>
<pre><code>
=<br/>
+= <br/>
-=<br/>
*=<br/>
/=<br/>
%=<br/>
//=<br/>
**=<br/>
</code></pre>
</p>
            <p>While loops are generally used when you do not know how many iterations your
                statement will have, or when the amount of iterations your loop will
                have can vary, like in user input based loops. Below is an example of both situations. </p>
           <pre><code>Name = input(“To enter, tell me your name. ”)<br/>
while Name != “John”:<br/>
&emsp;print(“Only John is allowed inside. Are you sure you’re not John?”)<br/>
&emsp;Name = input(“What is your name?”)<br/>
print(“Welcome, John.”)
</code></pre>
            <br/>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Finish the following code given the following prompt:<br/>
                            Write a program that prints and increments a number while the number isn't divisible by
                            10. <br/>
                            Note: Use the remainder operator to check if the number is divisible by 10.<br/>
                        </p>
                        <inter><code>
                            num1 = 1 <br/>
                            <label><input ref={inputRef} type="text"/></label><br/>
                            &emsp;print(num1)<br/>
                            num1 += 1

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
                            <p>name = input("Write your name")<br/>
                                <b>print</b>(name)</p>
                        </div>
                    )}  </form>
                <br/></div>
            </body>
            <br/>
            <Link to="/u3_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u4_2" className="btn btn-primary">Next</Link>
        </div>
    );
}
