"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    message: 'Quiero que me contacten'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      serviceType: '',
      message: 'quiero que me contacten'
    })
    
    setIsSubmitting(false)
    
    // Show success message (you can implement toast here)
    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["664 330 6976", "665 118 1771"],
      action: "tel:+525512345678"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contacto@gruporenovaremx.com", "ventas@gruporenovaremx.com"],
      action: "mailto:contacto@gruporenovaremx.com"
    },
    {
      icon: MapPin,
      title: "Oficina",
      details: ["Av. Polanco 123, Polanco", "Ciudad de México, CDMX"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 7:00 am- 6:00 pm", "Sáb: 10:00 am - 5:00 pm"],
      action: null
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-1">
          <Link href="/main">
            <Button variant="outline" className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:border-primary">
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground max-w-3xl mx-auto leading-tight">
            Comencemos Juntos Tu 
            <span className="text-primary block">Próximo Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
            Estamos listos para convertir tu visión en realidad. 
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    Solicitar Consulta Gratuita
                  </h3>
                  <p className="text-muted-foreground text-elegant">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+52 55 1234-5678"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Tipo de Servicio *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange('serviceType', value)}
                        required
                      >
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comprar">Quiero comprar una casa</SelectItem>
                          <SelectItem value="vender">Quiero vender mi casa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>



                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier pregunta que tengas..."
                      rows={4}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestros términos de privacidad y 
                    nos autorizas a contactarte sobre nuestros servicios.
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-medium text-foreground">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground text-elegant">
                Estamos aquí para responder todas tus preguntas y ayudarte a dar el primer paso 
                hacia tu próximo proyecto inmobiliario.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {info.action ? (
                                <a 
                                  href={info.action}
                                  className="hover:text-primary transition-colors"
                                  target={info.action.startsWith('http') ? '_blank' : undefined}
                                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                    <h4 className="font-medium text-foreground">Garantía de Respuesta</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✓ Respuesta en menos de 24 horas</p>
                    <p>✓ Consulta inicial completamente gratuita</p>
                    <p>✓ Análisis personalizado de tu proyecto</p>
                    <p>✓ Sin compromisos hasta que estés 100% convencido</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
