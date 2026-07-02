import { useRef, useCallback } from 'react'

export default function ProjectCard({ marker, yearBadge, name, type, desc, chips, delay }) {
  const cardRef = useRef(null)

  const handleMouse = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%')
    card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%')
  }, [])

  return (
    <div
      ref={cardRef}
      className="bento-card card-project revealed"
      onMouseMove={handleMouse}
      data-delay={delay}
    >
      <div className="card-glow" />
      <div className="project-marker">{marker}</div>
      <div className="project-year-badge">{yearBadge}</div>
      <h3 className="project-name">{name}</h3>
      <p className="project-type">{type}</p>
      <p className="project-desc">{desc}</p>
      <div className="project-tech-stack">
        {chips.map((chip) => (
          <span className="tech-chip" key={chip}>{chip}</span>
        ))}
      </div>
    </div>
  )
}