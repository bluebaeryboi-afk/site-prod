'use client'
// components/FAQ.tsx
import { useState } from 'react'

const faqs = [
  {
    q: 'What level of experience do I need?',
    a: 'Any level! I work with complete beginners all the way to developers with existing games who want to optimize. Just tell me where you are at in the application form.',
  },
  {
    q: 'What platform do we use for the session?',
    a: 'Discord screen-share is preferred — most Roblox devs already have it and the quality is great. Zoom is also fine. You\'ll get a link in your confirmation email.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'No problem — just reschedule at least 24 hours before your session and I\'ll find you a new time.',
  },
  {
    q: 'Do I get access to your code?',
    a: 'Yes, eligable students can gain full access to my library of proven game code.',
  },
  {
    q: 'Can I book multiple sessions?',
    a: 'Yes, the first onboarding call is used to make sure we\'re a match for ongoing mentorship (weekly sessions)',
  },
  {
    q: 'What\'s the 15-minute discovery call?',
    a: 'I offer a free 15-minute call to understand your goals, your current project, and make sure we\'re a good fit.',
  },
  {
    q: 'Do you write code for me, or teach me?',
    a: 'Both, depending on what you need. Sometimes we\'ll pair-program live. Sometimes I\'ll review your code and explain improvements. You can drive the agenda.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-roblox-accent tracking-widest uppercase mb-4">
            // faq
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white">
            Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-roblox-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? 'border-roblox-red/50' : 'border-roblox-border'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-body font-medium text-white">{faq.q}</span>
                <span
                  className={`text-roblox-red flex-shrink-0 transition-transform duration-200 text-xl ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-body text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
