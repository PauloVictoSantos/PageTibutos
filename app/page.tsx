import { profiles } from "@/lib/profiles"
import ProfileHero from "@/components/perfil2"

import { Services } from "@/components/services"
import { Schedule } from "@/components/schedule"
import { Documents } from "@/components/documents"
import { Instructions } from "@/components/instructions"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ProfileHero data={profiles.melry} />

      <Services />
      <Schedule />
      <Documents />
      <Instructions />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
