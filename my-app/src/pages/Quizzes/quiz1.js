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
    const [answers, setAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const username = localStorage.getItem('username');
    const [recUnits, setRecUnits] = useState([]);
    const [recSections, setRecSections] = useState([]);
    const [showRec,setShowRec]=useState(false)
    const questions = [
        {
          question: 'What symbol is used to indicate a comment?',
          type: 'radio',
          options: ['?', '//', '#', '~'],
          answer: '#',
          unit:"1.1",
            section:"Hello world"
        },
        {
          question: 'What is the result of running the following piece of code: prnt("Hello!")',
          type: 'radio',
          options: ['Hello!', 'Error', 'Hello', '"Hello"'],
          answer: 'Error',
          unit:"1.2",
            section:"Syntax and formatting conventions"
        },
        {
          question: 'Which of the following is not true about variables?',
          type: 'radio',
          options: ['Can only contain the characters A-Z, 0-9 and _',
                    'Var1 and var1 are two different variables.',
                    'Variables can not have the same name as keywords',
                    'Must start with a letter, number, or underscore',],
          answer: 'Must start with a letter, number, or underscore',
        unit:"1.3",
            section:"Variables and naming conventions"
        },
        {
            question: 'True/False: Inputs are automatically seen as strings.',
            type: 'radio',
            options: ['True', 'False'],
            answer: 'True',
            unit:"1.4",
            section:"Printing and input"
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
            unit:"1.5",
            section:"Datatypes"
          },
      ];
    useEffect(() => {
            const test = "Quiz1"
            axios.post(baseURL + '/postUserScore', {username, test, score}).then(response => {
            })
                .catch(error => {
                    console.error(error);
                });
        }, [showScore]);
const recommend = (currentQuestion)=> {
    if (answers[currentQuestion] !== questions[currentQuestion].answer && !(recUnits.includes(questions[currentQuestion].unit))  ){
    setRecSections[currentQuestion]=questions[currentQuestion].section;
        setRecUnits[currentQuestion]=questions[currentQuestion].unit;
    }
}
const formatRec=()=>{
    const list = recUnits
     if (list.length===1){
        return "Based on your score you should review unit "+ list[0]+"."
    }
    else if(list.length===2){
        return "Based on your score you should review units "+list[0]+" and "+ list[1]+"."
    }
    else if(list.length>2){
    return "Based on your score you should review units "+list.slice(0, -1).join(", ") + ", and " + list.slice(-1)+"."}
}

      const handleAnswerSelection = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
      };

      const handleNextQuestion = () => {
          recommend()
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
            if(score <questions.length){
                setShowRec(true)
            }
        }


      };

      return (
        <div>
          {showScore ? (
            <div>
              <h2>Quiz Complete!</h2>
              <h3>Your Score: {score}</h3>
<h4>{formatRec()}</h4>
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