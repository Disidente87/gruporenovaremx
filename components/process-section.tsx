import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, FileText, Hammer, TrendingUp, Users, DollarSign, Megaphone } from 'lucide-react'

function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Evaluación Inicial',
      description: 'Analizamos tu propiedad para determinar su potencial de valorización post-renovación.',
      details: [
        'Inspección física completa',
        'Análisis de mercado local',
        'Estimación de costos de renovación',
        'Proyección de valor final'
      ]
    },
    {
      step: '02',
      icon: FileText,
      title: 'Acuerdo y Contrato',
      description: 'Establecemos los términos claros de la colaboración y distribución de ganancias.',
      details: [
        'Negociación de porcentajes',
        'Cronograma del proyecto',
        'Responsabilidades de cada parte',
        'Firma de contrato legal'
      ]
    },
    {
      step: '03',
      icon: Hammer,
      title: 'Renovación Integral',
      description: 'Ejecutamos la renovación completa con nuestro equipo de profesionales.',
      details: [
        'Planificación detallada',
        'Ejecución de obra',
        'Supervisión de calidad',
        'Gestión de permisos'
      ]
    },
    {
      step: '04',
      icon: Megaphone,
      title: 'Marketing y Venta',
      description: 'Implementamos estrategias de marketing para maximizar el precio de venta.',
      details: [
        'Fotografía profesional',
        'Listado en plataformas premium',
        'Showings organizados',
        'Negociación con compradores'
      ]
    },
    {
      step: '05',
      icon: TrendingUp,
      title: 'Cierre y Distribución',
      description: 'Finalizamos la venta y distribuimos las ganancias según el acuerdo.',
      details: [
        'Cierre de la transacción',
        'Cálculo de ganancias netas',
        'Distribución acordada',
        'Documentación final'
      ]
    }
  ]

  const profitModel = [
    {
      icon: Users,
      title: 'Modelo Colaborativo',
      description: 'Trabajamos en conjunto para maximizar el valor de tu propiedad.'
    },
    {
      icon: DollarSign,
      title: 'Ganancias Compartidas',
      description: 'Los porcentajes varían según el proyecto y se negocian de manera transparente.'
    }
  ]

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="gradient-text">Proceso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso transparente y profesional desde la evaluación inicial hasta la distribución de ganancias. 
            Cada paso está diseñado para maximizar el valor de tu propiedad.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-real-estate-500 to-profit-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  {step.icon && (
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-real-estate-500">
                      <step.icon className="h-6 w-6 text-real-estate-600" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-profit-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profit Model */}
        <div className="bg-gradient-to-r from-real-estate-50 to-profit-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Modelo de <span className="gradient-text">Ganancias</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro modelo de negocio está diseñado para beneficiar a ambas partes. 
              Analizamos cada proyecto individualmente para establecer los mejores términos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profitModel.map((item, index) => (
              <Card key={index} className="card-hover border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-real-estate-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-real-estate-600" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Points */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-real-estate-600 mb-2">0%</div>
              <div className="text-gray-700">Inversión inicial requerida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-profit-600 mb-2">100%</div>
              <div className="text-gray-700">Financiamiento de renovación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-real-estate-600 mb-2">Flexible</div>
              <div className="text-gray-700">Distribución de ganancias</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda una consulta gratuita para evaluar tu propiedad
            </p>
            <button className="bg-gradient-to-r from-real-estate-600 to-profit-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-real-estate-700 hover:to-profit-700 transition-all transform hover:scale-105">
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
