import React from 'react';

function u42() {
  return (
    <div className="container">

<head>
    <title>Unit 4.2: For Loops</title>
</head>

<body>
    <h1>Unit 4.2: For Loops</h1>
    <p>For loops are used when you know how many iterations your bit of code will have. The above for loop uses the range()
        function to cycle through the numbers 0-9 (programming languages start at 0 instead of 1 for lists)</p>

    <pre>
for x in range(10):
    print("X is less than eleven")
    X += 1
    </pre>

    <p>Range(start, stop, step) is the format the range() function follows, with only the stop parameter/argument being
        required. When the start argument is included, the for loop will start iterating at that value. For example, if
        range(5, 10) was used instead of range(10), an error message would appear on the terminal.</p>
</body>
    </div>
  );
}

export default u42;