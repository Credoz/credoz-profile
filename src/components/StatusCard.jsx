import { useRef, useCallback } from 'react'

export default function StatusCard() {
  const cardRef = useRef(null)

  const handleMouse = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%')
    card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%')
  }, [])

  const items = [
    { label: 'STATUS', value: 'ACTIVE', green: true },
    { label: 'ROLE', value: 'CS Student', green: false },
    { label: 'FOCUS', value: 'Growth', green: false },
    { label: 'CERT.', value: 'SFPC', green: true },
  ]

  return (
    <div
      ref={cardRef}
      className="bento-card card-status revealed"
      onMouseMove={handleMouse}
      data-delay="2"
    >
      <div className="card-glow" />
      <div className="status-grid">
        {items.map((item) => (
          <div className="status-item" key={item.label}>
            <span className="status-label">{item.label}</span>
            <span className={`status-value${item.green ? ' green' : ''}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}