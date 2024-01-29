import {React, useRef} from 'react';
import {Link} from "react-router-dom";

export default function Unit_4_2() {
  const firstVal = useRef(null);
  const secondVal = useRef(null);
  const thirdVal = useRef(null);

  function handleSubmit(event) {
      event.preventDefault();
      if(firstVal.current.value == '50' && secondVal.current.value == '33' && thirdVal.current.value == '-2'){
          alert('Correct!');
      } else {alert('Incorrect - try again!');}
    }
  return (
    <div className="container">

<head>
    <title>Unit 4.2: For Loops</title>
</head>

<body>
    <h1>Unit 4.2: For Loops</h1>
    <p>For loops are used when you know how many iterations your bit of code will have. The above for loop uses the range()
        function to cycle through the numbers 0-9 (programming languages start at 0 instead of 1 for lists)</p>

    <pre><code>
    for x in range(10): <br/>
    &emsp;print("X is less than eleven") <br/>
    &emsp;x += 1
    </code></pre>

    <p>Range(start, stop, step) is the format the <code>range()</code> function follows, with only the stop parameter/argument being
        required. When the start argument is included, the for loop will start iterating at that value. For example, if
        range(5, 10) was used instead of range(10), an error message would appear on the terminal.</p>
<br/>
<p>Break is a keyword that can be used in both for and while loops. Break causes a loop to end. Break is typically used in if-statements to exit a loop based on a condition.
</p>
<pre><code>num = int(input(“Enter a number: From 1-20”))<br/>
for i in range(10):<br/>
&emsp;print(i)<br/>
&emsp;if i==num:<br/>
&emsp;&emsp;break<br/>
&emsp;X += 1<br/>
for i in range(9):<br/>
&emsp;if i > 3:<br/>
&emsp;&emsp;break<br/>
&emsp;print(i)<br/>
</code></pre>
</body>
<div className="container-exercise">
            <h2>Practice Exercise:</h2>
            <p>Fill in the blank for the range function that starts at 50, ends at 33 and decreases by 2 every loop.<br/></p>
            <form onSubmit={handleSubmit}>

            <inter><code>
              range(
                <label><input ref={firstVal} type="text" /></label><br/>,<label><input ref={secondVal} type="text" /></label><br/>, 
                <label><input ref={thirdVal} type="text" /></label><br/>)

            </code></inter>
            <br/>
            <button type="submit">Submit answer</button>
            </form>

            <br/></div>
            <br/>
        <Link to="/quiz4" className="btn-quiz">Take an optional quiz for additional practice!</Link>
        <br/><br/><br/>
        <Link to="/u4_2" className="btn btn-primary" >Back</Link>
        &nbsp;<Link to="/u5_1" className="btn btn-primary" >Next</Link>
    </div>
  );
}
