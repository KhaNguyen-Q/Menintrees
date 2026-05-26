import { KineticNav } from '@/components/ui/sterling-gate-kinetic-navigation'
import { ASSETS, NAV_LINKS } from '@/sections/assets'
import { ContactSection } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Philosophy } from '@/sections/Philosophy'
import { SelectedWork } from '@/sections/SelectedWork'
import { Services } from '@/sections/Services'

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0a0a0a] text-[#f5f3ee]">
      <KineticNav brand={ASSETS.brand.name} links={NAV_LINKS} />
      <Hero />
      <Philosophy />
      <Services />
      <SelectedWork />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
