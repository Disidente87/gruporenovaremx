'use client'

import { Button } from "./ui/button"
import { Home, Building2, Users, Mail, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCompanyName, setShowCompanyName] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Solo aplicar la lógica en la página principal
    if (pathname !== '/') {
      setShowCompanyName(true)
      return
    }

    const handleScroll = () => {
      const presentationSection = document.getElementById('presentation')
      if (presentationSection) {
        const rect = presentationSection.getBoundingClientRect()
        // Si la sección presentation está visible (top > -100 para dar un margen), ocultar el texto
        setShowCompanyName(rect.top < -100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Verificar el estado inicial
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleNavigation = (path: string) => {
    if (pathname === path) {
      // If we're already on the page, scroll to section
      scrollToSection('inicio')
    } else {
      // Navigate to the page
      router.push(path)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-2">
            <Image
              src="/logo.svg"
              alt="GrupoRenovareMX Logo"
              width={200}
              height={40}
              className="h-12 w-auto"
              priority
            />
            {showCompanyName && (
              <span className="ml-3 text-xl font-serif font-bold text-brand">
                Grupo Renovare MX
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('/comprar')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Comprar
            </button>
            <button 
              onClick={() => handleNavigation('/vender')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Vender
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Quiénes Somos
            </button>
            {/* <button 
              onClick={() => handleNavigation('/services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button> */}
            <Button 
              onClick={() => handleNavigation('/contact')}
              className="btn-brand"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 -mb-6 -mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigation('/comprar')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Comprar
              </button>
              <button 
                onClick={() => handleNavigation('/vender')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Vender
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Quiénes Somos
              </button>
              {/* <button 
                onClick={() => handleNavigation('/services')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Servicios
              </button> */}
              <Button 
                onClick={() => handleNavigation('/contact')}
                className="btn-brand w-fit"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
