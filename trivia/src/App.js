import './App.css';
import React, { useState, useEffect } from 'react';
import { requestCategories } from './components/requests';
import { Categories } from './components/categories'
import { Questions } from './components/questions'
import axios from 'axios';

const App = () => {
  const [quizUrl, setQuizUrl] = useState(null);
  const [category, setCategory] = useState([]);
  const [quiz, setQuiz] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    requestCategories()
      .then(res => setCategory(res.data.trivia_categories))}, []);

  useEffect(() => {
    axios.get(quizUrl)
      .then(res => setQuiz(res.data.results))}, [quizUrl]);

  return (
    <section>
      <header><h1>Trivia</h1></header>
      <div>
        {selectedId ? (
          <Questions 
            selectedId={selectedId}
            setSelectedId={setSelectedId} />
            ) : (
            <>
            {category &&
              <Categories
                category={category}
                setSelectedId={setSelectedId} 
                setQuizUrl={setQuizUrl}/>}
            </>
            )}
        </div>
        </section>
  )};


export default App;
