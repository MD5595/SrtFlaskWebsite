import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


export default function Quiz3 (){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
        const username = localStorage.getItem('username');

    const questions = [
        {
          question: 'What is the result of the following operation when x=3: if x>10 or x != 15: print("Hello")',
          type: 'radio',
          options: ['Nothing', 'Hello', 'Syntax Error'],
          answer: 'Hello',
        },
        {
          question: 'True/False: An else-if and if statement must always have an else statement.',
          type: 'radio',
          options: ['True', 'False'],
          answer: 'True',
        },
        {
          question: 'Which of the following is not a comparison operator?',
          type: 'radio',
          options: ['>=', '!=', '==', '%'],
          answer: '%',
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
 useEffect(() => {
            const test = "Quiz3"
            axios.post('http://localhost:5000/postUserScore', {username, test, score}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [showScore]);
      return (
        <div>
          {showScore ? (
            <div>
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score}</h3>
              <Link to="/Flashcards" className="btn-quiz">Get more practice with flashcards!</Link>
                <br/><br/><br/>
                <Link to="/u4_1" className="btn btn-primary" >Go to next unit</Link>
            </div>
          ) : (
            <div>
              <h1>Unit 3 Quiz</h1>
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