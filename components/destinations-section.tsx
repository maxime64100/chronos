"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"

const destinations = [
  {
    id: "rome",
    era: "27 BC",
    title: "Ancient Rome",
    subtitle: "The Eternal Empire",
    description:
      "Walk among senators in the Forum. Witness gladiatorial spectacles. Dine with emperors in palatial villas on the seven hills.",
    image: "/images/ancient-rome.jpg",
    duration: "7 Days",
    location: "Roman Empire",
    price: "From 2.4M Credits",
  },
  {
    id: "tokyo",
    era: "2099",
    title: "Cyberpunk Tokyo",
    subtitle: "Neon Metropolis",
    description:
      "Soar through holographic skylines. Experience synthetic consciousness. Immerse in the night markets of Neo-Shibuya.",
    image: "/images/cyberpunk-tokyo.jpg",
    duration: "5 Days",
    location: "Neo-Japan",
    price: "From 3.1M Credits",
  },
  {
    id: "paris",
    era: "1503",
    title: "Renaissance Paris",
    subtitle: "The Age of Enlightenment",
    description:
      "Commission a portrait from the masters. Attend royal courts. Witness the birth of modern art in candlelit ateliers.",
    image: "/images/renaissance-paris.jpg",
    duration: "6 Days",
    location: "Kingdom of France",
    price: "From 1.8M Credits",
  },
]

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  const destinationSlug = destination.id === "rome" ? "ancient-rome" :
                          destination.id === "tokyo" ? "cyberpunk-tokyo" :
                          "renaissance-paris"

  return (
    <Link href={`/destinations/${destinationSlug}`}>
      <article
        className="group relative flex h-[540px] flex-col overflow-hidden rounded-lg transition-all duration-700 cursor-pointer"
        style={{
          animationDelay: `${index * 150}ms`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={destination.image}
          alt={`${destination.title} - ${destination.subtitle}`}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? "scale-105 brightness-50" : "scale-100 brightness-[0.35]"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 glass opacity-60" />

      {/* Top section */}
      <div className="relative z-10 flex items-start justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-gold animate-pulse-gold" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80">
            {destination.era}
          </span>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 transition-all duration-500 ${
            isHovered ? "bg-gold border-gold" : "bg-transparent"
          }`}
        >
          <ArrowUpRight
            className={`h-4 w-4 transition-all duration-500 ${
              isHovered ? "text-obsidian" : "text-gold/60"
            }`}
          />
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto p-6">
        <h3 className="font-serif text-3xl text-champagne text-balance">
          {destination.title}
        </h3>
        <p className="mt-1 text-xs tracking-[0.15em] uppercase text-gold/70">
          {destination.subtitle}
        </p>

        {/* Expanding description */}
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isHovered ? "mt-4 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm leading-relaxed text-champagne/50">
            {destination.description}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-gold/50" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-champagne/40">
                {destination.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gold/50" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-champagne/40">
                {destination.location}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gold/10 pt-4">
            <span className="text-xs tracking-wider text-gold">
              {destination.price}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-champagne/30 group-hover:text-gold transition-colors duration-300">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  )
}

export function DestinationsSection() {
  return (
    <section id="destinations" className="relative bg-obsidian py-32">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
              Curated Experiences
            </span>
            <div className="h-px w-16 bg-gold/20" />
          </div>
          <h2 className="font-serif text-4xl text-champagne sm:text-5xl lg:text-6xl text-balance">
            Select Your Era
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-champagne/40">
            Three meticulously crafted temporal journeys, each offering
            an unparalleled immersion into history&apos;s most captivating epochs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, i) => (
            <DestinationCard key={destination.id} destination={destination} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
