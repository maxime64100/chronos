import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Shield, Calendar, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AncientRomePage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ancient-rome.jpg"
            alt="Ancient Rome"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-obsidian/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Link href="/#destinations" className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Destinations
          </Link>
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">27 BC</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-champagne mb-4">
            Ancient Rome
          </h1>
          <p className="text-xl text-champagne/60 mb-8">
            The Eternal Empire
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-champagne/50">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold/70" />
              <span>7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold/70" />
              <span>Roman Empire</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold/70" />
              <span>27 BC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-champagne mb-6">
                Experience the Grandeur
              </h2>
              <p className="text-champagne/60 leading-relaxed mb-4">
                Walk among senators in the Forum. Witness gladiatorial spectacles in the magnificent Colosseum.
                Dine with emperors in palatial villas on the seven hills of Rome.
              </p>
              <p className="text-champagne/60 leading-relaxed">
                This immersive 7-day journey transports you to the height of Roman power, where marble monuments
                gleam under the Mediterranean sun and the greatest empire in history reaches its zenith.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Safety Certified</h3>
                    <p className="text-sm text-champagne/50">
                      Full temporal shielding and paradox prevention protocols active
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Expert Guides</h3>
                    <p className="text-sm text-champagne/50">
                      Classical historians and Latin translators accompany you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-4xl text-champagne text-center mb-12">
            What You'll Experience
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl">🏛️</div>
              <h3 className="font-serif text-xl text-champagne mb-3">The Forum</h3>
              <p className="text-sm text-champagne/50">
                Walk the marble streets where senators debated and history was made
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">⚔️</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Gladiatorial Games</h3>
              <p className="text-sm text-champagne/50">
                Witness the spectacle of the Colosseum in its full glory
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">🍇</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Imperial Banquets</h3>
              <p className="text-sm text-champagne/50">
                Dine with patricians and experience Roman cuisine at its finest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-4xl text-champagne text-center mb-12">
            7-Day Itinerary
          </h2>
          <div className="space-y-6">
            {[
              { day: 1, title: "Arrival & Orientation", desc: "Temporal calibration, wardrobe fitting, Latin language neural adaptation" },
              { day: 2, title: "The Forum Romanum", desc: "Tour of the political heart of the empire, meet senators and orators" },
              { day: 3, title: "Palatine Hill", desc: "Visit imperial palaces, attend an audience with the Emperor" },
              { day: 4, title: "Colosseum Spectacle", desc: "Witness gladiatorial games from the imperial box" },
              { day: 5, title: "Baths & Culture", desc: "Experience Roman bathing culture, visit libraries and temples" },
              { day: 6, title: "Via Appia", desc: "Journey along the ancient road, visit countryside villas" },
              { day: 7, title: "Departure Banquet", desc: "Farewell feast with new Roman friends, temporal return" },
            ].map((item) => (
              <div key={item.day} className="glass p-6 rounded-lg flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <span className="font-serif text-lg text-gold">{item.day}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-champagne font-medium mb-2">Day {item.day}: {item.title}</h3>
                  <p className="text-sm text-champagne/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-2">
            <span className="text-xs tracking-[0.2em] uppercase text-gold">Premium Package</span>
          </div>
          <h2 className="font-serif text-4xl text-champagne mb-4">
            From 2.4M Temporal Credits
          </h2>
          <p className="text-champagne/50 mb-8 max-w-xl mx-auto">
            Includes full temporal immersion, period-authentic wardrobe, neural language adaptation,
            and 24/7 chrono-concierge support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-gold px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase text-obsidian transition-all duration-300 hover:bg-gold-light"
            >
              Reserve Your Journey
            </a>
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 border border-gold/30 px-10 py-4 text-xs tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
