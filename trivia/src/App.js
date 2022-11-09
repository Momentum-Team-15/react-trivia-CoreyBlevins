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

  useEffect(() => {
    requestCategories()
      .then(res => setCategory(res.data.trivia_categories))}, []);

  useEffect(() => {
    axios.get(quizUrl)
      .then(res => setQuiz(res.data.results))}, [quizUrl]);

  return (
    <section>
      {category.map((cat) => (
        <div>
          <Categories
            id={cat.id}
            category={cat.name}
            setQuizUrl={setQuizUrl} />
        </div>
      ))}
      {console.log(quizUrl)}
      {console.log(quiz)}
      <div>
        {quiz.map((ques) => (
          <div>
            <Questions
              ask={ques.question} />
          </div>
        ))}
      </div>
    </section>


  );
}

export default App;
