import { useRef, useCallback } from 'react'

export default function IdentityCard() {
  const cardRef = useRef(null)

  const handleMouse = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', x + '%')
    card.style.setProperty('--mouse-y', y + '%')
  }, [])

  return (
    <div
      ref={cardRef}
      className="bento-card card-identity revealed"
      onMouseMove={handleMouse}
      data-delay="0"
    >
      <div className="card-glow" />
      <div className="identity-layout">
        <div className="identity-visual">
          <svg className="avatar-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="58" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="20s" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="60" r="45" stroke="var(--green)" stroke-width="2" opacity="0.7" />
            <circle cx="60" cy="60" r="32" fill="var(--green-dark)" opacity="0.15" />
            <text x="60" y="52" textAnchor="middle" fill="var(--green)" fontFamily="Space Mono, monospace" fontSize="18" fontWeight="700">CF</text>
            <text x="60" y="72" textAnchor="middle" fill="var(--green)" fontFamily="Space Mono, monospace" fontSize="9" opacity="0.6">.exe</text>
          </svg>
          <div className="hex-decoration">
            <svg viewBox="0 0 100 100" className="hex-spin">
              <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="var(--green)" stroke-width="0.5" opacity="0.15" />
            </svg>
          </div>
        </div>
        <div className="identity-info">
          <div className="identity-badge">SYS.PROFILE</div>
          <h1 className="identity-name">Casey Freud J. <span className="glow-text">Madriaga</span></h1>
          <p className="identity-alias">alias: <span className="highlight">Credoz</span></p>
          <div className="identity-tagline">Aspiring Professional &bull; Continuous Learner</div>
        </div>
      </div>
    </div>
  )
}