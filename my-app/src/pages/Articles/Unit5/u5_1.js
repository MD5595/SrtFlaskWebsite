import React from 'react';
import {Link} from "react-router-dom";

function u51() {
  return (
    <div className="container">
      <head>
    <title>Unit 5.1: Lists</title>
</head>

<body>
    <h1>Unit 5.1: Lists</h1>
    <p>Lists store multiple values within one variable. Any data type can be stored within a list, and differing data
        types can be stored within the same list. Any value stored within a list is called an element.</p>

    <p>For example, you can create a list like this:</p>

    <pre>
Devices = ["Phone", "Laptop", "Tablet"]
    </pre>

    <p>Below are functions that can be used on lists:</p>

    <pre>
Import random

Y = [1, 3, 2, 5]
X = 3

Value1 = Y.append(X)  # Adds an element to the end of a list
Value2 = Y.count(X)  # Returns the number of elements that have the value X
Value3 = Y.sort()     # Sorts the list
Value5 = random.choice(Y)  # Picks a random value within a list
    </pre>

    <p>When going through the elements within a list, you start from 0 instead of one. The code below shows how to access
        a specific element from a list:</p>

    <pre>
List1 = ["Truck", 5, 50]

First_from_List1 = List1[0]

print(First_from_List1)
    </pre>

    <p>You simply type out the list name and place the element location within brackets.</p>
</body>
<Link to="/quiz5" className="btn-quiz">Take an optional quiz for additional practice!</Link>
<br/><br/><br/>
        <Link to="/u4_2" className="btn btn-primary" >Back</Link>
    <Link to="/u6_1" className="btn btn-primary" >Next</Link>
    </div>
  );
}

export default u51;