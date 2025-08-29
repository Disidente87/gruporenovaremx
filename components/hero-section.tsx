import { Button } from "./ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"
import { ImageWithFallback } from "./ui/image-with-fallback"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 pt-10">
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
              <p className="text-lg text-muted-foreground text-elegant max-w-xl">
                Te acompañamos con experiencia y confianza para recuperar tu paz.
              </p>
            </div>

            <div className="text-center space-y-4">
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
                Quiero mi solución ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}
