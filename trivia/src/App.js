import './App.css';
import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react';
import { requestCategories, requestQuestions} from './components/requests';
import { Categories } from './components/categories';
import { Questions } from './components/questions';


const App = () => {
  const [category, setCategory] = useState([]);
  const [quiz, setQuiz] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [difficulty, setDifficulty] = useState('')

  useEffect(() => {
    requestCategories()
      .then(res => setCategory(res.data.trivia_categories))}, []);

  useEffect(() => {
    requestQuestions(selectedId, difficulty)
      .then(res => {setQuiz(res.data.results)})}, [selectedId, difficulty]);

      return (
        <section className="container">
        <header className="hero is-primary">
          <h1 className="hero-body title has-text-centered">Trivia</h1>
        </header>

        <div>
          {selectedId ? (
          <Questions 
            selectedId={selectedId}
            setSelectedId={setSelectedId} 
            quiz={quiz} />
          ) : (
          <>
          <Categories
            category={category}
            setSelectedId={setSelectedId}
            difficulty={difficulty}
            setDifficulty={setDifficulty} />
          </>
          )}
        </div>
      </section>
  )};

export default App;
