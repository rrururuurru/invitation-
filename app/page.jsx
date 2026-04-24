import CountdownSection from '../components/CountdownSection'
import DetailsSection from '../components/DetailsSection'
import DressCodeSection from '../components/DressCodeSection'
import FinalSection from '../components/FinalSection'
import GallerySection from '../components/GallerySection'
import Hero from '../components/Hero'
import InvitationSection from '../components/InvitationSection'
import MusicToggle from '../components/MusicToggle'
import ProgramSection from '../components/ProgramSection'
import RsvpSection from '../components/RsvpSection'
import ScrollProgress from '../components/ScrollProgress'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <MusicToggle />

      <main className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_20%_18%,rgba(209,224,238,0.9),transparent_28%),radial-gradient(circle_at_80%_14%,rgba(245,232,209,0.55),transparent_20%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 h-[720px] bg-[radial-gradient(circle_at_85%_20%,rgba(218,230,241,0.45),transparent_20%),radial-gradient(circle_at_12%_55%,rgba(245,230,222,0.6),transparent_24%)]" />
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
    </>
  )
}
