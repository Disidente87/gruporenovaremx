import { PlayCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { ImageWithFallback } from "./ui/image-with-fallback"
import { useRouter } from "next/navigation"
import { FloatingWhatsApp } from "./floating-whatsapp"
import { Button } from "./ui/button"
import Link from "next/link"

export function VenderSection() {
  const router = useRouter()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
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
      
      <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 mb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
                Cuando tu casa se deteriora
                <span className="text-primary block">y la deuda crece,</span>
                <span className="text-secondary">hay una salida</span>
              </h1>
              <p className="text-lg text-muted-foreground text-elegant max-w-lg mx-auto">
                Te acompañamos con experiencia y confianza para recuperar tu paz.
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Sabemos lo que significa vivir con la preocupación de una deuda que no deja de crecer mientras tu casa pierde valor. Por eso, te acompañamos paso a paso con soluciones claras y humanas: remodelamos y vendemos tu vivienda para que recuperes estabilidad y paz.
              </p>
              <p className="text-lg text-muted-foreground font-medium">
                Contáctanos. Consultoría Gratuita.
              </p>
              <Button 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent('Hola, quiero consultoria para vender mi casa')
                  window.open(`https://wa.me/+526643306976?text=${message}`, '_blank')
                }}
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Quiero Vender
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Icon */}
      <FloatingWhatsApp />
    </>
  )
}
