import React, { useState } from 'react';
import {Link} from "react-router-dom";


export default function Quiz6 (){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
          question: 'What is the keyword to define a function?',
          type: 'radio',
          options: ['def', 'define', 'function', 'func'],
          answer: 'def',
        },
        {
          question: 'True/False: Parameters are always required for a function.',
          type: 'radio',
          options: ['True', 'False'],
          answer: 'False',
        },
        {
          question: 'True/False: You must have the same number of parameters within the parenthesis as defined.',
          type: 'radio',
          options: ['True', 'False'],
          answer: 'True',
        },
        {
            question: 'True/False: Functions must have a return statement.',
            type: 'radio',
            options: ['True', 'False'],
            answer: 'False'
        }
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
            </div>
          ) : (
            <div>
              <h1>Unit 6 Quiz</h1>
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