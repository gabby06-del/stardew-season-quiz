

import "./ResultCard.css"
import { seasons } from "../data/seasons.js"

export function ResultCard({ results, onReset }) {

  const { winner, percentages, villager } = results
  const season = seasons[winner]

  const seasonOrder = ["spring", "summer", "fall", "winter"]
  const seasonEmojis = {
    spring: "🌸",
    summer: "☀️",
    fall:   "🍂",
    winter: "❄️",
  }
  const barColors = {
    spring: "#f472b6",
    summer: "#f59e0b",
    fall:   "#ea580c",
    winter: "#60a5fa",
  }

  return (
    <div className="result" style={{ background: season.colorLight }}>

      <div
        className="result__card"
        style={{
          borderColor: season.colorBorder,
          background: season.colorLight,
        }}
      >
        <div
          className="result__card-stripe"
          style={{ background: season.color }}
        >
          <span className="result__stripe-label">you are</span>
        </div>

        <div className="result__card-body">
          <div className="result__season-emoji">{season.emoji}</div>
          <div
            className="result__season-name"
            style={{ color: season.colorDark }}
          >
            {season.name}
          </div>
          <div
            className="result__tagline"
            style={{ color: season.colorText }}
          >
            {season.cardTagline}
          </div>
          <p
            className="result__desc"
            style={{ color: season.colorText }}
          >
            {season.description}
          </p>
          <div className="result__crops">
            {season.crops.map((crop, i) => (
              <span key={i} className="result__crops">{crop}</span>
            ))}
          </div>
        </div>
      </div>

    
      <div className="result__breakdown">
        <div className="result__breakdown-title">Your season breakdown</div>
        {seasonOrder.map((s) => (
          <div key={s} className="result__bar-row">
            <span className="result__bar-label">
              {seasonEmojis[s]} {s.charAt(0).toUpperCase() + s.slice(1)}
            </span>
            <div className="result__bar-track">
              <div
                className="result__bar-fill"
                style={{
                  width: `${percentages[s]}%`,
                  background: barColors[s],
                }}
              />
            </div>
            <span className="result__bar-pct">{percentages[s]}%</span>
          </div>
        ))}
      </div>

      <div className="result__villager">
        <div className="result__villager-avatar">{villager.sprite}</div>
        <div className="result__villager-info">
          <div className="result__villager-eyebrow">Your villager match</div>
          <div className="result__villager-name">{villager.name}</div>
          <div className="result__villager-why">{villager.matchDesc}</div>
        </div>
      </div>

     
      <div className="result__actions">
        <button className="result__btn result__btn--share">
          📤 Save Card
        </button>
        <button
          className="result__btn result__btn--retry"
          onClick={onReset}
        >
          ↩ Try Again
        </button>
      </div>

    </div>
  )
}