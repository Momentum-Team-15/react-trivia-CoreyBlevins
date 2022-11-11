export const FinalScore = ({setSelectedId, right, wrong, quiz}) => {

    return (
        <div>
            <button onClick={() => {setSelectedId(null)}}>Back to Categories</button>

            <h2>{quiz[0].category}</h2>

            <p>Right: {right}</p>
            <p>Wrong: {wrong}</p>

            {quiz.map((question, idx) => (
                <div key={idx}>
                    <h4>{question.question
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</h4>
                    <p>{question.correct_answer
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</p>
                    {question.incorrect_answers.map((incorr, idx) => (
                        <p key={idx}>{incorr.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}