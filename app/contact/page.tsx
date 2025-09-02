import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-6">
        <ContactSection />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
