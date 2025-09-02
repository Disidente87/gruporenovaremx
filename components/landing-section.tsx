'use client'

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function LandingSection() {
  return (
    <section id="landing" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 pt-24 mb-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Transformamos tu situación
                <span className="text-primary block">en una oportunidad</span>
                <span className="text-secondary">de crecimiento</span>
              </h1>
              <p className="text-lg text-muted-foreground text-elegant max-w-lg mx-auto">
                Te ayudamos a encontrar la mejor solución para tu propiedad.
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ya sea que busques comprar una nueva propiedad o vender la que tienes, 
                nuestro equipo de expertos te guiará con soluciones personalizadas y 
                un proceso transparente que te dará la tranquilidad que necesitas.
              </p>
              <p className="text-lg text-muted-foreground font-medium">
                ¿Qué necesitas hacer hoy?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  onClick={() => {
                    window.location.href = '/comprar'
                  }}
                  className="bg-primary hover:bg-primary/90 text-white font-medium"
                >
                  Quiero comprar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => {
                    window.location.href = '/vender'
                  }}
                  className="bg-primary hover:bg-primary/90 text-white font-medium"
                >
                  Quiero vender
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
