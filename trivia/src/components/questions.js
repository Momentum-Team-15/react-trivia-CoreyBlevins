import { useState } from 'react';
import { FinalScore } from './finalScore';

export const Questions = ({setSelectedId, quiz}) => {
    let [index, setIndex] = useState(0);
    let [right, setRight] = useState(0);
    let [wrong, setWrong] = useState(0);

    if (quiz.length === 0) {return <div></div>};
    
    const handleClick = (e) => e.target.innerText === quiz[index].correct_answer
        .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'") ? 
        (setIndex(index += 1), setRight(right += 1)) : (setIndex(index += 1), setWrong(wrong += 1));
    
    const question = (quiz[index].question.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"));
    const answers = (quiz[index].incorrect_answers.concat(quiz[index].correct_answer)).sort(() => Math.random() - 0.5);

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
                    {answers.map((answer, idx) => (
                        <button className="answers button is-info" key={idx}
                            onClick={(e) => handleClick(e)}>{answer
                            .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}
                        </button>
                    ))}
                    </div>
                    
                    <progress className="progress is-success" value={right} max="10"></progress>
                    <progress className="progress is-danger" value={wrong} max="10"></progress>
                    {console.log(quiz)}
                </div>
            </div>

            ) : (

            <FinalScore 
            setSelectedId={setSelectedId}
            right={right}
            wrong={wrong}
            quiz={quiz.slice(0, 10)} />

            )}

        </section>
    )
}