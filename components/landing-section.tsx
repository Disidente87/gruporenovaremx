'use client'

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function LandingSection() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        id="presentation" 
        className="relative flex items-center justify-center overflow-hidden dynamic-height pt-16" 
        style={{
          height: 'calc(100vw * 0.80)',
          minHeight: '220px',
          maxHeight: '270px'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center" style={{top: '0'}}>
          <Image
            src="/bckg-title.jpg"
            alt="Background"
            width={1200}
            height={800}
            className="object-contain lg:object-cover object-center w-full h-auto lg:h-full lg:w-full"
            priority
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-center space-x-3 mb-2 flex-wrap">
            <Image
              src="/logo.svg"
              alt="GrupoRenovareMX Logo"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand">
              Grupo Renovare MX
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-700 font-medium">
            Expertos en Bienes Raíces en Baja California
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="landing" className="min-h-screen flex items-center mb-4 -mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Content */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                  Transformamos tu situación
                  <span className="text-primary block">en una oportunidad</span>
                  <span className="text-secondary text-brand">de crecimiento</span>
                </h1>
              <p className="text-lg text-foreground text-elegant max-w-lg mx-auto">
                Te ayudamos a encontrar la mejor solución para tu propiedad.
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-foreground font-medium">
                ¿Qué necesitas hacer hoy?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  onClick={() => {
                    window.location.href = '/comprar'
                  }}
                  className="btn-brand font-medium"
                >
                  Quiero comprar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => {
                    window.location.href = '/vender'
                  }}
                  className="btn-brand font-medium"
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
    </>
  )
}
