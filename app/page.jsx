import CountdownSection from '../components/CountdownSection'
import DetailsSection from '../components/DetailsSection'
import DressCodeSection from '../components/DressCodeSection'
import FinalSection from '../components/FinalSection'
import GallerySection from '../components/GallerySection'
import Hero from '../components/Hero'
import InvitationSection from '../components/InvitationSection'
import MusicToggle from '../components/MusicToggle'
import ProgramSection from '../components/ProgramSection'
import Reveal from '../components/Reveal'
import RsvpSection from '../components/RsvpSection'
import ScrollProgress from '../components/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <MusicToggle />

      <main>
        <Hero />
        <InvitationSection />
        <DetailsSection />
        <CountdownSection />
        <ProgramSection />
        <DressCodeSection />
        <GallerySection />
        <RsvpSection />
        <FinalSection />
      </main>

      <Reveal className="pointer-events-none fixed bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm text-white/90 shadow-card md:hidden">
        Листайте ниже
      </Reveal>
    </>
  )
}
