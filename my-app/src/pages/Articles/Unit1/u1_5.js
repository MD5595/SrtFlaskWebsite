import React from 'react';

function u1_5() {
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

            <pre>
Tree = "Oak"
Number1 = 13
Float1 = 3.2838
List1 = ["Iphone", "Android", "Google Pixel"]
Boolean1 = 3 > 8
    </pre>

            <p>Different data types can be used in different statements. For example, integers, floats, and strings can
                be added to
                variables of the same data type but booleans can’t. Also, you can only use the modulus operator with the
                int and
                float data types.</p> </body>
        </div>
);
}

export default u1_5();