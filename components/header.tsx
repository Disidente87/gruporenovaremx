'use client'

import { Button } from "./ui/button"
import { Home, Building2, Users, Mail, Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-semibold text-primary">
              GrupoRenovareMX
            </h1>
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
              onClick={() => handleNavigation('/about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Servicios
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-primary hover:bg-primary/90 text-white w-fit"
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
