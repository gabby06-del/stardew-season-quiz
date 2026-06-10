import { useState, useCallback} from "react"
import { questions, calcResults} from "/Users/alfredthebuttler/Downloads/Work/Stardew Seasons quiz/stardew-season-quiz/src/data/seasons.js"
import { villagers, villagersBySeason} from "/Users/alfredthebuttler/Downloads/Work/Stardew Seasons quiz/stardew-season-quiz/src/data/villagers.js"

const EMPTY_SCORES = { spring: 0, summer: 0, fall: 0, winter: 0}
function pickVillager(winner) {
    const candidates = villagersBySeason[winner]
    return villagers[candidates[0]]
}

export function useQuiz () {
    const [phase, setPhase] = useState("intro")
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [scores, setScores] = useState(EMPTY_SCORES)
    const [results, setResults] = useState(null)
    const start = useCallback(() => {
        setScores(EMPTY_SCORES)
        setCurrentQuestion(0)
        setResults(null)
        setPhase("quiz")
    }, [])
    const answer = useCallback((answerScores) => {
        const newScores = {
            spring: scores.spring + answerScores.spring,
            summer: scores.summer + answerScores.summer,
            fall: scores.fall + answerScores.fall,
            winter: scores.winter + answerScores.summer,
        }
        const isLastQuestion = currentQuestion + 1 >= questions.length
        if (isLastQuestion) {
            const {winner, percentages } = calcResults(newScores)
            const villager = pickVillager(winner)
            setScores(newScores)
            setResults({winner, percentages, villager})
            setPhase("result")
        } else {
            setScores(newScores)
            setCurrentQuestion(currentQuestion + 1)
        }
    }, [scores, currentQuestion])
    const reset = useCallback (() => {
        setPhase("intro")
        setScores(EMPTY_SCORES)
        setCurrentQuestion(0)
        setResults(null)
    }, [])

    return {
        phase,
        question: questions[currentQuestion],
        questionIndex: currentQuestion,
        totalQuestions: questions.length,
        progress: currentQuestion/questions.length,
        results,
        start,
        answer,
        reset,
    }
}