// components/Pricing.tsx

const price = process.env.NEXT_PUBLIC_SESSION_PRICE_DISPLAY ?? '$75'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-roblox-red/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-roblox-red tracking-widest uppercase mb-4">
            // pricing
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Simple. Transparent.
          </h2>
          <p className="font-body text-white/50">No subscriptions. No surprises. Pay per session.</p>
        </div>

        {/* Main pricing card */}
        <div className="relative bg-roblox-card border border-roblox-border rounded-3xl overflow-hidden">
          {/* Top accent line */}
          <div className="h-1 bg-gradient-to-r from-roblox-red via-roblox-accent to-roblox-gold" />

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left: Price */}
              <div>
                <div className="font-mono text-sm text-white/40 uppercase tracking-wider mb-2">
                  1-Hour Session
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className="font-display font-extrabold text-7xl text-white leading-none">
                    {price}
                  </span>
                  <span className="font-body text-white/40 mb-3">USD</span>
                </div>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                  One focused hour with a real developer. Paid securely upfront via Stripe.
                  Rescheduling available up to 24 hours before your session.
                </p>
                <a
                  href="https://tally.so/r/kd0A2Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-roblox-red hover:bg-roblox-red/90 text-white font-body font-medium text-base px-8 py-4 rounded-xl transition-all duration-200 glow-red"
                >
                  Book Now — {price}
                </a>
                <p className="font-mono text-xs text-white/30 text-center mt-3">
                  Takes 2 minutes · Powered by Tally
                </p>
              </div>

              {/* Right: What's included */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-roblox-neon uppercase tracking-wider mb-5">
                  What&apos;s included
                </div>
                {[
                  { icon: '🎯', text: 'Custom agenda — you set the topic' },
                  { icon: '🖥️', text: 'Live screen-share via Discord/Zoom' },
                  { icon: '📝', text: 'Written session notes sent afterwards' },
                  { icon: '💬', text: '24hr follow-up Q&A via Discord' },
                  { icon: '🔁', text: 'Easy rescheduling (24hr notice)' },
                  { icon: '🎁', text: 'Free 15-min discovery call first' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <span className="font-body text-sm text-white/60">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bundle hint */}
        <div className="mt-6 text-center">
          <p className="font-body text-sm text-white/40">
            Looking for ongoing mentorship?{' '}
            <a href="mailto:you@example.com" className="text-roblox-accent hover:text-white transition-colors underline">
              Contact me about bundles →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
