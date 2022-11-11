import {useState, useEffect} from 'react'
import { requestQuestions } from './requests'
import { FinalScore } from './finalScore'

export const Questions = ({selectedId, setSelectedId, quiz}) => {
    const [question, setQuestion] = useState('')
    const [correct, setCorrect] = useState('')
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
            })
    }, [selectedId, index])

    return (
        <section>
            {index < 10 ? (
        <div>
            <button onClick={() => {setSelectedId(null)}}>Back to Categories</button>

            <h5>Question #{index+1}</h5>
            <h3>{question}</h3>

            <button onClick={() => {setIndex(index += 1); setRight(right += 1)}}>{correct}</button>

            {incorrects.map((incorrect, idx) => (
                <button key={idx} onClick={() => {setIndex(index += 1); setWrong(wrong += 1)}}
                >{incorrect.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</button>
            ))}

            <p>Right: {right}</p>
            <p>Wrong: {wrong}</p>
        </div>
        ) : (
            <FinalScore 
            setSelectedId={setSelectedId}
            right={right}
            wrong={wrong}
            quiz={quiz}
            />
        )}
        </section>
    )
}