'use client'

import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Back to Home Button */}
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
      
      <ServicesSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
