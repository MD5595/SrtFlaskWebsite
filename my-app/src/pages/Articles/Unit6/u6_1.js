import React from 'react';

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

    <pre>
def count_down():
    print("3")
    print("2")
    print("1")
    print("0")

count_down()
</pre>

    <p>Output:</p>
    <pre>
3
2
1
0
</pre>

    <p>Functions like this perform a predefined task without the option of customization.</p>

    <p><code>def</code> is a keyword that allows you to define a function. A defined function is made up of a function
        name, the parameters (optional), a colon, the action the function performs, and the <code>return</code> keyword
        (optional and typically only present when there are parameters), in that order.</p>
</body>
    </div>
  );
}

export default u61;