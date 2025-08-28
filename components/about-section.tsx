import { Shield, Target, Heart, Award } from "lucide-react"
import { Card, CardContent } from "./ui/card"

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
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Nuestra Historia
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground leading-tight">
                  Expertos en Flipping Inmobiliario con 
                  <span className="text-primary block">Visión de Futuro</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-elegant">
                <p className="text-muted-foreground">
                  En GrupoRenovareMX, nos especializamos en identificar propiedades con 
                  potencial y transformarlas en hogares excepcionales. Nuestro enfoque 
                  combina análisis de mercado profundo, renovaciones de alta calidad y 
                  un profundo entendimiento de las necesidades familiares.
                </p>
                <p className="text-muted-foreground">
                  Creemos que cada propiedad tiene una historia que contar y un potencial 
                  que desbloquear. Trabajamos con pasión para crear espacios que no solo 
                  generen valor económico, sino que también se conviertan en el hogar 
                  perfecto para familias que buscan calidad de vida.
                </p>
              </div>
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
