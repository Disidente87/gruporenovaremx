import { Shield, Target, Heart, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "Confianza",
      description: "Transparencia en cada proceso y compromiso con la excelencia."
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Análisis detallado del mercado para maximizar el retorno de inversión."
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amor por transformar espacios y crear hogares excepcionales."
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Estándares superiores en cada renovación y proyecto."
    }
  ]

  return (
    <section id="quienes-somos" className="py-2 mb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
                              <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
                    Más que especialistas en vivienda, 
                    <span className="text-primary block">aliados en tu tranquilidad</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-elegant">
                  <p className="text-muted-foreground">
                    Imagina que tienes una casa que alguna vez fue tu sueño, pero que hoy se deteriora mientras la deuda sigue creciendo. La preocupación no te deja dormir, y sientes que cada día es más difícil salir adelante. En Grupo Renovare MX, hemos visto estas historias muchas veces, y sabemos exactamente lo que se siente.
                  </p>
                  <p className="text-muted-foreground">
                    Nuestro equipo está aquí para escucharte, comprender tu situación y acompañarte en cada paso del proceso. No solo nos encargamos de remodelar y vender tu casa: te ayudamos a transformar un problema que parecía imposible en tranquilidad y libertad. Cada decisión se toma pensando en tu bienestar y en el de tu familia, porque sabemos que tu hogar es más que un inmueble: es tu patrimonio, tu historia y tu paz.
                  </p>
                  <p className="text-muted-foreground">
                    Con nosotros, no estás solo. Somos especialistas que entienden lo que estás viviendo, y trabajamos con empatía, transparencia y profesionalismo para que recuperes confianza, control y tranquilidad en tu vida. En Grupo Renovare MX, tu situación es nuestra prioridad y tu paz nuestro compromiso.
                  </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent('Hola, quiero hablar con un especialista de Grupo Renovare MX sobre mi casa y deuda.')
                  window.open(`https://wa.me/+526643306976?text=${message}`, '_blank')
                }}
                className="btn-brand font-medium"
              >
                Empieza tu proceso hoy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-medium text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground text-elegant">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
