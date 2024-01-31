import {React, useRef} from 'react';
import {Link} from "react-router-dom";

export default function Unit_1_5() {
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (inputRef.current.value == 'int'){
            alert('Correct!');
        } else {alert('Incorrect - try again!');}
      }
    return (
        <div className="container">
            <head>
                <title>Unit 1.5: Data Types</title>
            </head>

            <body>
            <h1>Unit 1.5: Data Types</h1>
            <p>In Unit 1.3 you briefly got introduced to data types, which dictate what operations/actions can be
                performed on a
                variable.</p>

            <p>In some programming languages, you must specify what data type a variable is when you declare it, however
                in Python
                the type is automatically determined based on what value you give the variable.</p>

            <p>Here are all the data types that this course will go over:</p>


            <table border="1">
                <tr>
                    <th>Data Type</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>String</td>
                    <td>Text type</td>
                </tr>
                <tr>
                    <td>Integer, float</td>
                    <td>Number type</td>
                </tr>
                <tr>
                    <td>List</td>
                    <td>Sequence type</td>
                </tr>
                <tr>
                    <td>Boolean</td>
                    <td>Boolean type</td>
                </tr>
            </table>


            <p>Strings are any text that get surrounded by quotation marks. Numbers, letters, words, and symbols all can
                be
                strings.</p>
            <p>Integers are any whole numbers, while floats are numbers with decimals.</p>
            <p>A list is a group of values stored within one variable.</p>
            <p>A boolean is either true or false.</p>

            <p>Below are some examples.</p>

            <pre><code>
                Tree = "Oak" <br/>
                Number1 = 13 <br/>
                Float1 = 3.2838 <br/>
                List1 = ["Iphone", "Android", "Google Pixel"] <br/>
                Boolean1 = 3 > 8
            </code></pre>

            <p>Different data types can be used in different statements. For example, integers, floats, and strings can
                be added to
                variables of the same data type but booleans can’t. Also, you can only use the modulus operator with the
                int and
                float data types.</p> </body><br/>

                <div className="container-exercise">
            <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Given the code below, fill in the blank to cast the variable to be an integer.</p>
                        <inter><code>
                            num1 = "1" <br/>
                            print(<input ref={inputRef} type="text" />(num1))
                        </code></inter>
                        <br/>
                        
                    </label>
                    <button type="submit">Submit answer</button>
            </form><br/></div>
            <br/>
        <Link to="/quiz1" className="btn-quiz">Take an optional quiz for additional practice!</Link>
        <br/><br/><br/>
        <Link to="/u1_4" className="btn btn-primary" >Back</Link>
        &nbsp;<Link to="/u2_1" className="btn btn-primary" >Next</Link></div>
);
}
