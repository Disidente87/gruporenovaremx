'use client'

import { AboutSection } from "@/components/about-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      {/* Back to Home Button */}
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 bg-white/20 backdrop-blur-sm text-brand"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
      
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
