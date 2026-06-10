import { useQuiz } from "./hooks/useQuiz.js"
import { IntroScreen } from "./components/IntroScreen.jsx"
import "./App.css"

export default function App() {
  const quiz = useQuiz()

  return (
    <div className="app">
      <div className="app__card">

        {quiz.phase === "intro" && (
          <IntroScreen onStart={quiz.start} />
        )}

        {quiz.phase === "quiz" && (
          <p>Quiz screen coming soon</p>
        )}

        {quiz.phase === "result" && (
          <p>Result screen coming soon</p>
        )}

      </div>
    </div>
  )
}