# 🌸 Which Stardew Season Are You?

A personality quiz that matches you with a Stardew Valley season and villager based on your answers. Built as a personal project and currently in active development.

**🚧 Work in progress — UI redesign underway in Figma**

👉 **[Find out which Stardew Valley Season you are!](https://stardew-season-quiz.vercel.app)**

---

## What it does

- 8 personality questions with weighted scoring across all four seasons
- Percentage breakdown showing how much of each season you are
- Villager match based on your result, matching is based from a hand-written personality mapping of all 12 bachelors and bachelorettes 
- Downloadable result card you can save and share
- Fully responsive, works on mobile and desktop

---

## Built with

- React 18
- Vite
- html2canvas 
- Deployed on Vercel

---

## Project structure

```
src/
  data/
    villagers.js      ← personality mapping for all 12 characters
    seasons.js        ← season definitions, quiz questions, scoring logic
  hooks/
    useQuiz.js        ← quiz state machine (intro → quiz → result)
  components/
    IntroScreen.jsx   ← landing screen
    QuizScreen.jsx    ← question + answer UI
    ResultCard.jsx    ← result, breakdown bars, villager match, save card
  App.jsx
  App.css
```

---

## How the scoring works

Each answer adds points to one or more seasons. After all 8 questions the season with the highest total wins. Percentages are calculated by dividing each season's score by the total points accumulated.

The villager match is assigned based on the winning season - each season has a pool of characters whose personality traits were mapped by hand before any code was written.

---

## Current status

This is a rough draft. The quiz logic and data layer are complete. The UI is being redesigned in Figma before the next round of development.

**Done:**
- [x] Personality mapping for all 12 villagers
- [x] Quiz logic and scoring
- [x] All three screens (intro, quiz, result)
- [x] Percentage breakdown bars
- [x] Villager match
- [x] Downloadable result card
- [x] Deployed to Vercel

**In progress:**
- [ ] UI redesign in Figma
- [ ] Pixel art sprites for villagers
- [ ] Shareable URL with result encoded
- [ ] More questions for better accuracy

---

## Running locally

```bash
git clone https://github.com/gabby06-del/stardew-season-quiz.git
cd stardew-season-quiz
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Notes

Fan project,  not affiliated with ConcernedApe or the Stardew Valley IP.