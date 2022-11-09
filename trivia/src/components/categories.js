
let quizUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({ id, category, setQuizUrl }) => {

    return(
    <div>
        <button onClick={() => setQuizUrl(quizUrl + id)}
        >id: {id} {category}</button>
    </div>
)}