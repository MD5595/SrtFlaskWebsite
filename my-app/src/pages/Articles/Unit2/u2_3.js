import React from 'react';
import {Link} from "react-router-dom";

function u23() {
  return (
    <div className="container">
      <head>
    <title>Unit 2.3: Modules</title>
</head>

<body>
    <h1>Unit 2.3: Modules</h1>
    <p>Modules are used to shorten programs by giving the user access to a group of functions. Generally, functions are
        given a number/text and return a value.</p>

    <p>The two modules this course will have you use will be the math and random modules. To use them, they first have
        to be imported, then the specific function you want to use has to be called using dot notation. You call a
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

    <p>It will be convenient for you to memorize these functions, but it is no problem if you forget the correct syntax.
        Consult the cheat sheet or Google to properly type out the functions/modules.</p>
</body>
        <br/>
        <Link to="/quiz2" className="btn-quiz">Take an optional quiz for additional practice!</Link>
<br/><br/><br/>
<Link to="/u2_2" className="btn btn-primary" >Back</Link>
&nbsp;<Link to="/u3_1" className="btn btn-primary" >Next</Link></div>
  );
}

export default u23;