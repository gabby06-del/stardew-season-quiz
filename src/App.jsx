import { useQuiz } from "./hooks/useQuiz.js"
import { IntroScreen } from "./components/IntroScreen.jsx"
import { QuizScreen } from "./components/QuizScreen.jsx"
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
           <QuizScreen
            question={quiz.question}
            questionIndex={quiz.questionIndex}
            totalQuestions={quiz.totalQuestions}
            onAnswer={quiz.answer}
            />
        )}

        {quiz.phase === "result" && (
          <p>Result screen coming soon</p>
        )}

      </div>
    </div>
  )
}


