import "../components/QuizScreen.css"

export function QuizScreen({ question, questionIndex, totalQuestions, onAnswer}) {

    const progressPercent = (questionIndex / totalQuestions) * 100

    return (
       <div className="quiz">
        <div className="quiz__progress-wrap">
            <div
            className="quiz__progress-fill"
            style={{ width: `${progressPercent}%` }}
            />
        </div>
        <div className="quiz__counter">
        Question {questionIndex + 1} of {totalQuestions}
        </div>

        <h2 className="quiz__question">{question.text}</h2>
        <div className="quiz__options">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="quiz__option"
            onClick={() => onAnswer(answer.scores)}
          >
            <span className="quiz__option-emoji">{answer.emoji}</span>
            <span className="quiz__option-text">{answer.text}</span>
          </button>
        ))}
      </div>

     </div> 
    )
}