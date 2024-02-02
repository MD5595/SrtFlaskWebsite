import {React, useRef, useState} from 'react';
import {Link} from "react-router-dom";

export default function Unit_6_1() {
    const inputRef = useRef(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };


    function handleSubmit(event) {
        event.preventDefault();
        const cleaned = inputRef.current.value.replaceAll(' ', '')
        console.log(cleaned)
        if (cleaned == 'basket=["apples","oranges","bananas"]' ||
            cleaned == 'basket=["apples","bananas","oranges"]' ||
            cleaned == 'basket=["oranges","bananas","apples"]' ||
            cleaned == 'basket=["oranges","apples","bananas"]' ||
            cleaned == 'basket=["bananas","oranges","apples"]' ||
            cleaned == 'basket=["bananas","apples","oranges"]') {
            alert('Correct!');
        } else {
            alert('Incorrect - try again!');
        }
    }

    return (
        <div className="container">
            <head>
                <title>Unit 6.1: Lists</title>
            </head>

            <body>
            <h1>Unit 6.1: Lists</h1>
            <p>Lists store multiple values within one variable. Any data type can be stored within a list, and differing
                data
                types can be stored within the same list. Any value stored within a list is called an element.</p>

            <p>For example, you can create a list like this:</p>

            <pre><code>
        Devices = ["Phone", "Laptop", "Tablet"]
    </code></pre>

            <p>Below are functions that can be used on lists:</p>

            <pre><code>
        Import random <br/>
        <br/>
        Y = [1, 3, 2, 5] <br/>
        X = 3 <br/>
        <br/>
        Value1 = Y.append(X)  # Adds an element to the end of a list <br/>
        Value2 = Y.count(X)  # Returns the number of elements that have the value X <br/>
        Value3 = Y.sort()     # Sorts the list <br/>
        Value4 = random.choice(Y)  # Picks a random value within a list <br/>
    </code></pre>

            <p>When going through the elements within a list, you start from 0 instead of one. The code below shows how
                to access
                a specific element from a list:</p>

            <pre><code>
        List1 = ["Truck", 5, 50] <br/>
        <br/>
        First_from_List1 = List1[0] <br/>
        <br/>
        print(First_from_List1)
    </code></pre>

            <p>You simply type out the list name and place the element location within brackets.</p>

            <p>The code belo w utilizes a for-loop to access every element in a list.
                <pre><code>for i in List1:<br/>
                    &emsp;print(i)</code></pre><br/>


                If you wish to access the elements of a list in reverse order (from right to left),
                you can use negative numbers. For example, writing example_list[-1] would access
                the last element in example_list.

                <br/>
                Note that strings can have their characters accessed in the same way.
                <pre><code>

Word = “apple”<br/>
print(Word[4])
</code>
</pre>
                Output:
                <pre><code>e
</code></pre>
            </p>

            </body>
            <div className="container-exercise">
                <form onSubmit={handleSubmit}>
                    <label>
                        <h2>Practice Exercise:</h2>
                        <p>Make a list called "basket" that contains "apples", "oranges", and "bananas".</p>
                        <input ref={inputRef} type="text"/>
                    </label><br/>
                    <button type="submit">Submit answer</button>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={handleToggleAnswer} type="button">
                        {showAnswer ? 'Hide answer' : 'Show answer'}
                    </button>
                    {showAnswer && (
                        <div className="answer-box">
                            <p>basket=["apples","oranges","bananas"]</p>
                        </div>
                    )}</form>
                <br/></div>
            <br/><br/>

            <Link to="/u5_2" className="btn btn-primary">Back</Link>
            &nbsp;<Link to="/u6_2" className="btn btn-primary">Next</Link>
        </div>
    );
}
