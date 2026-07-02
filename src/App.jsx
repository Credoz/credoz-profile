import ParticleCanvas from './components/ParticleCanvas'
import Scanlines from './components/Scanlines'
import TopBar from './components/TopBar'
import IdentityCard from './components/IdentityCard'
import TerminalCard from './components/TerminalCard'
import StatusCard from './components/StatusCard'
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard'
import ContactCard from './components/ContactCard'
import FooterCard from './components/FooterCard'

function App() {
  return (
    <>
      <ParticleCanvas />
      <Scanlines />
      <div className="app">
        <TopBar />
        <main className="bento-grid">
          <IdentityCard />
          <TerminalCard />
          <StatusCard />
          <SkillsCard />
          <ProjectCard
            marker="PROJECT_01"
            yearBadge="2024 — 2025"
            name="Castlefall"
            type="2D RPG Game"
            desc="Developed an immersive 2D RPG game in Java featuring castle-themed environments, quest-driven gameplay, and interactive combat mechanics. Built from the ground up with a focus on world-building and player engagement."
            chips={['Java', 'Game Dev', '2D RPG']}
            delay={4}
          />
          <ProjectCard
            marker="CERTIFICATION"
            yearBadge="Feb 9, 2026"
            name="SCRUM Foundation Professional"
            type="SFPC — Open Test Certification"
            desc="Earned the Scrum Foundation Professional Certification (SFPC), demonstrating foundational knowledge of Scrum framework principles, agile methodologies, and iterative project management practices."
            chips={['Agile', 'Scrum', 'SFPC']}
            delay={5}
          />
          <ContactCard delay={6} />
          <FooterCard delay={7} />
        </main>
      </div>
    </>
  )
}

export default App