import React from 'react';

function PreTestGrader() {

    let score = 0;

  // Question 1
  const q1_answer = document.getElementById('answer1').value.toLowerCase();


  // Question 2
  const q2_answer = document.getElementById('answer2').value.toLowerCase();
  if (q2_answer === 'math') {
    score++;
  }

  // Question 3
  const q3_answer = document.getElementById('answer3').value.toLowerCase();
  if (q3_answer === '&&') {
    score++;
  }

  // Question 4


  // Question 5


  // Question 6


  // Question 7


  // Question 8
  const q8_answer = document.getElementById('answer8').value.toLowerCase();
  if (q8_answer === 'adds an element to the end of a list') {
    score++;
  }

  // Question 9


  // Question 10
  const q10_answer = document.getElementById('answer10').value.toLowerCase();
  if (q10_answer === '**') {
    score++;
  }

  // Question 11
  const q11_answer = document.getElementById('answer11').value.toLowerCase();
  if (q11_answer.includes('boolean')) {
    score++;
  }

  // Question 12
  const q12_answer = document.getElementById('answer12').value.toLowerCase();
  const randomNum = Math.floor(Math.random() * 4) + 1;
  if (parseInt(q12_answer) === randomNum) {
    score++;
  }

  // Question 13
  const q13_answer = document.getElementById('answer13').value.toLowerCase();
  if (q13_answer === '48 46 44 42 40') {
    score++;
  }

  // Question 14
  const q14_answer = document.getElementById('answer14').value.toLowerCase();
  if (q14_answer === '__num__') {
    score++;
  }

  // Question 15


  // Question 16
  const q16_answer = document.getElementById('answer16').value.toLowerCase();
  if (q16_answer === '2') {
    score++;
  }

  // Question 17


  // Question 18
  const q18_answer = document.getElementById('answer18').value.toLowerCase();
  if (q18_answer === 'print("The answer is " + str(10))') {
    score++;
  }

  // Question 19


  // Question 20
  const q20_answer = document.getElementById('answer20').value.toLowerCase();
  if (q20_answer.includes('while')) {
    score++;
  }

  // Question 21
  const q21_answer = document.getElementById('answer21').value.toLowerCase();
  if (q21_answer === '-hi-' || q21_answer === 'car1%' || q21_answer === '(age)') {
    score++;
  }

  // Question 22
  const q22_answer = document.getElementById('answer22').value.toLowerCase();
  if (q22_answer === '//') {
    score++;
  }

  // Question 23
  const q23_answer = document.getElementById('answer23').value.toLowerCase();
  if (q23_answer === '20' || q23_answer === '21' || q23_answer === '22' || q23_answer === '23' || q23_answer === '24' || q23_answer === '25' || q23_answer === '26' || q23_answer === '27' || q23_answer === '28' || q23_answer === '29' || q23_answer === '30' || q23_answer === '31' || q23_answer === '32' || q23_answer === '33' || q23_answer === '34' || q23_answer === '35' || q23_answer === '36' || q23_answer === '37' || q23_answer === '38' || q23_answer === '39' || q23_answer === '40' || q23_answer === '41' || q23_answer === '42' || q23_answer === '43' || q23_answer === '44' || q23_answer === '45' || q23_answer === '46' || q23_answer === '47' || q23_answer === '48') {
    score++;
  }

  // Question 24
  const q24_answer = document.getElementById('answer24').value.toLowerCase();
  let numberList = [1, 2, 3];
  function addNumberToList(number) {
    numberList.push(number + 45);
  }
  addNumberToList(45);
  if (numberList.length === 4 && numberList.includes(46)) {
    score++;
  }

  // Question 25
  const q25_answer = document.getElementById('answer25').value.toLowerCase();
  if (q25_answer === '==') {
    score++;
  }


}
export default PreTestGrader;