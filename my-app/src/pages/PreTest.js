import React from 'react';

function PreTest() {
    let userScore = 0
    function checkAnswer2() {
        const answerInput = document.getElementById('answer').value.toLowerCase();
         if (answerInput === 'math') {
            userScore++;
        }
    }

    return (
        <div className="container">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>JavaScript Module Question</title>
            </head>
            <body>
            <form id="moduleQuestionForm">
                <label htmlFor="answer">
                    What module would you use if you wanted to use the sqrt() function in JavaScript?
                </label>
                <input type="text" id="answer" name="answer"/>
                <button type="button" onClick={() => checkAnswer2()}>
                    Submit
                </button>
            </form>

            <div id="result"></div>

            <script src="app.js"></script>
            </body>
        </div>
    );
}

export default PreTest;