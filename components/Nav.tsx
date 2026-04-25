'use client'
// components/Nav.tsx
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-roblox-dark/90 backdrop-blur-md border-b border-roblox-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-roblox-red rounded flex items-center justify-center glow-red">
            <span className="font-display font-bold text-sm">B</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Blue Baery<span className="text-roblox-red">.</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-white/60">
          <a href="#learn" className="hover:text-white transition-colors">What You&apos;ll Learn</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <a
          href="https://cal.com/bluebaery/60min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-roblox-red hover:bg-roblox-red/90 text-white font-body font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-200 glow-red"
        >
          Book a Session
        </a>
      </div>
    </nav>
  )
}
