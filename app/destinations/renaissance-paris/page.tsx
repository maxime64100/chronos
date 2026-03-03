import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Shield, Calendar, Palette } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function RenaissanceParisPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/renaissance-paris.jpg"
            alt="Renaissance Paris"
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
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">1503</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-champagne mb-4">
            Renaissance Paris
          </h1>
          <p className="text-xl text-champagne/60 mb-8">
            The Age of Enlightenment
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-champagne/50">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold/70" />
              <span>6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold/70" />
              <span>Kingdom of France</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold/70" />
              <span>1503 CE</span>
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
                The Birth of Modern Art
              </h2>
              <p className="text-champagne/60 leading-relaxed mb-4">
                Commission a portrait from the masters. Attend royal courts where culture and power intertwine.
                Witness the birth of modern art in candlelit ateliers as genius takes form.
              </p>
              <p className="text-champagne/60 leading-relaxed">
                This refined 6-day immersion transports you to the heart of the French Renaissance,
                where art, philosophy, and humanism flourish in an explosion of creative brilliance.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Cultural Integration</h3>
                    <p className="text-sm text-champagne/50">
                      Period etiquette training and authentic Renaissance wardrobe
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Palette className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Artistic Access</h3>
                    <p className="text-sm text-champagne/50">
                      Exclusive entry to master ateliers and royal collection viewings
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
              <div className="mb-4 text-5xl">🎨</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Master Ateliers</h3>
              <p className="text-sm text-champagne/50">
                Visit the workshops of legendary artists and commission your own portrait
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">👑</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Royal Courts</h3>
              <p className="text-sm text-champagne/50">
                Attend gatherings at the palace and witness political intrigue
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">📚</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Philosophical Salons</h3>
              <p className="text-sm text-champagne/50">
                Engage with humanist thinkers and witness ideas that shaped the modern world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-4xl text-champagne text-center mb-12">
            6-Day Itinerary
          </h2>
          <div className="space-y-6">
            {[
              { day: 1, title: "Arrival & Court Presentation", desc: "Temporal arrival, wardrobe fitting, introduction to court etiquette" },
              { day: 2, title: "Master Ateliers", desc: "Visit painting workshops, commission your Renaissance portrait" },
              { day: 3, title: "Royal Palace", desc: "Tour palace galleries, attend royal audience and evening banquet" },
              { day: 4, title: "Artistic Quarter", desc: "Explore artist communities, witness creative process in studios" },
              { day: 5, title: "Philosophical Salon", desc: "Attend gatherings of humanist thinkers and poets" },
              { day: 6, title: "Grand Finale", desc: "Receive completed portrait, farewell court celebration, temporal return" },
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
            <span className="text-xs tracking-[0.2em] uppercase text-gold">Cultural Package</span>
          </div>
          <h2 className="font-serif text-4xl text-champagne mb-4">
            From 1.8M Temporal Credits
          </h2>
          <p className="text-champagne/50 mb-8 max-w-xl mx-auto">
            Includes period wardrobe, atelier access, court introductions, commissioned portrait,
            and full Renaissance cultural immersion.
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
