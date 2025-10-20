'use client'

import { Header } from "@/components/header"
import { LandingSection } from "@/components/landing-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingWhatsApp />
      <Header />
      <LandingSection />
      <Footer />
    </main>
  )
}
