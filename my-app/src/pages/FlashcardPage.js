import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from '../components/FlashcardList';
import '../App.css'
import axios from 'axios'

function FlashcardPage() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const unit = useRef()

  var headers = {
    'Content-Type': 'application/json',
  }
  useEffect(() => {
  }, [])

  
  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/get_units',headers=headers)
      .then(res => {
        setCategories(res.data.units)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .post('http://127.0.0.1:5000/get_flashcards', {unit: unit.current.value},
    headers=headers)
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = questionItem.answer
        return {
          id: `${index}-${Date.now()}`,
          question: questionItem.question,
          answer: answer,
        }
      }))
    })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Unit</label>
          <select id="unit" ref={unit}>
            {categories.map(category => {
              return <option value={category.name} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>

        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default FlashcardPage;