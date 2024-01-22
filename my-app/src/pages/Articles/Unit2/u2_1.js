import React from 'react';
import {Link} from "react-router-dom";

function u21() {
  return (
    <div className="container">
      <head>
    <title>Unit 2.1: Basic Symbols</title>
</head>

<body>
    <h1>Unit 2.1: Basic Symbols</h1>
    <p>Mathematical symbols, which are operators, are used in Python equations.</p>

    <p>Here are the more basic math operators:</p>
    <ul>
        <li><strong>+</strong> - Addition</li>
        <li><strong>-</strong> - Subtraction</li>
        <li><strong>*</strong> - Multiplication</li>
        <li><strong>/</strong> - Division</li>
        <li><strong>%</strong> - Remainder. The left number after division</li>
        <li><strong>**</strong> - Exponents. The base is placed to the left of the symbol while the power is to the
            right</li>
        <li><strong>//</strong> - Floor Division. Removes any decimals produced from the division</li>
    </ul>

    <p>When you want to display the solution to a math problem, you can either assign it to a variable then print it,
        directly place the equation in a print statement, or place an equation using variables inside a print
        statement.</p>

    <pre><code>
      num1 = 10 % 3 <br/>
      num2 = 3 ** 2 <br/>
      num3 = 5 // 2 <br/>
      num4 = 2 <br/>
      num5 = 14 <br/>
      <br/>
      print(num1) <br/>
      print(num2) <br/>
      print(num3) <br/>
      print(3 // 10) <br/>
      print(num4 / num5) <br/>
    </code></pre>

    <p>Outputs:</p>
    <pre><code>
      1 <br/>
      9 <br/>
      2 <br/>
      0 <br/>
      7 <br/>
    </code></pre>
</body>
        <br/>
<Link to="/u1_5" className="btn btn-primary" >Back</Link>
&nbsp;<Link to="/u2_2" className="btn btn-primary" >Next</Link> </div>

  );
}

export default u21;