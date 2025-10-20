'use client'

import { Button } from "./ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function ComprarSection() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [dynamicPadding, setDynamicPadding] = useState('pb-4')

  useEffect(() => {
    const adjustPadding = () => {
      if (contentRef.current) {
        const titleElement = contentRef.current.querySelector('h1')
        if (titleElement) {
          const titleHeight = titleElement.offsetHeight
          const titleLines = Math.ceil(titleHeight / parseFloat(getComputedStyle(titleElement).lineHeight))
          
          // Ajustar padding basado en el número de líneas del título
          if (titleLines <= 1) {
            setDynamicPadding('pb-2')
          } else if (titleLines <= 2) {
            setDynamicPadding('pb-4')
          } else if (titleLines <= 3) {
            setDynamicPadding('pb-6')
          } else {
            setDynamicPadding('pb-8')
          }
        }
      }
    }

    adjustPadding()
    window.addEventListener('resize', adjustPadding)
    return () => window.removeEventListener('resize', adjustPadding)
  }, [])

  return (
    <div>
      {/* Back to Home Button */}
      <div className={`pt-24 ${dynamicPadding}`}>
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 bg-white/20 backdrop-blur-sm"
              style={{color: '#206b68'}}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
      
      <section id="comprar" className="min-h-screen flex items-center -mb-16 -mt-32" ref={contentRef}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Encontramos la propiedad perfecta
              </h1>
              <p className="text-lg text-muted-foreground text-elegant max-w-lg mx-auto">
                Contamos con inmuebles en las zonas de mayor crecimiento económico y plusvalía de Tijuana y Tecate
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Te ayudamos a encontrar la propiedad ideal que se adapte a tus necesidades y presupuesto. 
                Nuestro equipo de expertos te guiará en todo el proceso de compra con transparencia y confianza.
              </p>
              <p className="text-lg text-muted-foreground font-medium">
                Contáctanos. Consultoría Gratuita.
              </p>
              <Button 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent('Hola, quiero consultoria para comprar una casa')
                  window.open(`https://wa.me/+526643306976?text=${message}`, '_blank')
                }}
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Quiero comprar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}
