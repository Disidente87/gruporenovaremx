import { Separator } from '@/components/ui/separator'
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Link, Twitter } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const services = [
    'Casas Residenciales',
    'Departamentos',
    'Locales Comerciales',
    'Edificios Completos',
    'Renovación Estructural',
    'Acabados Premium'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Link, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Grupo Renovare MX
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas en flipping inmobiliario. Transformamos propiedades para maximizar 
                su valor y generar ganancias compartidas. Sin inversión inicial, solo el potencial 
                de tu inmueble.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-real-estate-400" />
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-real-estate-400" />
                <span className="text-gray-300">info@gruporenovaremx.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-real-estate-400" />
                <span className="text-gray-300">Av. Insurgentes Sur 1234, CDMX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-real-estate-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-real-estate-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Grupo Renovare MX. Todos los derechos reservados.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-real-estate-600 hover:text-white transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-gray-400">
            <div>
              <Building2 className="h-6 w-6 mx-auto mb-2 text-real-estate-400" />
              <p>Certificados por la AMI</p>
            </div>
            <div>
              <div className="w-6 h-6 mx-auto mb-2 bg-profit-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p>Garantía de Calidad</p>
            </div>
            <div>
              <div className="w-6 h-6 mx-auto mb-2 bg-real-estate-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <p>Sin Costos Ocultos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
