import { Mail, Phone, Linkedin, Twitter } from "lucide-react"
import { FaFacebook, FaInstagram, FaFacebookF, FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa"
import { Facebook } from "lucide-react"
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
    <footer className="bg-slate-900/95 backdrop-blur-sm text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="GrupoRenovareMX Logo"
                width={400}
                height={80}
                className="h-12 w-auto"
                priority
              />
              <p className="text-slate-300 text-elegant">
                Más que especialistas en vivienda, aliados en tu tranquilidad
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-medium">Síguenos</h4>
              <div className="flex space-x-3">
                {/* Facebook Logo - Con fondo oscuro */}
                <Button 
                  size="default" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 bg-blue-600 hover:bg-blue-700 hover:text-white p-4"
                  onClick={() => window.open('https://www.facebook.com/gruporenovaremx/', '_blank')}
                >
                  <FaFacebookF className="w-8 h-8 text-white" />
                </Button>
                
                {/* Instagram - Con fondo oscuro */}
                <Button 
                  size="default" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 bg-pink-600 hover:bg-pink-700 hover:text-white p-4"
                  onClick={() => window.open('https://www.instagram.com/gruporenovare_mx/', '_blank')}
                >
                  <FaInstagram className="w-8 h-8 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Horarios de Atención</h4>
            <div className="space-y-2">
              <div className="text-slate-300 space-y-1">
                <div>Lunes - Viernes: 7:00 am - 6:00 pm</div>
                <div>Sábados: 10:00 am - 5:00 pm</div>
                <div>Domingos: Cerrado</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <div className="text-slate-300">
                  <div>664 330 6976</div>
                  <div>665 118 1771</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
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
