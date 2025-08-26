import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Users, Target, Shield, CheckCircle, Star } from 'lucide-react'

function AboutSection() {
  const stats = [
    {
      number: '50+',
      label: 'Propiedades Renovadas',
      description: 'Proyectos exitosos completados'
    },
    {
      number: '5+',
      label: 'Años de Experiencia',
      description: 'En el mercado inmobiliario'
    },
    {
      number: '100%',
      label: 'Satisfacción del Cliente',
      description: 'Propietarios satisfechos'
    },
    {
      number: '25%',
      label: 'Incremento Promedio',
      description: 'En valor de propiedades'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Transparencia',
      description: 'Comunicación clara y honesta en todos los aspectos del negocio.'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Compromiso con la calidad en cada proyecto y detalle.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo para maximizar el éxito de cada proyecto.'
    },
    {
      icon: Award,
      title: 'Innovación',
      description: 'Utilizamos las mejores prácticas y tecnologías del mercado.'
    }
  ]

  const team = [
    {
      name: 'Carlos Mendoza',
      role: 'Director General',
      description: 'Especialista en inversiones inmobiliarias con más de 10 años de experiencia.'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Directora de Operaciones',
      description: 'Experta en gestión de proyectos y renovaciones inmobiliarias.'
    },
    {
      name: 'Miguel Torres',
      role: 'Director de Construcción',
      description: 'Ingeniero civil especializado en renovaciones y mejoras estructurales.'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grupo Renovare MX es una empresa líder en flipping inmobiliario en México. 
            Nos especializamos en transformar propiedades para maximizar su valor y generar 
            ganancias compartidas con nuestros clientes.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Transformar el mercado inmobiliario mexicano a través de renovaciones profesionales 
              que no solo aumenten el valor de las propiedades, sino que también generen 
              oportunidades de inversión accesibles para todos.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Creemos en un modelo de negocio transparente donde tanto el propietario como 
              nuestra empresa se beneficien del éxito del proyecto.
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-6 w-6 text-profit-600" />
              <span className="text-gray-700 font-medium">Certificados por la AMI</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-real-estate-100 to-profit-100 rounded-3xl p-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Por qué elegirnos?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Sin inversión inicial requerida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Equipo profesional certificado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Proceso transparente y documentado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Resultados garantizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover text-center">
              <CardHeader>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <CardTitle className="text-lg">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {stat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros <span className="gradient-text">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-real-estate-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-real-estate-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro <span className="gradient-text">Equipo</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-real-estate-400 to-profit-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-real-estate-600">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres conocer más sobre nosotros?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda una reunión para discutir tu proyecto y conocer nuestro equipo
            </p>
            <button className="bg-real-estate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-real-estate-700 transition-colors">
              Conocer al Equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
