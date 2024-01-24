import React, { useState } from 'react';
import {Link} from "react-router-dom";


export default function Quiz2 (){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
          question: 'What is the result of the following operation: 2**3',
          type: 'radio',
          options: ['8', '6', '4', '9'],
          answer: '8',
        },
        {
          question: 'What is the result of the following: 3*2+1*(8/2)+3**2',
          type: 'radio',
          options: ['37', '45', '31', '19'],
          answer: '19',
        },
        {
          question: 'What does the math.fabs(x) function do?',
          type: 'radio',
          options: ['Rounds x up',
                    'Returns the absolute value of x',
                    'Returns x rounded down',
                    'Returns x with the decimal part removed'],
          answer: 'Returns the absolute value of x',
        },
        {
            question: 'What does the random.randint(x,y) do?',
            type: 'radio',
            options: ['Returns a random number from x to y',
                      'Returns a random number from 0-1', 
                      'Returns a random number from 0-100',
                      'Returns a set of random numbers'],
            answer: 'Returns a random number from x to y',
        },
      ];

      const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
      };

      const handleNextQuestion = () => {
        if (
          answers[currentQuestion] === questions[currentQuestion].answer ||
          JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
          setScore(score + 1);

        }
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowScore(true);
        }
      };

      return (
        <div>
          {showScore ? (
            <div>
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score}</h3>
              <Link to="/Flashcards" className="btn-quiz">Get more practice with flashcards!</Link>
                <br/><br/><br/>
                <Link to="/u3_1" className="btn btn-primary" >Go to next unit</Link>
            </div>
          ) : (
            <div>
              <h1>Unit 2 Quiz</h1>
              <h2>Question {currentQuestion + 1}</h2>
              <h3>{questions[currentQuestion].question}</h3>
              {questions[currentQuestion].type === 'radio' && (
                <ul>
                  {questions[currentQuestion].options.map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name={`question${currentQuestion}`}
                        value={option}
                        onChange={() =>
                          handleAnswerSelection(currentQuestion, option)
                        }
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
          
        </div>
      );
  };