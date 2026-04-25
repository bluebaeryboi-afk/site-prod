// components/WhatYouLearn.tsx
const topics = [
  {
    icon: '⚡',
    title: 'Lua Scripting',
    desc: 'Master the fundamentals of Lua and Roblox-specific APIs. Write clean, performant, bug-free code from the start.',
    tags: ['Variables', 'Functions', 'OOP', 'Remote Events'],
    color: 'border-roblox-red/30 hover:border-roblox-red/60',
    glow: 'roblox-red',
  },
  {
    icon: '🎮',
    title: 'Game Design',
    desc: 'Design compelling game loops, retention mechanics, and progression systems that keep players coming back.',
    tags: ['Core Loop', 'Retention', 'UX', 'Balancing'],
    color: 'border-roblox-gold/30 hover:border-roblox-gold/60',
    glow: 'roblox-gold',
  },
  {
    icon: '💰',
    title: 'Monetization',
    desc: 'Implement ethical Robux monetization that converts well. Gamepasses, developer products, and subscription models.',
    tags: ['Gamepasses', 'Dev Products', 'VIP', 'Merch'],
    color: 'border-roblox-neon/30 hover:border-roblox-neon/60',
    glow: 'roblox-neon',
  },
  {
    icon: '🚀',
    title: 'Growth & Publishing',
    desc: 'Get discovered. Learn how to launch, optimize discoverability, and turn a new game into a trending title.',
    tags: ['SEO', 'Launch Strategy', 'Thumbnails', 'Ads'],
    color: 'border-roblox-accent/30 hover:border-roblox-accent/60',
    glow: 'roblox-accent',
  },
  {
    icon: '🏗️',
    title: 'Architecture',
    desc: 'Structure your codebase for scale. Module scripts, services, data stores — build games that don\'t break at 1000 players.',
    tags: ['DataStore', 'Modules', 'Services', 'Profiling'],
    color: 'border-purple-500/30 hover:border-purple-500/60',
    glow: 'purple-500',
  },
  {
    icon: '🎨',
    title: 'Building & UI',
    desc: 'Create polished environments and slick GUIs. From terrain sculpting to custom HUD design with Tween animations.',
    tags: ['Terrain', 'Unions', 'GUI', 'Tweens'],
    color: 'border-blue-500/30 hover:border-blue-500/60',
    glow: 'blue-500',
  },
]

export default function WhatYouLearn() {
  return (
    <section id="learn" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-red/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-xs text-roblox-red tracking-widest uppercase mb-4">
            // curriculum
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Everything You Need<br />
            <span className="text-white/30">to Succeed</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Every session is tailored to you. Pick what matters most or let me build a custom roadmap.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className={`bg-roblox-card border ${topic.color} rounded-2xl p-6 transition-all duration-300 card-hover cursor-default`}
            >
              <div className="text-3xl mb-4">{topic.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{topic.title}</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed mb-4">{topic.desc}</p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-white/5 border border-white/10 rounded px-2 py-1 text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
