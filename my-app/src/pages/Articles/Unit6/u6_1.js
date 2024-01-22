import React from 'react';
import {Link} from "react-router-dom";

function u61() {
  return (
    <div className="container">
      <head>
    <title>Unit 6.1: Functions</title>
</head>

<body>
    <h1>Unit 6.1: Functions</h1>
    <p>Python comes preloaded with many functions, and more can be used by importing modules. You have the ability to
        create your own functions.</p>

    <p>Functions are generally made to decrease the amount of repetitive code you have to write, shortening your program
        and lowering its complexity.</p>

    <pre><code>
        def count_down(): <br/>
        &emsp;print("3") <br/>
        &emsp;print("2") <br/>
        &emsp;print("1") <br/>
        &emsp;print("0") <br/>
            <br/>
        count_down() <br/>
    </code></pre>

    <p>Output:</p>
    <pre><code>
        3 <br/>
        2 <br/>
        1 <br/>
        0 <br/>
    </code></pre>

    <p>Functions like this perform a predefined task without the option of customization.</p>

    <p><code>def</code> is a keyword that allows you to define a function. A defined function is made up of a function
        name, the parameters (optional), a colon, the action the function performs, and the <code>return</code> keyword
        (optional and typically only present when there are parameters), in that order.</p>
</body>
        <Link to="/u5_1" className="btn btn-primary" >Back</Link>
        &nbsp;<Link to="/u6_2" className="btn btn-primary" >Next</Link>
    </div>
  );
}

export default u61;