import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {send_time} from '../../../components/AxiosCalls';


export default function Unit_2_3() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '');
        if (cleaned == 'print(math.sqrt(random.randint(0,20)))') {
            alert('Correct!');
        } else {alert('Incorrect - try again!');}
      }
      const loggedInUser = localStorage.getItem('username');
      send_time('unit2_3', loggedInUser);

    return (
        <div className="container">
            <head>
                <title>Unit 2.3: Modules</title>
            </head>

            <body>
            <h1>Unit 2.3: Modules</h1>
            <p>Modules are used to shorten programs by giving the user access to a group of functions. Generally,
                functions are
                given a number/text and return a value.</p>

            <p>The two modules this course will have you use will be the math and random modules. To use them, they
                first have
                to be imported, then the specific function you want to use has to be called using dot notation. You call
                a
                function from a module by saying <code>module.function</code>.</p>

            <pre><code>
        import math <br/>
        import random <br/>
    </code></pre>

            <p>Below are the math functions you will use.</p>

            <pre><code>
        import math <br/>
        X = 2.1 <br/>
        Y = 3 <br/>
        <br/>
        Num1 = math.ceil(X) # Rounds X up <br/>
        Num2 = math.fabs(X) # Returns the absolute value of X <br/>
        Num3 = math.floor(X) # Returns X rounded down <br/>
        Num4 = math.trunc(X) # Returns X with the decimal part removed <br/>
        Num5 = math.pow(X, Y) # Returns X to the Y power <br/>
        Num6 = math.sqrt(X) # Returns the square root of X <br/>
        Num7 = math.pi # Returns pi
    </code></pre>

            <p>Below are the random functions you will use.</p>

            <pre><code>
        import random<br/>
        <br/>
        Num1 = random.random() # Generates a random number from 0-1 <br/>
        Num2 = random.randint(X, Y) # Returns a random number from X to Y <br/>
        Num3 = random.choice(["Red", "Orange", "Yellow"]) # Picks a random value within a list <br/>
    </code></pre>

            <p>It will be convenient for you to memorize these functions, but it is no problem if you forget the correct
                syntax.
                Consult the cheat sheet or Google to properly type out the functions/modules.</p>
            </body>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Write code that will generate a random number between 0-20 and print out the sqrt of that
                            number all in one line.</p>
                        <inter><code>
                            import math <br/>
                            import random <br/>
                            <input ref={inputRef} type="text" style={{ width: '700px', height: '25px' }}/>
                        </code></inter>
                    </label>

                    <br/>

                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p><pre><code>print(math.sqrt(random.randint(0,20)))</code></pre></p>
                        </div>
                    )}</form>
                <br/></div>
            <br/><br/>
            <Link to="/quiz2" className="btn-quiz">Take an optional quiz for additional practice!</Link>
            <br/><br/>
            <Link to="/u2_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u3_1" className="btn btn-primary">Next</Link></div>
    );
}
