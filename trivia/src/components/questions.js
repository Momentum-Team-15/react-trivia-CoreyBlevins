import {useState, useEffect} from 'react'
import { requestQuestions } from './requests'

export const Questions = ({selectedId, setSelectedId}) => {
    const [question, setQuestion] = useState('')
    const [correct, setCorrect] = useState('')
    const [incorrects, setIncorrects] = useState('')

    useEffect(() =>  {
        requestQuestions(selectedId)
            .then(res => {
                setQuestion(res.data.results[0].question)
                setCorrect(res.data.results[0].correct_answer)
                setIncorrects(res.data.results[0].incorrect_answers)
            })
    }, [selectedId])

    return (
        <div>
            <button onClick={() => {setSelectedId(null)}}>Home</button>
            <h1> hello </h1>
            <p>{question}</p>
            <button>{correct}</button>
            {console.log(incorrects)}

            <button>{incorrects}</button>
        </div>
    )
}