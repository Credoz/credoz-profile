import { useRef, useCallback } from 'react'

export default function FooterCard({ delay }) {
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
      className="bento-card card-footer revealed"
      onMouseMove={handleMouse}
      data-delay={delay}
    >
      <div className="card-glow" />
      <div className="footer-brand">
        <span className="brand-icon">&gt;_</span>
        <span className="brand-text">CREDOZ<span className="blink">_</span></span>
      </div>
      <p className="footer-sub">Casey Freud J. Madriaga</p>
      <p className="footer-tagline">Built with React &bull; Vite &bull; Deployed on Vercel</p>
    </div>
  )
}