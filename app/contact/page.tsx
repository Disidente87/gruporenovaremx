import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-6">
        <ContactSection />
      </div>
    </div>
  )
}
