import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { WhyJoin } from "@/components/sections/why-join"
import { Vision } from "@/components/sections/vision"
import { TeamPreview } from "@/components/sections/team-preview"
import { Footer } from "@/components/sections/footer"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <WhyJoin />
      <Vision />
      <TeamPreview />
      <Footer />
    </main>
  )
}
