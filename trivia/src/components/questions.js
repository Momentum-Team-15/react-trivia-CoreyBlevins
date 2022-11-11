import {useState, useEffect} from 'react'
import { requestQuestions } from './requests'

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
                setQuestion(res.data.results[index].question)
                setCorrect(res.data.results[index].correct_answer)
                setIncorrects(res.data.results[index].incorrect_answers)
            })
    }, [selectedId, index])
    console.log({quiz})
    console.log({question})

    return (
        <section>
            {index < 10 ? (
        <div>
            <button onClick={() => {setSelectedId(null)}}>Home</button>
            <h3>{question}</h3>
            <button onClick={() => {setIndex(index += 1); setRight(right += 1)}}>{correct}</button>
            {incorrects.map((incorrect, idx) => (
                <button key={idx} onClick={() => {setIndex(index += 1); setWrong(wrong += 1)}}>{incorrect}</button>
            ))}
            <p>Right: {right}</p>
            <p>Wrong: {wrong}</p>
        </div>) : (
            <div>
            <button onClick={() => {setSelectedId(null)}}>Home</button>
            <p>Right: {right}</p>
            <p>Wrong: {wrong}</p>
            </div>
        )}
        </section>
    )
}