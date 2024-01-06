import React from 'react';

function PreTestGrader() {
  let score = 0;

  const q1_answer = document.getElementById('answer1').value.toLowerCase();
  if (q1_answer === 'make a user input-based number guessing game that keeps looping until the user gets the right answer.') {
    score++;
  }

  const q2_answer = document.getElementById('answer2').value.toLowerCase();
  if (q2_answer === 'math') {
    score++;
  }

  const q3_answer = document.getElementById('answer3').value.toLowerCase();
  if (q3_answer === '&&') {
    score++;
  }

  const q4_answer = document.getElementById('answer4').value.toLowerCase();
  if (q4_answer === 'it depends on what is placed within it') {
    score++;
  }

  const q5_answer = document.getElementById('answer5').value.toLowerCase();
  if (q5_answer === 'for (let i = 0; i < 3; i++) { clickPen(); }') {
    score++;
  }

  const q6_answer = document.getElementById('answer6').value.toLowerCase();
  if (q6_answer === 'string()') {
    score++;
  }

  const q7_answer = document.getElementById('answer7').value.toLowerCase();
  if (q7_answer === 'float_var = float(int_var)') {
    score++;
  }

  const q8_answer = document.getElementById('answer8').value.toLowerCase();
  if (q8_answer === 'adds an element to the end of a list') {
    score++;
  }

  const q9_answer = document.getElementById('answer9').value.toLowerCase();
  const isValidContent = q9_answer.every(item => typeof item === 'number' && (Number.isInteger(item) || Number.isFinite(item)));
  if (q9_answer) {
    score++;
  }

  const q10_answer = document.getElementById('answer10').value.toLowerCase();
  if (q10_answer === '**') {
    score++;
  }
}
export default PreTestGrader;