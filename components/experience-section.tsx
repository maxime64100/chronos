"use client"

import { Zap, Shield, Compass } from "lucide-react"

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Choose Your Era",
    description:
      "Select from our curated collection of temporal destinations, each verified by our chrono-historians for safety and authenticity.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Temporal Calibration",
    description:
      "Our quantum engineers calibrate your personal temporal field, ensuring a seamless transition across the space-time continuum.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Begin Your Journey",
    description:
      "Step through the chronometric gateway and immerse yourself in a fully realized historical experience unlike anything else.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-charcoal py-32">
      {/* Top border accent */}
      <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
              The Process
            </span>
            <div className="h-px w-16 bg-gold/20" />
          </div>
          <h2 className="font-serif text-4xl text-champagne sm:text-5xl lg:text-6xl text-balance">
            How It Works
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-champagne/40">
            A three-phase journey from consultation to temporal immersion,
            guided by the finest chrono-engineers in existence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-px md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative p-10 transition-all duration-500 hover:bg-obsidian/50"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gold/10 md:block" />
              )}

              <div className="relative">
                {/* Number */}
                <span className="font-serif text-6xl text-gold/10 transition-colors duration-500 group-hover:text-gold/20">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mt-6 flex h-12 w-12 items-center justify-center border border-gold/15 transition-all duration-500 group-hover:border-gold/40">
                  <step.icon className="h-5 w-5 text-gold/50 transition-colors duration-500 group-hover:text-gold" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-serif text-xl text-champagne">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne/40">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
