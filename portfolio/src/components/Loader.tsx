import { useEffect, useState } from 'react'

type LoaderProps = {
  onDone: () => void
}

export function Loader({ onDone }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let frame = 0
    let value = 0

    const tick = () => {
      value += value < 70 ? 2.4 : value < 90 ? 1.1 : 0.45
      if (value >= 100) {
        setProgress(100)
        window.setTimeout(() => {
          setDone(true)
          window.setTimeout(onDone, 550)
        }, 220)
        return
      }
      setProgress(Math.floor(value))
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <div className={`loader${done ? ' is-done' : ''}`} aria-hidden={done}>
      <div className="loader-inner">
        <div className="loader-mark">R</div>
        <h1 className="loader-name">Rotsy</h1>
        <div className="loader-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-meta">
          <span className="loader-pct">{progress}%</span>
          <span>{progress < 100 ? 'Préparation' : 'Prêt'}</span>
        </div>
      </div>
    </div>
  )
}
