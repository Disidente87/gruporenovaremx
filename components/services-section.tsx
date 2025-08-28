import { Hammer, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: Hammer,
      title: "Renovación Integral",
      description: "Transformamos completamente las propiedades con renovaciones de alta calidad y diseño moderno.",
      features: ["Diseño arquitectónico", "Renovación completa", "Supervisión profesional"],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Maximización de Valor",
      description: "Estrategias probadas para incrementar significativamente el valor de la propiedad en el mercado.",
      features: ["Mejoras estratégicas", "Optimización de espacios", "Acabados premium"],
      color: "accent"
    },
    {
      icon: Users,
      title: "Nuestra Propuesta de Valor",
      description: "Ofrecemos una experiencia integral que combina expertise técnico, transparencia total y resultados garantizados.",
      features: ["Experiencia comprobada", "Transparencia total", "Resultados garantizados"],
      color: "primary"
    }
  ]



  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground max-w-3xl mx-auto leading-tight">
            Proceso Completo de 
            <span className="text-primary block">Flipping Inmobiliario</span>
          </h2>
          <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
            Desde la identificación de la propiedad hasta la entrega final, 
            manejamos cada aspecto del proceso con profesionalismo y excelencia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-elegant">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => {
              const element = document.getElementById('contacto')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
