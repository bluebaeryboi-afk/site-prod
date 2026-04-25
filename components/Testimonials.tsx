// components/Testimonials.tsx
const testimonials = [
//  {
//    name: 'Alex R.',
 //   handle: '@alexdev_rblx',
//    text: 'I had spaghetti code everywhere. After one session my DataStore architecture was completely refactored and I finally understand how to structure a real project. 10/10.',
//    game: 'Tower Defense Simulator Clone',
//    rating: 5,
//  },
  {
    name: 'Kieran M.',
    handle: '@RequiredModule',
    text: 'Went from 200 daily players to 80,000 in 3 weeks after implementing the tips. The ROI on this session was insane.',
    game: 'Roleplay City',
    rating: 5,
  },
  {
    name: 'Jordan T.',
    handle: '@jt_scripts',
    text: 'I was completely lost on monetization. Now I have a full gamepass system that converts at 4%. This paid for itself in the first week.',
    game: 'Obby Madness',
    rating: 5,
  },
  {
    name: 'Sam W.',
    handle: '@samdevelops',
    text: 'Super patient with beginners. I barely knew what a RemoteEvent was. By the end of our session I had a working inventory system. Mind blown.',
    game: 'Fantasy RPG',
    rating: 5,
  },
 // {
 //   name: 'Chris P.',
 //   handle: '@cpgamestudio',
  //  text: 'The game design advice alone was worth it. I had features players didn\'t care about and was missing the ones that drive retention. Total game changer.',
  //  game: 'Racing World',
  //  rating: 5,
 // },
  //{
 //   name: 'Riley M.',
  //  handle: '@rileymakesgames',
 //   text: 'Honest, no-BS feedback on my game. Told me exactly what wasn\'t working and why. Booked a second session the same day.',
 //   game: 'Simulator Game',
 //   rating: 5,
 // },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 bg-roblox-card/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-roblox-gold tracking-widest uppercase mb-4">
            // testimonials
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Devs Who Leveled Up
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-roblox-gold text-2xl">★</span>
            ))}
          </div>
          <p className="font-body text-white/40 text-sm">4.9 / 5 from 200+ sessions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-roblox-card border border-roblox-border rounded-2xl p-6 card-hover"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-roblox-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-white/70 leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-roblox-border">
                <div className="w-8 h-8 bg-roblox-muted rounded-full flex items-center justify-center text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-body font-medium text-sm text-white">{t.name}</div>
                  <div className="font-mono text-xs text-white/30">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
