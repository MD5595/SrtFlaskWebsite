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

    <pre><code>
        def average_of_3(x, y, z): <br/>
        &emsp;average = (x + y + z) / 3 <br/>
        &emsp;return average <br/>
            <br/>
        print(average_of_3(10, 3, 7))
    </code></pre>

    <p>Output:</p>
    <pre><code>
        6.666667
    </code></pre>

    <p>Functions can be set to have any number of variables, but when you call a function, you must have the same
        number of parameters within the parentheses.</p>

    <p>Below is a function that simulates a pen being clicked, with the pen originally being unclicked.</p>
    <pre><code>
        def click_pen_x_times(x): <br/>
        &emsp;if 0 == x % 2: <br/>
        &emsp;&emsp;return "Clicked" <br/>
        &emsp;else: <br/>
        &emsp;&emsp;return "Unclicked" <br/>
        <br/>
            print(click_pen_x_times(5)) <br/>
    </code></pre>

    <p>Output:</p>
    <pre><code>
        Unclicked
    </code></pre>

    <p>By returning the value the function produces, the product can be printed or used in operations.</p>
</body>
<Link to="/quiz6" className="btn-quiz">Take an optional quiz for additional practice!</Link>
<br/><br/><br/>
        <Link to="/u6_1" className="btn btn-primary" >Back</Link>
     </div>
  );
}

export default u62;