import { useRef, useEffect, useCallback } from 'react'

const skills = [
  { name: 'Public Relations', width: 90 },
  { name: 'Teamwork', width: 95 },
  { name: 'Time Management', width: 85 },
  { name: 'Leadership', width: 88 },
  { name: 'Effective Communication', width: 92 },
  { name: 'Critical Thinking', width: 87 },
]

export default function SkillsCard() {
  const cardRef = useRef(null)
  const fillRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fillRefs.current.forEach((el) => {
              if (el) {
                setTimeout(() => {
                  el.style.width = el.dataset.width + '%'
                }, 600)
              }
            })
            obs.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

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
      className="bento-card card-skills revealed"
      onMouseMove={handleMouse}
      data-delay="3"
    >
      <div className="card-glow" />
      <div className="card-label">SKILL_MATRIX</div>
      <div className="skills-bars">
        {skills.map((s, i) => (
          <div className="skill-row" key={s.name}>
            <span className="skill-name">{s.name}</span>
            <div className="skill-bar">
              <div
                ref={(el) => (fillRefs.current[i] = el)}
                className="skill-fill"
                data-width={s.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}