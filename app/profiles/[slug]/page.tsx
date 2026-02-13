import { profiles } from "@/lib/profiles"
import { notFound } from "next/navigation"
import ProfileHero from "@/components/profile"

export default async function ProfilePage({ params }: any) {
  const { slug } = await params

  const profile = profiles[slug as keyof typeof profiles]

  if (!profile) return notFound()

  return <ProfileHero data={profile} />
}
