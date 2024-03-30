import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {send_time} from '../../components/AxiosCalls';
import {baseURL} from '../../config';


export default function Quiz1 (){
  const loggedInUser = localStorage.getItem('username');
  send_time('quiz1', loggedInUser);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [wrong, setWrong] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const username = localStorage.getItem('username');

    const units = new Map();
    units.set(0, 'Unit 1.1')
    units.set(1, 'Unit 1.2')
    units.set(2, 'Unit 1.3')
    units.set(3, 'Unit 1.4')
    units.set(4, 'Unit 1.2')


    const questions = [
        {
          question: 'What symbol is used to indicate a comment?',
          type: 'radio',
          options: ['?', '//', '#', '~'],
          answer: '#',
        },
        {
          question: 'What is the result of running the following piece of code: prnt("Hello!")',
          type: 'radio',
          options: ['Hello!', 'Error', 'Hello', '"Hello"'],
          answer: 'Error',
        },
        {
          question: 'Which of the following is not true about variables?',
          type: 'radio',
          options: ['Can only contain the characters A-Z, 0-9 and _',
                    'Var1 and var1 are two different variables.',
                    'Variables can not have the same name as keywords',
                    'Must start with a letter, number, or underscore',],
          answer: 'Must start with a letter, number, or underscore',
        },
        {
            question: 'True/False: Inputs are automatically seen as strings.',
            type: 'radio',
            options: ['True', 'False'],
            answer: 'True',
        },
        {
            question: 'Which of the following is not a valid statements?',
            type: 'radio',
            options: ['var = 3 > 8',
                      'var = "test"',
                      'var = ["123", 1, "test", 4]',                       
                      'print(Hello World)',
                    ],
            answer: 'print(Hello World)',
          },
      ];
    useEffect(() => {
            const test = "Quiz1"
            axios.post(baseURL + '/postUserScore', {username, test, score}).then(response => {
                  console.log("SUCCESS", response);

            })
                .catch(error => {
                    console.error(error);
                });
        }, [showScore]);

    useEffect(() => {
        const feedback = wrong.join(', ');
    axios.post(baseURL +'/postFeedback',  {username: username, feedback:feedback}).then(response => {
      console.log("SUCCESS", response);
     }).catch(error => {
      console.log(error);
    })}, [showScore])

      const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
      };

      const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowScore(true);
        }
        if (
          answers[currentQuestion] === questions[currentQuestion].answer ||
          JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
          setScore(score + 1);
      } else {
          var wrongUnit = units.get(currentQuestion);
          wrong.indexOf(wrongUnit) === -1 ? setWrong(oldArray => [...oldArray, wrongUnit]) : console.log("This item already exists")

      }
    }
      ;

      return (
        <div>
          {showScore ? (
            <div>
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score}</h3>
              <h4> Units to review: {wrong.toString()}</h4>
              <Link to="/Flashcards" className="btn-quiz">Get more practice with flashcards!</Link>
                <br/><br/><br/>
                <Link to="/u2_1" className="btn btn-primary" >Go to next unit</Link>

            </div>

          ) : (
            <div>
              <h1>Unit 1 Quiz</h1>
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