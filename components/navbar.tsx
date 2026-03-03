"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-strong py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-gold/30 transition-colors duration-300 group-hover:border-gold/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
          </div>
          <span className="font-serif text-lg tracking-[0.3em] text-champagne">
            CHRONOS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-champagne/60 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-gold/30 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-obsidian"
          >
            <span>Book Journey</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-champagne md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass-strong mt-4 border-t border-gold/10 px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-champagne/60 transition-colors duration-300 hover:text-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="mt-2 inline-flex items-center justify-center border border-gold/30 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
              onClick={() => setMobileOpen(false)}
            >
              Book Journey
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
