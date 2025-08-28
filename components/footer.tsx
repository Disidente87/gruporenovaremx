import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                GrupoRenovareMX
              </h3>
            </div>
            <p className="text-slate-300 text-elegant">
              Especializados en flipping inmobiliario, transformamos propiedades 
              en oportunidades de inversión exitosas y hogares excepcionales.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">Síguenos</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Inicio
              </button>
              <Link 
                href="/about"
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Quiénes Somos
              </Link>
              <Link 
                href="/services"
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Servicios
              </Link>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Servicios</h4>
            <div className="space-y-3">
              <div className="text-slate-300">Análisis de Mercado</div>
              <div className="text-slate-300">Renovación Integral</div>
              <div className="text-slate-300">Maximización de Valor</div>
              <div className="text-slate-300">Consultoría Inmobiliaria</div>
              <div className="text-slate-300">Gestión de Proyectos</div>
              <div className="text-slate-300">Venta de Propiedades</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <div>Av. Polanco 123, Polanco</div>
                  <div>Ciudad de México, CDMX</div>
                  <div>C.P. 11560</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-slate-300">
                  <div>664 330 6976</div>
                  <div>665 118 1771</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-slate-300">
                  <div>
                    <a href="mailto:contacto@gruporenovaremx.com" className="hover:text-white transition-colors">
                      contacto@gruporenovaremx.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:ventas@gruporenovaremx.com" className="hover:text-white transition-colors">
                      ventas@gruporenovaremx.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <h5 className="font-medium">Horarios de Atención</h5>
              <div className="text-sm text-slate-300 space-y-1">
                <div>Lunes - Viernes: 7:00 am - 6:00 pm</div>
                <div>Sábados: 10:00 am - 5:00 pm</div>
                <div>Domingos: Cerrado</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © {currentYear} GrupoRenovareMX. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="text-xs text-slate-500 text-center">
            <p>
              GrupoRenovareMX es una empresa especializada en flipping inmobiliario registrada en México. 
              Todos nuestros proyectos cumplen con las normativas locales y federales aplicables.
            </p>
            <p className="mt-2">
              RFC: GRM123456789 | CNBV No autorizado como intermediario financiero
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
