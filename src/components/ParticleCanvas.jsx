import { useEffect, useRef } from 'react'

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 1.5 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.4 + 0.1
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 230, 118, ${this.opacity})`
    ctx.fill()
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = Math.min(60, Math.floor(window.innerWidth * window.innerHeight / 20000))
    particlesRef.current = Array.from({ length: count }, () => new Particle(canvas))

    function handleMouse(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', handleMouse)

    function drawConnections() {
      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 230, 118, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach(p => {
        p.update()
        p.draw(ctx)
      })
      drawConnections()
      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouse)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} id="particleCanvas" />
}