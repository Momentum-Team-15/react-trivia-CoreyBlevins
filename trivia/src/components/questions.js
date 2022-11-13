import {useState, useEffect} from 'react'
import { requestQuestions } from './requests'
import { FinalScore } from './finalScore'

export const Questions = ({selectedId, setSelectedId}) => {
    const [quiz, setQuiz] = useState([])
    const [question, setQuestion] = useState('')
    const [correct, setCorrect] = useState([])
    const [incorrects, setIncorrects] = useState([])
    let [index, setIndex] = useState(0)
    let [right, setRight] = useState(0)
    let [wrong, setWrong] = useState(0)

    useEffect(() =>  {
        requestQuestions(selectedId)
            .then(res => {
                setQuestion(res.data.results[index].question
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"))
                setCorrect(res.data.results[index].correct_answer
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"))
                setIncorrects(res.data.results[index].incorrect_answers)
                setQuiz(res.data.results)
            })
    }, [selectedId, index])

    const handleClick = (e) => e.target.innerText === correct ? (setIndex(index += 1), setRight(right += 1))
        : (setIndex(index += 1), setWrong(wrong += 1))

    const answers = (incorrects.concat(correct)).sort(() => Math.random() - 0.5);

    return (
        <section>
            {index < 10 ? (
            <div>
                
                <button className="button is-link"
                    onClick={() => setSelectedId(null)}>Back to Categories</button>

                <div className="questions box has-text-centered">
                    <h5 className="questions">Question {index+1} of 10</h5>
                    <h3 className="questions">{question}</h3>
                    
                    <div>
                    {answers.map((answer) => (
                        <button className="answers button is-info" 
                            onClick={(e) => handleClick(e)}>{answer
                            .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}
                        </button>
                    ))}
                    </div>
                    
                    <progress className="progress is-success" value={right} max="10"></progress>
                    <progress className="progress is-danger" value={wrong} max="10"></progress>

                </div>
            </div>

            ) : (
            <FinalScore 
            setSelectedId={setSelectedId}
            right={right}
            wrong={wrong}
            quiz={quiz} />
            )}
        </section>
    )
}