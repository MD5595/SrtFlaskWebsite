import React from 'react';
import {Link} from "react-router-dom";

function u62() {
  return (
    <div className="container">
     <head>
    <title>Unit 6.2: Parameters/Returning</title>
</head>

<body>
    <h1>Unit 6.2: Parameters/Returning</h1>
    <p>Parameters allow your functions to receive values and then return a new value.</p>

    <p>To set the parameters within your function, you place variables separated by commas within the function's
        parentheses.</p>

    <pre>
def average_of_3(x, y, z):
    average = (x + y + z) / 3
    return average

print(average_of_3(10, 3, 7))
</pre>

    <p>Output:</p>
    <pre>
6.666667
</pre>

    <p>Functions can be set to have any number of variables, but when you call a function, you must have the same
        number of parameters within the parentheses.</p>

    <p>Below is a function that simulates a pen being clicked, with the pen originally being unclicked.</p>
    <pre>
def click_pen_x_times(x):
   if 0 == x % 2:
       return "Clicked"
   else:
       return "Unclicked"

print(click_pen_x_times(5))
</pre>

    <p>Output:</p>
    <pre>
Unclicked
</pre>

    <p>By returning the value the function produces, the product can be printed or used in operations.</p>
</body>
        <Link to="/u6_1" className="btn btn-primary" >Back</Link>
     </div>
  );
}

export default u62;