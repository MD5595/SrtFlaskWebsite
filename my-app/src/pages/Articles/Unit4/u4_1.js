import React from 'react';
import {Link} from "react-router-dom";

function u41() {
  return (
    <div className="container">
      <head>
    <title>Unit 4.1: While Loops</title>
</head>
<body>
    <h1>Unit 4.1: While Loops</h1>

    <p>Like conditionals, loops check a statement and perform an action depending on if the statement is true or not.</p>

    <p>While loops check a condition and continuously perform an action as long as the condition is fulfilled.</p>

    <pre>
    <code>
      While x > 29: <br/>
      &emsp;print("x is greater than 29") <br/>
      &emsp;x += 1
    </code>
    </pre>

    <p>While loops are generally used when you do not know how many iterations your statement will have.</p>
</body>
        <Link to="/u3_2" className="btn btn-primary" >Back</Link>
        &nbsp;<Link to="/u4_2" className="btn btn-primary" >Next</Link>
    </div>
  );
}

export default u41;