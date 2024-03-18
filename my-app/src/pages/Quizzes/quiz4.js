import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {send_time} from '../../components/AxiosCalls';
import {baseURL} from '../../config';


export default function Quiz4 (){
  const loggedInUser = localStorage.getItem('username');
  send_time('quiz4', loggedInUser);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
        const username = localStorage.getItem('username');

    const questions = [
        {
          question: 'What is the result of the following when x = 4: while x<=5: print("x is greater than 5")',
          type: 'radio',
          options: ['4 is greater than 5', '"4 is greater than 5" then "5 is greater than 5"', 'It infinitely loops'],
          answer: 'It infinitely loops',
            unit:'4.1',
            section:'While loops'
        },
        {
          question: 'Which of the following is not an assignment operator?',
          type: 'radio',
          options: ['+=', '==', '%=', '*='],
          answer: '==',
            unit:'4.1',
            section:'While loops'
        },
        {
          question: 'What is the correct format for Range?',
          type: 'radio',
          options: ['Range(start, stop, step)', 'Range(step, start, stop)', 'Range(start, step, stop)', 'Range(stop, start, step)'],
          answer: 'Range(start, stop, step)',
            unit:'4.2',
            section:'For loops'
        },
        {
            question: 'What is the result of the following: for in range(,10,2): print(i)',
            type: 'radio',
            options: ['0, 2, 4, 6, 8, 10', '0, 2, 4, 6, 8', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10', 'Syntax Error'],
            answer: 'Syntax Error',
            unit:'4.2',
            section:'For loops'
        },
        {
            question: 'What is the result of the following: for in range(,10,2): print(i)',
            type: 'radio',
            options: ['0, 2, 4, 6, 8, 10', '0, 2, 4, 6, 8', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10', 'Syntax Error'],
            answer: 'Syntax Error',
            unit:'4.2',
            section:'For loops'
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
 useEffect(() => {
            const test = "Quiz4"
            axios.post(baseURL + '/postUserScore', {username, test, score}).then(response => {
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
                <Link to="/u5_1" className="btn btn-primary" >Go to next unit</Link>
            </div>
          ) : (
            <div>
              <h1>Unit 4 Quiz</h1>
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