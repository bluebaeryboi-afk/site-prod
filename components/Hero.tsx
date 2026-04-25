// components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-roblox-red/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-roblox-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-roblox-neon/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-roblox-card border border-roblox-border rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-roblox-neon rounded-full animate-pulse" />
          <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
            Now Accepting Applications
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-none tracking-tight mb-6">
          <span className="block text-white">Build Games</span>
          <span className="block shimmer-text">People Love.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {/* 1-on-1 coaching for Roblox developers.*/}
          Work with a proven Roblox developer. Whether you&apos;re just starting with Lua or
          trying to scale to 100K daily players — I&apos;ll help you get there faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://tally.so/r/kd0A2Z"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-roblox-red hover:bg-roblox-red/90 text-white font-body font-medium text-base px-8 py-4 rounded-xl transition-all duration-200 glow-red w-full sm:w-auto"
          >
            <span className="relative z-10">Apply Now — {process.env.NEXT_PUBLIC_SESSION_PRICE_DISPLAY ?? '$75'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-roblox-red to-roblox-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a
            href="#learn"
            className="font-body text-white/60 hover:text-white text-base flex items-center gap-2 transition-colors"
          >
            Learn more
            <span className="text-xl">↓</span>
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
          {[
            { value: '150M+', label: 'Robux Earned' },
            { value: '50+', label: 'Games Shipped' },
            { value: '100M+', label: 'Game Visits' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              <div className="font-body text-xs text-white/40 mt-0.5 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating pixel blocks — decorative */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-roblox-red/60 rounded-sm animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-3 h-3 bg-roblox-gold/60 rounded-sm animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 left-16 w-5 h-5 bg-roblox-neon/40 rounded-sm animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 left-40 w-3 h-3 bg-roblox-accent/60 rounded-sm animate-float" style={{ animationDelay: '0.8s' }} />
    </section>
  )
}
