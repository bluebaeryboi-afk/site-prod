// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-roblox-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-roblox-red rounded flex items-center justify-center">
              <span className="font-display font-bold text-xs">R</span>
            </div>
            <span className="font-display font-bold text-base tracking-tight">
              DevCoach<span className="text-roblox-red">.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-body text-sm text-white/40">
            <a href="#learn" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:you@example.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <a
            href="https://tally.so/r/kd0A2Z"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-roblox-red/10 hover:bg-roblox-red/20 border border-roblox-red/30 text-roblox-red font-body text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            Book a Session →
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-roblox-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} DevCoach. Not affiliated with Roblox Corporation.
          </p>
          <p className="font-mono text-xs text-white/20">
            Bookings via Tally
          </p>
        </div>
      </div>
    </footer>
  )
}
