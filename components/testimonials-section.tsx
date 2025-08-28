import { Card, CardContent } from "./ui/card"
import { Star, Quote } from "lucide-react"
import { ImageWithFallback } from "./ui/image-with-fallback"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "María Elena Rodríguez",
      role: "Inversionista",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NTYxMzQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "GrupoRenovareMX superó todas mis expectativas. No solo obtuve el ROI proyectado, sino que el proceso fue completamente transparente. Su equipo es altamente profesional y confiable.",
      rating: 5,
      project: "Casa en Polanco"
    },
    {
      id: 2,
      name: "Carlos y Ana Martínez",
      role: "Familia",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NTYxMzQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Encontramos el hogar de nuestros sueños gracias a GrupoRenovareMX. La calidad de la renovación es excepcional y el precio fue muy competitivo. Nuestros hijos están felices en su nuevo hogar.",
      rating: 5,
      project: "Villa en Satélite"
    },
    {
      id: 3,
      name: "Roberto Hernández",
      role: "Empresario",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NTYxMzQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: "Como inversionista experimentado, puedo decir que GrupoRenovareMX maneja los proyectos con un nivel de detalle y profesionalismo excepcional. Definitivamente volveré a trabajar con ellos.",
      rating: 5,
      project: "Loft en Condesa"
    }
  ]

  const stats = [
    { number: "150+", label: "Clientes Satisfechos" },
    { number: "98%", label: "Proyectos Exitosos" },
    { number: "4.9/5", label: "Calificación Promedio" },
    { number: "100%", label: "Recomendación" }
  ]

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground max-w-3xl mx-auto leading-tight">
            Lo que Dicen Nuestros 
            <span className="text-secondary block">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor aval. 
            Conoce las experiencias de quienes ya han confiado en nosotros.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground text-elegant italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl border border-border">
          <h3 className="text-xl font-serif font-medium text-foreground mb-4">
            ¿Listo para ser nuestro próximo cliente satisfecho?
          </h3>
          <p className="text-muted-foreground text-elegant mb-6">
            Únete a las familias e inversionistas que ya han transformado sus vidas con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contacto')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Solicitar Consulta Gratuita
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('proyectos')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
            >
              Ver Más Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
