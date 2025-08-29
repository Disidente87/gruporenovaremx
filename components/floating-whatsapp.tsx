'use client'

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, estoy pasando por un problema con mi casa y la deuda crece cada día. Me gustaría recibir su apoyo y conocer cómo pueden ayudarme. Gracias.')
    window.open(`https://wa.me/5216643306976?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¿Necesitas ayuda? ¡Escríbenos!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </div>
    </button>
  )
}
