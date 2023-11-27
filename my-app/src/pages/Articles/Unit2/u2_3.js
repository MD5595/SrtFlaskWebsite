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

    <pre>
import math
import random
</pre>

    <p>Below are the math functions you will use.</p>

    <pre>
import math
X = 2.1
Y = 3

Num1 = math.ceil(X) # Rounds X up
Num2 = math.fabs(X) # Returns the absolute value of X
Num3 = math.floor(X) # Returns X rounded down
Num4 = math.trunc(X) # Returns X with the decimal part removed
Num5 = math.pow(X, Y) # Returns X to the Y power
Num6 = math.sqrt(X) # Returns the square root of X
Num7 = math.pi # Returns pi
</pre>

    <p>Below are the random functions you will use.</p>

    <pre>
import random

Num1 = random.random() # Generates a random number from 0-1
Num2 = random.randint(X, Y) # Returns a random number from X to Y
Num3 = random.choice(["Red", "Orange", "Yellow"]) # Picks a random value within a list
</pre>

    <p>It will be convenient for you to memorize these functions, but it is no problem if you forget the correct syntax.
        Consult the cheat sheet or Google to properly type out the functions/modules.</p>
</body>
        <br/>

            <Link to="/u3_1">3.1</Link>
    </div>
  );
}

export default u23;