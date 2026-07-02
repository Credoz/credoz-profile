import { useRef, useState, useCallback } from 'react'

export default function ContactCard({ delay }) {
  const cardRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleMouse = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%')
    card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(formRef.current)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      ref={cardRef}
      className="bento-card card-contact revealed"
      onMouseMove={handleMouse}
      data-delay={delay}
    >
      <div className="card-glow" />
      <div className="card-label">CONTACT_MODULE</div>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input type="text" name="name" placeholder="name" required className="contact-input" />
          <input type="email" name="email" placeholder="email" required className="contact-input" />
        </div>
        <input type="text" name="subject" placeholder="subject" required className="contact-input" />
        <textarea name="message" placeholder="message" rows="4" required className="contact-input contact-textarea" />
        <button type="submit" className="contact-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'TRANSMITTING...' : '> SEND_MESSAGE'}
        </button>
        {status === 'success' && <p className="contact-msg success">Message delivered successfully.</p>}
        {status === 'error' && <p className="contact-msg error">Transmission failed. Try again.</p>}
      </form>
    </div>
  )
}