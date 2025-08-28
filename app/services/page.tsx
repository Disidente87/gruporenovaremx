'use client'

import { ServicesSection } from "@/components/services-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Back to Home Button */}
      <div className="pt-24 pb-8">
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
    </main>
  )
}
