import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {send_time} from '../../components/AxiosCalls';
import {baseURL} from '../../config';


export default function Quiz6 (){
  const loggedInUser = localStorage.getItem('username');
  send_time('quiz6', loggedInUser);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const username = localStorage.getItem('username');

    const questions = [
        {
          question: 'Which of the following is not a function available with lists?',
          type: 'radio',
          options: ['append', 'last', 'remove', 'pop'],
          answer: 'last',
        },
        {
          question: 'Given the following list a = [1, 2, 2, 3, 3, 4, 5], what does print(a.count(3)) return?',
          type: 'radio',
          options: ['6', '7', '3', '2'],
          answer: '2',
        },
        {
          question: 'True/False: This is a valid list assignment: a = [1, "two", 3, "Four", False]',
          type: 'radio',
          options: ['True', 'False'],
          answer: 'True',
        },
        {
            question: 'Given the following list a = [1, 2, 3, 4, 5, 6], what does print(a[4]) return?',
            type: 'radio',
            options: ['4', '3', '5', '6'],
            answer: '5'
        },
        {
            question: 'Given the list b = [8,"app", 5,"bpp"], what would b.sort() return?',
            type: 'radio',
            options: ['"app", "bpp", 5, 8', 'error', '5, 8, "app", "bpp"', '5, "app", 8, "bpp"'],
            answer: 'error'
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
            const test = "Quiz6"
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
                <Link to="/u6_1" className="btn btn-primary" >Go to next unit</Link>
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
