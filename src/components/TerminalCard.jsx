import { useEffect, useRef, useState } from 'react'

const ABOUT_TEXT = 'To use my knowledge and skills to fit in the team and learn more throughout the work experience. I crave to learn and upgrade the knowledge and skills I have and make use of it for future career, personal goals, and the goals of the company.'

export default function TerminalCard() {
  const cardRef = useRef(null)
  const [typed, setTyped] = useState('')
  const startedRef = useRef(false)

  useEffect(() => {
    const card = cardRef.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            let i = 0
            const id = setInterval(() => {
              if (i < ABOUT_TEXT.length) {
                setTyped(ABOUT_TEXT.slice(0, i + 1))
                i++
              } else {
                clearInterval(id)
              }
            }, 15)
          }
        })
      },
      { threshold: 0.3 }
    )
    if (card) obs.observe(card)
    return () => obs.disconnect()
  }, [])

  const handleMouse = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%')
    card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%')
  }

  return (
    <div
      ref={cardRef}
      className="bento-card card-terminal revealed"
      onMouseMove={handleMouse}
      data-delay="1"
    >
      <div className="card-glow" />
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="td td-red" />
          <span className="td td-yellow" />
          <span className="td td-green" />
        </div>
        <span className="terminal-title">about.sh</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line"><span className="prompt">$</span> cat about.txt</div>
        <div className="terminal-output">
          <p>{typed}<span className="cursor">_</span></p>
        </div>
        <div className="terminal-line"><span className="prompt">$</span> <span className="cursor">_</span></div>
      </div>
    </div>
  )
}