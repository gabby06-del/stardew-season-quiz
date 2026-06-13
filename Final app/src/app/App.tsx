import { useState, useMemo, useRef } from "react";
import { seasons, questions, calcResults } from "../imports/seasons.js";
import { villagers, villagersBySeason } from "../imports/villagers.js";

// ── Character portrait imports ────────────────────────────────────────────────
import AbigailImg   from "../imports/Abigail.png";
import AlexImg      from "../imports/Alex.png";
import ElliottImg   from "../imports/Elliott.png";
import EmilyImg     from "../imports/Emily.png";
import HaleyImg     from "../imports/Haley.png";
import HarveyImg    from "../imports/Harvey.png";
import LeahImg      from "../imports/Leah.png";
import MaruImg      from "../imports/Maru.png";
import PennyImg     from "../imports/Penny.png";
import SamImg       from "../imports/Sam.png";
import SebastianImg from "../imports/Sebastian.png";
import ShaneImg     from "../imports/Shane.png";

const VILLAGER_IMAGES: Record<string, string> = {
  abigail:   AbigailImg,
  alex:      AlexImg,
  elliott:   ElliottImg,
  emily:     EmilyImg,
  haley:     HaleyImg,
  harvey:    HarveyImg,
  leah:      LeahImg,
  maru:      MaruImg,
  penny:     PennyImg,
  sam:       SamImg,
  sebastian: SebastianImg,
  shane:     ShaneImg,
};

type Screen = "landing" | "quiz" | "results";
type Scores = Record<string, number>;

const PIXEL = "'Pixelify Sans', monospace";
const SEASON_ORDER = ["spring", "summer", "fall", "winter"] as const;

const BAR_COLORS: Record<string, string> = {
  spring: "#f472b6",
  summer: "#f59e0b",
  fall:   "#ea580c",
  winter: "#60a5fa",
};

const SEASON_EMOJIS: Record<string, string> = {
  spring: "🌸",
  summer: "☀️",
  fall:   "🍂",
  winter: "❄️",
};

// ─── Star rating ──────────────────────────────────────────────────────────────
function Stars({ pct }: { pct: number }) {
  const filled = pct >= 75 ? 5 : pct >= 60 ? 4 : pct >= 50 ? 3 : pct >= 35 ? 2 : 1;
  return (
    <span style={{ fontSize: 13, letterSpacing: 2 }}>
      {"★".repeat(filled)}
      <span style={{ opacity: 0.25 }}>{"★".repeat(5 - filled)}</span>
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LANDING
// ═══════════════════════════════════════════════════════════════════════════════
function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        background: [
          "radial-gradient(ellipse 70px 22px at 18% 12%, rgba(255,255,255,0.85) 50%, transparent 51%)",
          "radial-gradient(ellipse 55px 18px at 42% 7%,  rgba(255,255,255,0.75) 50%, transparent 51%)",
          "radial-gradient(ellipse 90px 26px at 72% 14%, rgba(255,255,255,0.80) 50%, transparent 51%)",
          "radial-gradient(ellipse 40px 13px at 88% 9%,  rgba(255,255,255,0.60) 50%, transparent 51%)",
          "linear-gradient(180deg,#6BBFE8 0%,#87CEEB 38%,#7CB848 48%,#5A9E35 65%,#C49A3C 75%,#D4A56A 100%)",
        ].join(", "),
      }}
    >
      <div
        style={{
          width: "100%", maxWidth: 420,
          background: "#f9f3e8",
          borderRadius: 4,
          border: "4px solid #5a3e1b",
          boxShadow: "0 0 0 2px #f9f3e8, 0 0 0 5px #8b6944, 6px 8px 0 5px rgba(0,0,0,0.35)",
          overflow: "hidden",
        }}
      >
        {/* title bar */}
        <div style={{ background: "#5a3e1b", padding: "6px 12px", display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: PIXEL, fontSize: 11, color: "#f9f3e8", letterSpacing: 1 }}>STARDEW VALLEY</span>
          <span style={{ marginLeft: "auto", fontFamily: PIXEL, fontSize: 10, color: "#a08060" }}>✕</span>
        </div>

        <div style={{ padding: "2.5rem 2rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {["✿ Which Stardew Valley ✿", "season are you?"].map((line, i) => (
              <div key={i} style={{ fontFamily: PIXEL, fontSize: "clamp(16px, 4vw, 22px)", color: "#bd9462", textShadow: "2px 3px 0 #7c583b", lineHeight: 1.5 }}>
                {line}
              </div>
            ))}
          </div>

          <p style={{ fontFamily: PIXEL, fontSize: 12, color: "#6b5740", lineHeight: 1.9, maxWidth: 340 }}>
            Answer 8 personality-related questions to discover your season, your percentage breakdown, and your villager match.
          </p>

          <div style={{ display: "flex", gap: 14 }}>
            {[
              { emoji: "🌸", bg: "#fce4ec", border: "#f48fb1" },
              { emoji: "☀️", bg: "#fff8e1", border: "#ffe082" },
              { emoji: "🍂", bg: "#fbe9e7", border: "#ffab91" },
              { emoji: "❄️", bg: "#e3f2fd", border: "#90caf9" },
            ].map((s, i) => (
              <div key={i} style={{ width: 62, height: 62, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, background: s.bg, border: `2.5px solid ${s.border}`, cursor: "default", transition: "transform 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.12) rotate(-4deg)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >{s.emoji}</div>
            ))}
          </div>

          <button onClick={onStart}
            style={{ width: "100%", maxWidth: 280, padding: "16px", fontFamily: PIXEL, fontSize: 18, background: "#a8d878", color: "#2d5a1b", border: "3px solid #5a8a2e", borderRadius: 4, cursor: "pointer", boxShadow: "0 4px 0 #5a8a2e", transition: "transform 0.1s, box-shadow 0.1s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 0 #5a8a2e"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";   e.currentTarget.style.boxShadow = "0 4px 0 #5a8a2e"; }}
            onMouseDown={e =>  { e.currentTarget.style.transform = "translateY(2px)"; e.currentTarget.style.boxShadow = "0 2px 0 #5a8a2e"; }}
            onMouseUp={e =>    { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 0 #5a8a2e"; }}
          >▶ Start Quiz</button>

          <p style={{ fontFamily: PIXEL, fontSize: 9, color: "#a08060" }}>
            Student project, no affiliation with ConcernedApe
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════════════════════════════
function QuizScreen({ onFinish }: { onFinish: (s: Scores) => void }) {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({ spring: 0, summer: 0, fall: 0, winter: 0 });
  const [selected, setSelected] = useState<number | null>(null);

  const q = questions[current];

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const next = { ...scores };
    Object.entries(q.answers[idx].scores).forEach(([k, v]) => { next[k] = (next[k] ?? 0) + (v as number); });
    setTimeout(() => {
      if (current + 1 >= questions.length) { onFinish(next); }
      else { setScores(next); setCurrent(current + 1); setSelected(null); }
    }, 380);
  }

  return (
    <div style={{ minHeight: "100vh", width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "32px 16px", background: "#a8c5a0" }}>
      <div style={{ width: "100%", maxWidth: 440, background: "#f9f3e8", borderRadius: 4, border: "4px solid #5a3e1b", boxShadow: "0 0 0 2px #f9f3e8, 0 0 0 5px #8b6944, 6px 8px 0 5px rgba(0,0,0,0.25)", overflow: "hidden" }}>
        <div style={{ background: "#5a3e1b", padding: "6px 12px" }}>
          <span style={{ fontFamily: PIXEL, fontSize: 11, color: "#f9f3e8", letterSpacing: 1 }}>STARDEW VALLEY</span>
        </div>
        <div style={{ padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* progress */}
          <div style={{ background: "#e0d5c0", borderRadius: 4, height: 8, overflow: "hidden", border: "1px solid #c4b89a" }}>
            <div style={{ height: "100%", width: `${(current / questions.length) * 100}%`, background: "#a8d878", borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
          <div style={{ fontFamily: PIXEL, fontSize: 12, color: "#a08060" }}>Question {current + 1} of {questions.length}</div>
          <h2 style={{ fontFamily: PIXEL, fontSize: "clamp(14px, 3.5vw, 19px)", color: "#5a3e1b", lineHeight: 1.6, textShadow: "1px 2px 0 #c4b89a" }}>{q.text}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {q.answers.map((ans, i) => {
              const isSel = selected === i;
              return (
                <button key={i} onClick={() => handleAnswer(i)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, padding: "14px 12px", background: isSel ? "#e8f5d8" : "#fffdf5", border: `2px solid ${isSel ? "#5a8a2e" : "#c4b89a"}`, borderRadius: 8, cursor: "pointer", textAlign: "left", boxShadow: isSel ? "0 2px 0 #5a8a2e" : "0 3px 0 #c4b89a", transition: "all 0.12s" }}
                  onMouseEnter={e => { if (selected === null) { e.currentTarget.style.borderColor = "#8fbc6e"; e.currentTarget.style.background = "#f0fae8"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
                  onMouseLeave={e => { if (!isSel) { e.currentTarget.style.borderColor = "#c4b89a"; e.currentTarget.style.background = "#fffdf5"; e.currentTarget.style.transform = "translateY(0)"; }}}
                >
                  <span style={{ fontSize: 26, lineHeight: 1 }}>{ans.emoji}</span>
                  <span style={{ fontFamily: PIXEL, fontSize: 12, color: "#5a3e1b", lineHeight: 1.5 }}>{ans.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RESULT CARD  ── Pokémon card layout matching the sketch
// ═══════════════════════════════════════════════════════════════════════════════
function SeasonCard({
  season, winner, percentages, villagerKey, villager, cardRef,
}: {
  season: any; winner: string; percentages: Record<string, number>;
  villagerKey: string; villager: any;
  cardRef: React.RefObject<HTMLDivElement | null>;
}) {
  const topPct  = percentages[winner] ?? 0;
  const color   = season.color;
  const dark    = season.colorDark ?? season.color;
  const light   = season.colorLight ?? "#fffbeb";
  const textCol = season.colorText ?? "#5a3e1b";
  const portraitSrc = VILLAGER_IMAGES[villagerKey] ?? null;

  /* shinny foil outer ring */
  const foil = `linear-gradient(135deg, ${color}ff 0%, ${dark}ff 35%, #fff9 55%, ${color}dd 75%, ${dark}ff 100%)`;

  return (
    /* Outer foil border */
    <div ref={cardRef} style={{ background: foil, borderRadius: 20, padding: 6, boxShadow: `0 10px 28px rgba(0,0,0,0.28), 0 0 0 2px ${dark}` }}>
      {/* Card body */}
      <div style={{ background: light, borderRadius: 15, overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* ── Portrait area ── */}
        <div style={{ position: "relative", background: `linear-gradient(180deg, ${light} 0%, ${color}66 100%)`, borderBottom: `3px solid ${color}` }}>
          {/* Header strip overlay */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)" }}>
            {/* Villager name */}
            <span style={{ fontFamily: PIXEL, fontSize: 12, color: "#fff", textShadow: "1px 1px 0 rgba(0,0,0,0.6)", letterSpacing: 1 }}>
              {villager.name.toUpperCase()}
            </span>
            {/* Season emoji */}
            <span style={{ fontSize: 20 }}>{season.emoji}</span>
            {/* Score */}
            <span style={{ fontFamily: PIXEL, fontSize: 12, color: "#fff", textShadow: "1px 1px 0 rgba(0,0,0,0.6)" }}>
              ✦{topPct}%
            </span>
          </div>

          {/* Portrait image */}
          {portraitSrc ? (
            <img
              src={portraitSrc}
              alt={villager.name}
              style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "top center", display: "block", imageRendering: "pixelated" }}
            />
          ) : (
            /* Fallback for villagers without a PNG */
            <div style={{ width: "100%", height: 220, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, background: `linear-gradient(180deg, ${light}, ${color}44)` }}>
              {villager.sprite}
            </div>
          )}
        </div>

        {/* ── Season name banner ── */}
        <div style={{ background: color, padding: "10px 16px", textAlign: "center" }}>
          <div style={{ fontFamily: PIXEL, fontSize: "clamp(26px, 6vw, 36px)", color: "#fff", textShadow: `2px 3px 0 ${dark}, -1px -1px 0 rgba(0,0,0,0.15)`, letterSpacing: 2 }}>
            {season.name.toUpperCase()}
          </div>
          <div style={{ fontFamily: PIXEL, fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em", marginTop: 2 }}>
            {season.cardTagline}
          </div>
          <div style={{ marginTop: 6 }}>
            <Stars pct={topPct} />
          </div>
        </div>

        {/* ── Season breakdown bars ── */}
        <div style={{ padding: "12px 14px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
          {SEASON_ORDER.map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: PIXEL, fontSize: 10, color: "#5a3e1b", width: 60, flexShrink: 0 }}>
                {SEASON_EMOJIS[s]} {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
              <div style={{ flex: 1, height: 9, background: "#e0d5c0", borderRadius: 5, overflow: "hidden", border: "1px solid #c4b89a" }}>
                <div style={{ height: "100%", width: `${percentages[s] ?? 0}%`, background: BAR_COLORS[s], borderRadius: 5, transition: "width 1s cubic-bezier(0.22,0.61,0.36,1)" }} />
              </div>
              <span style={{ fontFamily: PIXEL, fontSize: 10, color: "#5a3e1b", width: 30, textAlign: "right", flexShrink: 0 }}>
                {percentages[s] ?? 0}%
              </span>
            </div>
          ))}
        </div>

        {/* ── Description box ── */}
        <div style={{ margin: "0 12px 14px", background: "#fffdf5", border: `2px solid ${color}`, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontFamily: PIXEL, fontSize: 9, color: textCol, opacity: 0.7, marginBottom: 4, letterSpacing: "0.08em" }}>
            ✦ ABILITY
          </div>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: 13, color: "#5a3e1b", lineHeight: 1.8, margin: 0 }}>
            {season.description}
          </p>
        </div>

        {/* ── Crops footer ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, paddingBottom: 14, fontSize: 22 }}>
          {season.crops?.map((c: string, i: number) => <span key={i}>{c}</span>)}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RESULTS SCREEN
// ═══════════════════════════════════════════════════════════════════════════════
function ResultsScreen({ scores, onRetry }: { scores: Scores; onRetry: () => void }) {
  const { winner, percentages } = useMemo(() => calcResults(scores), [scores]) as { winner: string; percentages: Record<string, number> };;
  const season = seasons[winner as keyof typeof seasons];
  const [saving, setSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const villagerKey = useMemo(() => {
    const pool = villagersBySeason[winner as keyof typeof villagersBySeason] ?? [];
    return pool[Math.floor(Math.random() * pool.length)];
  }, [winner]);
  const villager = villagers[villagerKey as keyof typeof villagers];

  async function handleSave() {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `stardew-${winner}-card.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      alert("Couldn't save — try screenshotting instead!");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "32px 16px 48px", background: "#a8c5a0" }}>
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 16 }}>

        {/* The saveable card */}
        <SeasonCard
          season={season}
          winner={winner}
          percentages={percentages}
          villagerKey={villagerKey}
          villager={villager}
          cardRef={cardRef}
        />

        {/* Buttons — outside the card so they don't appear in the saved image */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{ padding: "14px", borderRadius: 6, fontFamily: PIXEL, fontSize: 13, background: "#a8d878", color: "#2d5a1b", border: "2px solid #5a8a2e", boxShadow: "0 3px 0 #5a8a2e", cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.7 : 1, transition: "transform 0.1s, box-shadow 0.1s" }}
            onMouseEnter={e => { if (!saving) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 5px 0 #5a8a2e"; }}}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 0 #5a8a2e"; }}
          >
            {saving ? "Saving…" : "📤 Save Card"}
          </button>
          <button
            onClick={onRetry}
            style={{ padding: "14px", borderRadius: 6, fontFamily: PIXEL, fontSize: 13, background: "#fffdf5", color: "#5a3e1b", border: "2px solid #c4b89a", boxShadow: "0 3px 0 #c4b89a", cursor: "pointer", transition: "transform 0.1s, box-shadow 0.1s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 5px 0 #c4b89a"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 0 #c4b89a"; }}
          >
            ↩ Retry
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [finalScores, setFinalScores] = useState<Scores>({});

  return (
    <>
      {screen === "landing" && <LandingScreen onStart={() => setScreen("quiz")} />}
      {screen === "quiz"    && <QuizScreen onFinish={s => { setFinalScores(s); setScreen("results"); }} />}
      {screen === "results" && <ResultsScreen scores={finalScores} onRetry={() => setScreen("landing")} />}
    </>
  );
}
