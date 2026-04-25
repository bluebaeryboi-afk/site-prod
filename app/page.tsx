// app/page.tsx
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhatYouLearn from '@/components/WhatYouLearn'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <WhatYouLearn />
      <Stats />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
