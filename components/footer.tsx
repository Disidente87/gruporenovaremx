import { Mail, Phone, Linkedin, Twitter } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"
import Image from "next/image"

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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-new.jpg"
                alt="GrupoRenovareMX Logo"
                width={200}
                height={40}
                className="h-30 w-auto"
                priority
              />
            </div>
            <p className="text-slate-300 text-elegant">
               Más que especialistas en vivienda, aliados en tu tranquilidad
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">Síguenos</h4>
              <div className="flex space-x-3">
                <Button 
                  size="md" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white p-3"
                  onClick={() => window.open('https://www.facebook.com/cimacapitalmx/', '_blank')}
                >
                  <FaFacebook className="w-14 h-14 text-blue-600" />
                </Button>
                <Button 
                  size="md" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white p-3"
                  onClick={() => window.open('https://www.instagram.com/cimacapitalmx/', '_blank')}
                >
                  <FaInstagram className="w-14 h-14 text-pink-600" />
                </Button>
                {/* <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button> */}
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
                href="/comprar"
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Comprar
              </Link>
              <Link 
                href="/vender"
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Vender
              </Link>
              {/* <Link 
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
              <Link 
                href="/contact"
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Contacto
              </Link> */}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Contacto</h4>
            <div className="space-y-4">
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

        {/* Copyright */}
        <div className="text-center">
          <div className="text-slate-400 text-sm">
            © {currentYear} GrupoRenovareMX. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
