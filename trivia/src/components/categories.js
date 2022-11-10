
let quizUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({ category, setQuizUrl, setSelectedId }) => {

    return(
        <div className="categories">
        {category.map((cat) => (
            <div>
                <button onClick={()=>{setQuizUrl(quizUrl + cat.id); setSelectedId(cat.id)}}
                >id: {cat.id} {cat.name}</button>
            </div>
    ))}
        </div>
)}