import { useState, useEffect } from 'react'

export default function TopBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="status-dot" />
        <span className="topbar-label">portfolio://credoz</span>
      </div>
      <div className="topbar-right">
        <span className="topbar-time">{time}</span>
        <div className="topbar-indicator">
          <span className="indicator-dot" />
          ONLINE
        </div>
      </div>
    </header>
  )
}