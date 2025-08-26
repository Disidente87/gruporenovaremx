import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Home, DollarSign } from 'lucide-react'

function HeroSection() {
  return (
    <section id="inicio" className="hero-gradient min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transformamos{' '}
            <span className="gradient-text">Propiedades</span>
            <br />
            en Oportunidades de{' '}
            <span className="gradient-text">Inversión</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especialistas en flipping inmobiliario. Renovamos tu propiedad y compartimos las ganancias. 
            Sin inversión inicial, solo el potencial de tu inmueble.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="real-estate" size="lg" className="text-lg px-8 py-4">
              Evaluar Mi Propiedad
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Home className="h-8 w-8 text-real-estate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sin Inversión Inicial
              </h3>
              <p className="text-gray-600">
                Nosotros financiamos la renovación completa de tu propiedad
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-profit-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ganancias Compartidas
              </h3>
              <p className="text-gray-600">
                Repartimos las utilidades según el potencial de cada proyecto
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="h-8 w-8 text-real-estate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Valor Maximizado
              </h3>
              <p className="text-gray-600">
                Transformamos tu propiedad para obtener el mejor precio de venta
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Más de 50 propiedades renovadas exitosamente
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <span className="text-sm">✓ Sin compromisos</span>
              <span className="text-sm">✓ Evaluación gratuita</span>
              <span className="text-sm">✓ Contrato transparente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
