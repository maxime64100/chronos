import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { QuizSection } from "@/components/quiz-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <QuizSection />
      <ExperienceSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
