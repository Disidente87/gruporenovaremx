'use client'

import { Header } from "@/components/header"
import { HeroSection } from "@/components/vender-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
