'use client'

import { Header } from "@/components/header"
import { VenderSection } from "@/components/vender-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function VenderPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VenderSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
