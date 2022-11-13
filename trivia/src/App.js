import './App.css';
import 'bulma/css/bulma.min.css'
import React, { useState, useEffect } from 'react';
import { requestCategories } from './components/requests';
import { Categories } from './components/categories';
import { Questions } from './components/questions';

const App = () => {
  const [category, setCategory] = useState([]);
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    requestCategories()
      .then(res => setCategory(res.data.trivia_categories))}, []);

  return (
    <section className="container">
      <header className="hero is-primary">
        <h1 className="hero-body title has-text-centered">Trivia</h1>
      </header>

        <div>
          {selectedId ? (
          <Questions 
            selectedId={selectedId}
            setSelectedId={setSelectedId} />
          ) : (
          <>
          <Categories
            category={category}
            setSelectedId={setSelectedId} />
          </>
          )}
        </div>
      </section>
  )};


export default App;
