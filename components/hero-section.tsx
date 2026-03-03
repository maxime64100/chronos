import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-paris.jpg"
          alt="Cinematic aerial view of Paris at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Dark overlays for readability and mood */}
      <div className="absolute inset-0 z-[1] bg-obsidian/60" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-2/5 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 z-[2] h-1/4 bg-gradient-to-b from-obsidian/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Overline */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gold/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80 font-sans">
            Established 2847
          </span>
          <div className="h-px w-12 bg-gold/40" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-champagne sm:text-7xl lg:text-8xl">
          <span className="block text-balance">Travel Beyond</span>
          <span className="block mt-2 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent animate-shimmer">
            Time Itself
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-champagne/50 font-sans sm:text-lg">
          Experience the extraordinary. Journey through the ages with
          the world&apos;s most exclusive temporal travel agency.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="#destinations"
            className="group relative inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase text-obsidian transition-all duration-500 hover:bg-gold-light"
          >
            <span>Explore Destinations</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 border border-champagne/10 px-10 py-4 text-xs tracking-[0.2em] uppercase text-champagne/70 transition-all duration-500 hover:border-gold/30 hover:text-gold"
          >
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 animate-float">
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold/40">
            Scroll to Discover
          </span>
          <ChevronDown className="h-4 w-4 text-gold/40" />
        </div>
      </div>
    </section>
  )
}
