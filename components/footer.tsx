export function Footer() {
  return (
    <footer id="about" className="relative border-t border-gold/10 bg-obsidian py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-gold/30" />
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
              </div>
              <span className="font-serif text-lg tracking-[0.3em] text-champagne">
                CHRONOS
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-champagne/30">
              The world&apos;s most exclusive temporal travel agency.
              Traversing timelines since 2847. Licensed by the
              Intergalactic Temporal Authority.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
              Company
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {["About", "Careers", "Press", "Safety"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-champagne/30 transition-colors duration-300 hover:text-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
              Legal
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {["Privacy", "Terms", "Temporal Accords", "Insurance"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-champagne/30 transition-colors duration-300 hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/5 pt-8 md:flex-row">
          <span className="text-[10px] tracking-[0.15em] uppercase text-champagne/20">
            &copy; 2847 Chronos Temporal Corp. All timelines reserved.
          </span>
          <div className="flex gap-6">
            {["Temporal Status", "System Health", "API"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] tracking-[0.15em] uppercase text-champagne/20 transition-colors duration-300 hover:text-gold/60"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
