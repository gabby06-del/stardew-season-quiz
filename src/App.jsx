import { useQuiz } from './hooks/useQuiz.js'

function App() {
  const quiz = useQuiz()

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <p>Phase: {quiz.phase}</p>
      <p>Question: {quiz.questionIndex + 1} of {quiz.totalQuestions}</p>
      <p>Question text: {quiz.question.text}</p>
      <br />
      <button onClick={quiz.start}>Start</button>
      <br /><br />
      {quiz.question.answers.map((a, i) => (
        <button
          key={i}
          onClick={() => quiz.answer(a.scores)}
          style={{ display: "block", margin: "4px 0" }}
        >
          {a.emoji} {a.text}
        </button>
      ))}
      <br />
      <button onClick={quiz.reset}>Reset</button>
      <br /><br />
      {quiz.results && (
        <div>
          <p>Winner: {quiz.results.winner}</p>
          <p>Spring: {quiz.results.percentages.spring}%</p>
          <p>Summer: {quiz.results.percentages.summer}%</p>
          <p>Fall: {quiz.results.percentages.fall}%</p>
          <p>Winter: {quiz.results.percentages.winter}%</p>
          <p>Villager: {quiz.results.villager.name}</p>
        </div>
      )}
    </div>
  )
}

export default App
