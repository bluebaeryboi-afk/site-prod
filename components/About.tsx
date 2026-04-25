// components/About.tsx

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-roblox-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-border to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-roblox-red/20 rounded-3xl blur-2xl scale-110" />

              {/* Avatar placeholder — replace src with your image */}
              <div className="relative w-72 h-72 bg-roblox-muted rounded-3xl border border-roblox-border overflow-hidden flex items-center justify-center">
                {/* Replace this div with: <Image src="/your-photo.jpg" alt="Your Name" fill className="object-cover" /> */}
                <div className="text-center">
                  <div className="text-6xl mb-3">👾</div>
                  <div className="font-mono text-xs text-white/30">YOUR PHOTO HERE</div>
                </div>

                {/* Scanlines overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-roblox-dark/50 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-roblox-red rounded-2xl px-4 py-3 glow-red">
                <div className="font-display font-bold text-xl leading-none">5+</div>
                <div className="font-body text-xs text-white/80 mt-0.5">Years Dev</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="font-mono text-xs text-roblox-neon tracking-widest uppercase mb-4">
              // about me
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Built games.<br />
              <span className="text-white/30">Learned hard lessons.</span><br />
              Now teaching you.
            </h2>
            <div className="space-y-4 font-body text-white/60 leading-relaxed">
              <p>
                I&apos;ve been building on Roblox since 2024. In that time I&apos;ve shipped over 50 games,
                reached 8000 peak CCU, and generated over 100M Robux from my work.
              </p>
              <p>
                I&apos;ve made every mistake in the book — spaghetti code that crashed at 100 players,
                games that launched to crickets, monetization that fell flat. I fixed all of it,
                and now I teach developers how to skip all the painful parts.
              </p>
              <p>
                My approach is hands-on and practical. We screen-share, we code together,
                we review your actual game. I even share the code I use in my games that are
                hitting thousands of concurrent users every day.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                'Roblox Studio Expertise',
                'Plug & Play Code Modules',
                'Game Architecture',
                'Monetization Strategy',
                'Game Design',
                'Published 50+ Games',
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-2 font-body text-sm text-white/60">
                  <span className="text-roblox-neon text-glow-neon">✓</span>
                  {cred}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://tally.so/r/kd0A2Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-roblox-border hover:border-roblox-red/50 text-white font-body font-medium px-6 py-3 rounded-xl transition-all duration-200"
              >
                Let&apos;s build something together
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
