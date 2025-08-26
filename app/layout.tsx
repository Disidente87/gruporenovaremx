import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grupo Renovare MX - Flipping Inmobiliario Profesional',
  description: 'Especialistas en renovación y flipping inmobiliario. Transformamos propiedades para maximizar su valor y generar ganancias compartidas.',
  keywords: 'flipping inmobiliario, renovación de propiedades, inversión inmobiliaria, México, Grupo Renovare',
  authors: [{ name: 'Grupo Renovare MX' }],
  openGraph: {
    title: 'Grupo Renovare MX - Flipping Inmobiliario',
    description: 'Transformamos propiedades para maximizar su valor y generar ganancias compartidas',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
