'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, MessageSquare, Building2 } from 'lucide-react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+52 (55) 1234-5678',
      description: 'Lunes a Viernes 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@gruporenovaremx.com',
      description: 'Respuesta en menos de 24 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      content: 'Av. Insurgentes Sur 1234, CDMX',
      description: 'Col. Del Valle, Ciudad de México'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM',
      description: 'Sábados: 10:00 AM - 2:00 PM'
    }
  ]

  const propertyTypes = [
    'Casa Residencial',
    'Departamento',
    'Local Comercial',
    'Edificio',
    'Terreno',
    'Otro'
  ]

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una propiedad para renovar? Contáctanos para una evaluación gratuita 
            y sin compromisos. Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-real-estate-600" />
                  Solicita tu Evaluación Gratuita
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-real-estate-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-real-estate-500 focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-real-estate-500 focus:border-transparent"
                        placeholder="(55) 1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Propiedad
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-real-estate-500 focus:border-transparent"
                      >
                        <option value="">Selecciona una opción</option>
                        {propertyTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-real-estate-500 focus:border-transparent"
                      placeholder="Cuéntanos sobre tu propiedad y lo que te gustaría lograr..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="real-estate" 
                    size="lg" 
                    className="w-full"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-real-estate-600" />
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos aquí para ayudarte con tu proyecto de renovación. 
                Contáctanos a través de cualquiera de estos medios:
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-real-estate-100 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-real-estate-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-real-estate-600 font-medium">{info.content}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-real-estate-50 to-profit-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Respuesta Rápida Garantizada
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-profit-500 rounded-full mr-2"></span>
                  Evaluación gratuita en 24 horas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-profit-500 rounded-full mr-2"></span>
                  Sin compromisos ni costos ocultos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-profit-500 rounded-full mr-2"></span>
                  Consulta especializada personalizada
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Prefieres que te llamemos?
            </h3>
            <p className="text-gray-600 mb-6">
              Deja tu número y te contactaremos en el horario que prefieras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="tel"
                placeholder="(55) 1234-5678"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-real-estate-500"
              />
              <Button variant="real-estate" size="lg">
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
