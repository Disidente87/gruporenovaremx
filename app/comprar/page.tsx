'use client'

import { Header } from "@/components/header"
import { ComprarSection } from "@/components/comprar-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function ComprarPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <ComprarSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
