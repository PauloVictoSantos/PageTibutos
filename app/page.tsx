import { profiles } from "@/lib/profiles"
import ProfileHero from "@/components/profile"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ProfileHero data={profiles.melry} />
    </main>
  )
}
