import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Home, Store, Building, Hammer, Palette, Wrench } from 'lucide-react'

function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Casas Residenciales',
      description: 'Renovamos casas unifamiliares y dúplex para maximizar su valor de mercado.',
      features: ['Cocinas modernas', 'Baños renovados', 'Espacios abiertos', 'Iluminación LED'],
      color: 'text-real-estate-600'
    },
    {
      icon: Building,
      title: 'Departamentos',
      description: 'Transformamos apartamentos en espacios modernos y funcionales.',
      features: ['Diseño funcional', 'Almacenamiento inteligente', 'Acabados premium', 'Eficiencia energética'],
      color: 'text-profit-600'
    },
    {
      icon: Store,
      title: 'Locales Comerciales',
      description: 'Renovamos espacios comerciales para aumentar su atractivo y rentabilidad.',
      features: ['Fachadas modernas', 'Interiores funcionales', 'Iluminación comercial', 'Señalización'],
      color: 'text-real-estate-600'
    },
    {
      icon: Building2,
      title: 'Edificios Completos',
      description: 'Proyectos de renovación integral para edificios residenciales y comerciales.',
      features: ['Renovación estructural', 'Sistemas modernos', 'Amenidades', 'Valorización integral'],
      color: 'text-profit-600'
    }
  ]

  const renovationServices = [
    {
      icon: Hammer,
      title: 'Renovación Estructural',
      description: 'Reparación y mejora de cimientos, muros y estructura general.'
    },
    {
      icon: Palette,
      title: 'Acabados Premium',
      description: 'Pisos, paredes, techos y detalles con materiales de alta calidad.'
    },
    {
      icon: Wrench,
      title: 'Sistemas Modernos',
      description: 'Instalación de sistemas eléctricos, plomería y climatización actualizados.'
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialistas en renovación de todo tipo de propiedades inmobiliarias. 
            Transformamos espacios para maximizar su valor y potencial de venta.
          </p>
        </div>

        {/* Property Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-hover text-center">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-real-estate-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Renovation Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Servicios de <span className="gradient-text">Renovación</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de renovación para transformar completamente tu propiedad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renovationServices.map((service, index) => (
            <Card key={index} className="card-hover text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-real-estate-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-real-estate-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes una propiedad para renovar?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para una evaluación gratuita y sin compromisos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-real-estate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-real-estate-700 transition-colors">
                Solicitar Evaluación
              </button>
              <button className="border border-real-estate-600 text-real-estate-600 px-8 py-3 rounded-lg font-semibold hover:bg-real-estate-50 transition-colors">
                Ver Portafolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
