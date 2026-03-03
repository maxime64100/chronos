"use client"

import { useState } from "react"
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: {
    text: string
    value: "rome" | "tokyo" | "paris"
  }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of experience are you seeking?",
    options: [
      { text: "Cultural and artistic", value: "paris" },
      { text: "Futuristic and technological", value: "tokyo" },
      { text: "Historical and grand", value: "rome" },
    ],
  },
  {
    id: 2,
    question: "Which era fascinates you most?",
    options: [
      { text: "Ancient civilizations (27 BC)", value: "rome" },
      { text: "The distant future (2099)", value: "tokyo" },
      { text: "Renaissance period (1503)", value: "paris" },
    ],
  },
  {
    id: 3,
    question: "You prefer:",
    options: [
      { text: "Majestic ancient architecture", value: "rome" },
      { text: "Neon-lit futuristic cities", value: "tokyo" },
      { text: "Elegant artistic atmosphere", value: "paris" },
    ],
  },
  {
    id: 4,
    question: "Your ideal travel activity:",
    options: [
      { text: "Visit historic monuments and forums", value: "rome" },
      { text: "Experience advanced technology", value: "tokyo" },
      { text: "Explore art galleries and ateliers", value: "paris" },
    ],
  },
]

const destinationResults = {
  rome: {
    title: "Ancient Rome - The Eternal Empire",
    description:
      "You're destined for the grandeur of ancient Rome! Walk among senators, witness gladiatorial spectacles, and dine with emperors. The perfect journey for those who seek the majesty of classical civilization.",
    image: "🏛️",
    price: "From 2.4M Credits",
    duration: "7 days",
  },
  tokyo: {
    title: "Cyberpunk Tokyo - Neon Metropolis",
    description:
      "The future is calling you! You're an innovator at heart, ready to explore holographic skylines and synthetic consciousness. An extraordinary experience for tech enthusiasts and futurists.",
    image: "🌃",
    price: "From 3.1M Credits",
    duration: "5 days",
  },
  paris: {
    title: "Renaissance Paris - Age of Enlightenment",
    description:
      "The Renaissance awaits! You appreciate art, beauty, and creative genius. Commissioning portraits from masters and attending royal courts will be an unforgettable experience for your artistic soul.",
    image: "🎨",
    price: "From 1.8M Credits",
    duration: "6 days",
  },
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleAnswer = (value: string) => {
    setSelectedOption(value)
    setTimeout(() => {
      setAnswers([...answers, value])
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        calculateResult([...answers, value])
      }
    }, 400)
  }

  const calculateResult = (allAnswers: string[]) => {
    const counts = allAnswers.reduce(
      (acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )

    const winner = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    ) as "paris" | "cretace" | "florence"

    setTimeout(() => setShowResult(true), 300)
    return winner
  }

  const getResult = () => {
    const counts = answers.reduce(
      (acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    ) as "paris" | "cretace" | "florence"
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setSelectedOption(null)
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <section className="relative bg-charcoal py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
              Personnalisez votre voyage
            </span>
            <div className="h-px w-16 bg-gold/20" />
          </div>
          <h2 className="font-serif text-4xl text-champagne sm:text-5xl lg:text-6xl">
            Trouvez Votre Destination
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-champagne/40">
            Répondez à quelques questions et découvrez l'époque qui correspond
            parfaitement à vos aspirations temporelles.
          </p>
        </div>

        {/* Quiz Content */}
        <div className="relative overflow-hidden rounded-lg border border-gold/10 bg-obsidian p-8 shadow-2xl sm:p-12">
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs text-champagne/40">
                  <span>Question {currentQuestion + 1} sur {quizQuestions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-10">
                <h3 className="font-serif text-2xl text-champagne sm:text-3xl">
                  {quizQuestions[currentQuestion].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className={`group relative w-full overflow-hidden rounded-lg border p-6 text-left transition-all duration-300 ${
                      selectedOption === option.value
                        ? "border-gold bg-gold/10"
                        : "border-gold/15 bg-secondary/50 hover:border-gold/40 hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base text-champagne">
                        {option.text}
                      </span>
                      {selectedOption === option.value ? (
                        <CheckCircle2 className="h-5 w-5 text-gold" />
                      ) : (
                        <ArrowRight className="h-5 w-5 text-gold/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold/60" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Result */
            <div className="text-center">
              <div className="mb-8 inline-flex items-center justify-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <span className="text-xs tracking-[0.2em] uppercase text-gold">
                  Votre destination idéale
                </span>
              </div>

              <div className="mb-6 text-7xl">{destinationResults[getResult()].image}</div>

              <h3 className="mb-4 font-serif text-3xl text-champagne sm:text-4xl">
                {destinationResults[getResult()].title}
              </h3>

              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-champagne/60">
                {destinationResults[getResult()].description}
              </p>

              <div className="mb-8 flex items-center justify-center gap-8 text-sm text-champagne/40">
                <div>
                  <span className="block font-medium text-gold">
                    {destinationResults[getResult()].price}
                  </span>
                </div>
                <div className="h-4 w-px bg-gold/20" />
                <div>
                  <span className="block">
                    {destinationResults[getResult()].duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 bg-gold px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase text-obsidian transition-all duration-300 hover:bg-gold-light"
                >
                  Explorer cette destination
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 border border-gold/30 px-8 py-3 text-xs tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
                >
                  Refaire le quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
