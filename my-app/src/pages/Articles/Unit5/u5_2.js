import {React,useRef} from 'react';
import {Link} from "react-router-dom";

export default function Unit_5_2() {
    const funParams = useRef(null);
    const firstVal = useRef(null);
    const secondVal = useRef(null);
    const thirdVal = useRef(null);
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        if(funParams.current.value.replaceAll(' ', '') == 'a,b,c' &&
        firstVal.current.value.replaceAll(' ', '') == 'a' &&
        secondVal.current.value.replaceAll(' ', '') == 'b' &&
        thirdVal.current.value.replaceAll(' ', '') == 'c' &&
        inputRef.current.value.replaceAll(' ', '') == 'x,y,z'){
            alert('Correct!');
        } else {alert('Incorrect - try again!');}
      }

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
<div className="container-exercise">
            <h2>Practice Exercise:</h2>
            <p>Finish the following code given the following prompt:<br/>
            Make a program that receives 3 numbers and contains a function that prints the largest number.
            </p>
            <form onSubmit={handleSubmit}>

            <inter><code>
            x = int(input("Input a number: ")) <br/>
            y = int(input("Input a number: ")) <br/>
            z = int(input("Input a number: ")) <br/>
            def maximum(<label><input ref={funParams} type="text"/></label>): <br/>
            if a > b and a > c: <br/>
            &emsp;print(<label><input ref={firstVal} type="text"/></label>) <br/>
            elif b > a and b > c: <br/>
            &emsp;print(<label><input ref={secondVal} type="text"/></label>) <br/>
            elif c > a and c > b: <br/>
            &emsp;print(<label><input ref={thirdVal} type="text"/></label>) <br/>

            maximum(<label><input ref={inputRef} type="text"/></label>) <br/>
            </code></inter>
            <br/>
            <button type="submit">Submit answer</button>
            </form>

            <br/></div>
            <br/>
<br/>
<Link to="/quiz5" className="btn-quiz">Take an optional quiz for additional practice!</Link>
<br/><br/><br/>
        <Link to="/u5_1" className="btn btn-primary" >Back</Link>
                <Link to="/u6_1" className="btn btn-primary" >Next</Link>

     </div>
  );
}

