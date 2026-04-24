// app/layout.tsx
import type { Metadata } from 'next'
import { Syne, Space_Mono, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'RobloxDev Coach — Level Up Your Game Dev Skills',
  description:
    'One-on-one coaching for Roblox game developers. Scripting, game design, monetization, and more. Book a 1-hour session today.',
  keywords: ['Roblox', 'game development', 'coaching', 'Lua', 'scripting', 'Roblox Studio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body className="bg-roblox-dark text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
