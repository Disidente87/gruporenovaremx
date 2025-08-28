"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowRight, MapPin, Calendar, TrendingUp } from "lucide-react"
import { ImageWithFallback } from "./ui/image-with-fallback"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Casa Moderna en Polanco",
      location: "Polanco, CDMX",
      duration: "4 meses",
      investment: "$2.5M MXN",
      roi: "35%",
      beforeImage: "https://images.unsplash.com/photo-1635108199395-8cd24af60af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBleHRlcmlvcnxlbnwxfHx8fDE3NTYxODQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1697946594607-04d755acff2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlbm92YXRpb258ZW58MXx8fHwxNzU2MTg0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Transformación completa de una propiedad clásica en una residencia moderna con acabados de lujo.",
      features: ["Cocina integral", "3 recámaras", "Jardín renovado", "Smart home"]
    },
    {
      id: 2,
      title: "Departamento Loft Condesa",
      location: "Condesa, CDMX",
      duration: "3 meses",
      investment: "$1.8M MXN",
      roi: "42%",
      beforeImage: "https://images.unsplash.com/photo-1635108199395-8cd24af60af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBleHRlcmlvcnxlbnwxfHx8fDE3NTYxODQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2MTA4MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Conversión de espacio tradicional a loft moderno con concepto abierto y diseño minimalista.",
      features: ["Concepto abierto", "Techos altos", "Terraza privada", "Acabados premium"]
    },
    {
      id: 3,
      title: "Villa Familiar Satelite",
      location: "Satélite, Edo. México",
      duration: "5 meses",
      investment: "$3.2M MXN",
      roi: "28%",
      beforeImage: "https://images.unsplash.com/photo-1635108199395-8cd24af60af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBleHRlcmlvcnxlbnwxfHx8fDE3NTYxODQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      afterImage: "https://images.unsplash.com/photo-1697946594607-04d755acff2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlbm92YXRpb258ZW58MXx8fHwxNzU2MTg0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Renovación integral de villa familiar con expansión de espacios y diseño contemporáneo.",
      features: ["5 recámaras", "Alberca renovada", "Sala de juegos", "Estudio independiente"]
    }
  ]

  const [showBefore, setShowBefore] = useState(true)

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Proyectos Realizados
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground max-w-3xl mx-auto leading-tight">
            Transformaciones que 
            <span className="text-secondary block">Generan Valor</span>
          </h2>
          <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
            Cada proyecto cuenta una historia de transformación. Descubre cómo convertimos 
            propiedades ordinarias en hogares extraordinarios.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <Button
              key={project.id}
              variant={activeProject === index ? "default" : "outline"}
              onClick={() => setActiveProject(index)}
              className={`${
                activeProject === index 
                  ? "bg-primary text-white" 
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {project.title}
            </Button>
          ))}
        </div>

        {/* Active Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Comparison */}
          <div className="space-y-6">
            {/* Toggle Buttons */}
            <div className="flex bg-muted rounded-lg p-1 w-fit mx-auto">
              <Button
                variant={showBefore ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowBefore(true)}
                className={`${showBefore ? "bg-white shadow-sm" : ""}`}
              >
                Antes
              </Button>
              <Button
                variant={!showBefore ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowBefore(false)}
                className={`${!showBefore ? "bg-white shadow-sm" : ""}`}
              >
                Después
              </Button>
            </div>

            {/* Image Display */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <ImageWithFallback
                src={showBefore ? projects[activeProject].beforeImage : projects[activeProject].afterImage}
                alt={`${projects[activeProject].title} - ${showBefore ? 'Antes' : 'Después'}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {showBefore ? 'Antes' : 'Después'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                {projects[activeProject].title}
              </h3>
              <p className="text-muted-foreground text-elegant">
                {projects[activeProject].description}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Ubicación</span>
                </div>
                <p className="text-muted-foreground">{projects[activeProject].location}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Duración</span>
                </div>
                <p className="text-muted-foreground">{projects[activeProject].duration}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">ROI</span>
                </div>
                <p className="text-secondary font-semibold">{projects[activeProject].roi}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Inversión</span>
                </div>
                <p className="text-muted-foreground">{projects[activeProject].investment}</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-serif font-medium text-foreground">Características Principales</h4>
              <div className="grid grid-cols-2 gap-3">
                {projects[activeProject].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                const element = document.getElementById('contacto')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Solicitar Proyecto Similar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
