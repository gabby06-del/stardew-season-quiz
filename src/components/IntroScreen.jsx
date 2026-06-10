import "/Users/alfredthebuttler/Downloads/Work/Stardew Seasons quiz/stardew-season-quiz/src/components/IntroScreen.css"

export function IntroScreen({onStart}) {
    return (
        <div className="intro">
            <div className="intro__title">
                <span className="intro__title-top"> ✿ Which Stardew Season ✿ </span>
                <span className="intro__title-bottom">are you?</span>
            </div>
            <p className="intro__subtitle">
                Answer 8 personality-related questions to discover your season, your percentage breakdown, and your villager match.
            </p>
            <div className="intro__seasons">
                <div className="intro__pip intro__pip--spring">🌸</div>
                <div className="intro__pip intro__pip--summer">☀️</div>
                <div className="intro__pip intro__pip--fall">🍂</div>
                <div className="intro__pip intro__pip--winter">❄️</div>
            </div>
            <button className="intro__btn" onClick={onStart}>
                ▶ Start Quiz
            </button>
            <p className="intro__credit">Student project, no affiliation with ConcernedApe</p>

        </div>
    )
}
