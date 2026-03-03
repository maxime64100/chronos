import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Shield, Calendar, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CyberpunkTokyoPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cyberpunk-tokyo.jpg"
            alt="Cyberpunk Tokyo"
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
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">2099</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-champagne mb-4">
            Cyberpunk Tokyo
          </h1>
          <p className="text-xl text-champagne/60 mb-8">
            Neon Metropolis
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-champagne/50">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold/70" />
              <span>5 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold/70" />
              <span>Neo-Japan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gold/70" />
              <span>2099 CE</span>
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
                Into the Neon Future
              </h2>
              <p className="text-champagne/60 leading-relaxed mb-4">
                Soar through holographic skylines where neon rivers flow between megastructures.
                Experience synthetic consciousness and the bleeding edge of human-AI integration.
              </p>
              <p className="text-champagne/60 leading-relaxed">
                This electrifying 5-day odyssey plunges you into Neo-Shibuya's pulsing night markets,
                where technology and humanity merge in ways that redefine what it means to be alive.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Neural Protection</h3>
                    <p className="text-sm text-champagne/50">
                      Advanced cybersecurity shielding and consciousness backup protocols
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-champagne font-medium mb-2">Neural Adapters</h3>
                    <p className="text-sm text-champagne/50">
                      Temporary cybernetic enhancements for full immersion experience
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
              <div className="mb-4 text-5xl">🌃</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Holographic Skylines</h3>
              <p className="text-sm text-champagne/50">
                Soar through neon-lit megastructures in anti-grav vehicles
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">🤖</div>
              <h3 className="font-serif text-xl text-champagne mb-3">AI Consciousness</h3>
              <p className="text-sm text-champagne/50">
                Interface with synthetic beings and explore digital realms
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">🎮</div>
              <h3 className="font-serif text-xl text-champagne mb-3">Neo-Shibuya Markets</h3>
              <p className="text-sm text-champagne/50">
                Immerse yourself in the neon-drenched night markets of the future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-4xl text-champagne text-center mb-12">
            5-Day Itinerary
          </h2>
          <div className="space-y-6">
            {[
              { day: 1, title: "Neural Calibration", desc: "Temporal arrival, cybernetic interface installation, city orientation" },
              { day: 2, title: "Skyline Tour", desc: "Anti-grav vehicle flight through holographic districts, AR layer exploration" },
              { day: 3, title: "Digital Immersion", desc: "Dive into synthetic consciousness realms, AI entity interactions" },
              { day: 4, title: "Neo-Shibuya Nights", desc: "Experience legendary night markets, underground tech bazaars" },
              { day: 5, title: "Future Tech Expo", desc: "Visit innovation centers, temporal departure sequence" },
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
            <span className="text-xs tracking-[0.2em] uppercase text-gold">Elite Package</span>
          </div>
          <h2 className="font-serif text-4xl text-champagne mb-4">
            From 3.1M Temporal Credits
          </h2>
          <p className="text-champagne/50 mb-8 max-w-xl mx-auto">
            Includes neural interface installation, anti-grav access passes, digital realm credentials,
            and full cybersecurity suite.
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
