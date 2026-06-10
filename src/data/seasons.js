export const seasons = {
    spring: {
        id: "spring",
        name: "Spring",
        emoji: "💐",
        color: "#f1bfd9ff", 
        colorLight: "#fcfcfcff",
        colorBorder: "#f9c1e0ff",
        colorText: "#e35890ff",
        colorDark: "#c54176ff",
        description: 
        "You're warm, hopeful, genuine, and kind. Like Pelican Town in Spring, you bring colour and liveliness wherever you go. You are observant and create a safe space for people to find comfort.",
        cardTagline: "Fresh starts, quiet courage",
        crops: ["🌻", "🍓", "🍊"],
    },

    summer: {
        id: "summer",
        name: "Summer",
        emoji: "☀️",
        color: "#f3cb86ff",
        colorLight: "#fffbeb",
        colorBorder: "#fdeb74ff",
        colorDark: "#f7de00ff",
        description: 
            "You're vibrant, social, and adventurous - much like summer in Stardew valley you bring warmth to peoples lives.",
        cardTagline: "Loud, warm, unwavering",
        crops: ["🍉", "🫐", "🍅" ],

    },

    fall: {
        id: "fall",
        name: "Fall",
        emoji: "🍂",
        color: "#f47b20",
        colorLight: "#ffd200",
        ColorBorder: "#f79762",
        colorDark: "#f05133",
        description:
            "Introspective, grounded, and creative - you find meaning in the mundane. Fall's harvest energy fits you to a tee. You probably have strong opinions about the right fall aesthetiv and how to spend a cozy night in.",
        cardTagline: "Harvest, meaning, deep",
        cropts: ["🎃", "🍁", "🍄‍🟫"], 
    },

    winter: {
        id: "winter",
        name: "Winter",
        emoji: "❄️",
        color: "#a0e6ec",
        colorLight: "#ecfffd",
        colorBorder: "#d0eceb",
        colorDark: "#2febeeff",
        description:
            "Calm, focused, and driven - Winter suits you. You work best when the world slows down and you can take things at your own pace. Like Stardew winter you have a calm surface, but the more you open up the more there is to you",
        cardTagline: "Still, confident, driven",
        crops: ["❄️", "🐟", "🪨"]
    },

}


export const questions = [
    {
        id: "q1",
        text: "Pick a colour palette that feels the most you.",
        answers: [
            { emoji: "🌸", text: "Blush pinks and soft greens",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
            { emoji: "🌊", text: " Jewel tones and sandy yellows", 
            scores: { spring: 1, summer: 3, fall: 0, winter: 0}
            },
            { emoji: "🍁", text: "Rich reds and warm orange",
            scores: { spring: 0, summer: 0, fall: 3, winter: 0}
            },
            { emoji: "🐇", text: "Cool greys and rich blues",
            scores: {spring: 0, summer: 0, fall: 0, winter: 3}    
            },
        ]
    },
    {
        id: "q2",
        text: "Which aesthetic feels most like 'you'?",
        answers: [
            { emoji: "🍓", text: "Cottagecore",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
            { emoji: "🍋", text: "Clean girl", 
            scores: { spring: 1, summer: 3, fall: 0, winter: 0}
            },
            { emoji: "☕️", text: "Vintage",
            scores: { spring: 0, summer: 0, fall: 3, winter: 0}
            },
            { emoji: "🖤", text: "Office siren",
            scores: { spring: 0, summer: 0, fall: 0, winter: 3}
            },
        ]
    },
    {
        id: "q3",
        text: "What is your go-to drink order?",
        answers: [
            { emoji: "🫚", text: "Chai latte",
            scores: { spring: 0, summer:0, fall: 3, winter: 1}
            },
            { emoji: "🍪", text: "Mocha",
            scores: { spring: 0, summer: 0, fall: 1, winter: 3}
            },
            { emoji: "🍵", text: "Matcha Latte",
            scores: { spring: 3, summer: 0, fall: 1, winter: 0}
            },
            { emoji: "🍹", text: "Strawberry refresher",
            scores: { spring: 1, summer: 3, fall: 0, winter: 0}
            },
        ]
    },
    {
        id: "q4",
        text: "What do you do to recharge after a long week?",
        answers: [
            { emoji: "🪻", text: "Go on a hike",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
            { emoji: "🥂", text: "Go out with friends",
            scores: { spring: 0, summer: 3, fall: 0, winter: 0}
            },
            { emoji: "🍿", text: "Stay in and watch a show",
            scores: { spring: 0, summer: 0, fall: 1, winter: 3}
            },
            { emoji: "🎨", text: "Go thrifting or work on a hobby",
            scores: { spring: 0, summer: 0, fall: 3, winter: 0}
            },
        ]

    },
    {
        id: "q5",
        text: "People around you would describe you as _",
        answers: [
            { emoji: "🌻", text: "Warm and hopeful - you thrive on deep connections and love caring for people around you. ",
            scores: { spring: 1, summer: 0, fall: 3, winter: 0}
            },
            { emoji: "🪩", text: "Energetic and whimsical - you dream big and tend to go on random side quests.",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
            { emoji: "💌", text: "Thoughtful and caring - you are empathetic and reliable making you a natural listener.",
            scores: { spring: 1, summer: 4, fall: 0, winter: 0}
            },
            { emoji: "🧸", text: "Calm and reserved - you are independent and highly observant making you a peaceful presence in peoples lives.",
            scores: { spring: 0, summer: 0, fall: 0, winter: 4}
            },
        ]

    },
    {
        id: "q6",
        text: "What food would you big-back no matter what",
        answers: [
            { emoji: "🍟", text: "McDonalds kids meal",
            scores: { spring: 1, summer: 3, fall: 0, winter: 1}
            },
            { emoji: "🍜", text: "Ramen (package not restaurant)",
            scores: { spring: 0, summer: 0, fall: 1, winter: 3}
            },
            { emoji: "🥐", text: "Chocolate croissant",
            scores: { spring: 1, summer: 0, fall: 3, winter: 1}
            },
            { emoji: "🍷", text: "Girl dinner",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
        ]

    },
    {
        id: "q7",
        text: "What matters the most to you in a home?",
        answers: [
            { emoji: "🪟", text: "Lots of natural light",
            scores: { spring: 0, summer: 3, fall: 0, winter: 0}
            },
            { emoji: "💐", text: "A big garden or outdoor area",
            scores: { spring: 3, summer: 0, fall: 0, winter: 0}
            },
            { emoji: "🪵", text: "Cozy textures and a fireplace",
            scores: { spring: 0, summer: 0, fall: 3, winter: 2}
            },
            { emoji: "🧺", text: "Neat, monochromatic, and clutter-free",
            scores: { spring: 0, summer: 0, fall: 1, winter: 3}
            },
        ]

    },
    {
        id: "q8",
        text: "When you think of you at your best you are _",
        answers: [
            { emoji: "🪴", text: "Growing and starting fresh",
            scores: { spring: 3, summer: 1, fall: 0, winter: 0}
            },
            { emoji: "🔥", text: "Energetic and full of life",
            scores: { spring: 1, summer: 3, fall: 0, winter: 0}
            },
            { emoji: "🛋️", text: "Calm with a routine life ",
            scores: { spring: 0, summer: 0, fall: 3, winter: 1}
            },
            { emoji: "📈", text: "Focused and pursuing your goals",
            scores: { spring: 0, summer: 0, fall: 1, winter: 3}
            },
        ]

    },
]

export function calcResults(scores) {
    const total = Object.values(scores).reduce((a,b) => a + b, 0)
    const percentages = {}
    Object.entries(scores) .forEach(([key, value]) => {
        percentages[key] = total > 0 ? Math.round((value/total) * 100):0
    })

    const winner = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1])[0][0]
    
    return {winner, percentages}
}

