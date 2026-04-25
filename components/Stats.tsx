// components/Stats.tsx
export default function Stats() {
  const stats = [
    { value: '6+', label: 'Years in Game Dev', color: 'text-roblox-red' },
    { value: '$150M+', label: 'Robux Generated for Students', color: 'text-roblox-gold' },
    { value: '500K+', label: 'Peak Daily Players', color: 'text-roblox-neon' },
    { value: '48hr', label: 'Max Response Time', color: 'text-roblox-accent' },
  ]

  return (
    <section className="border-y border-roblox-border bg-roblox-card/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-display font-extrabold text-4xl md:text-5xl ${s.color}`}>
                {s.value}
              </div>
              <div className="font-body text-sm text-white/50 mt-2 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
