export const FinalScore = ({setSelectedId, right, wrong, quiz}) => {

    return (
        <div>
            <button className="button is-link"
                onClick={() => {setSelectedId(null)}}>Back to Categories
            </button>

            <h2 className="title is-4 has-text-centered">{quiz[0].category}</h2>

            <div className="columns">
                <p className="column is-4 is-offset-2 has-background-success has-text-centered">
                    <strong>Right: {right}</strong></p>
                <p className="column is-4 has-background-danger has-text-centered">
                    <strong>Wrong: {wrong}</strong></p>
            </div>
            <div className="score">
            {quiz.map((question, idx) => (
                <div className="card box" key={idx}>
                    <h4>{question.question
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</h4>
                    <p className="has-text-success has-background-success-light">{question.correct_answer
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</p>
                    {question.incorrect_answers.map((incorr, idx) => (
                    <p className="has-text-danger has-background-danger-light"key={idx}>{incorr
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</p>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}