import { useEffect, useRef } from 'react'
import { education } from '../data'

export function Education() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll('.reveal-item')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-in')
        })
      },
      { threshold: 0.12 },
    )
    items.forEach((item) => io.observe(item))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="education">
      <div className="section-inner" ref={ref}>
        <p className="section-label reveal reveal-item">Formation</p>
        <h2 className="section-title reveal reveal-item">Parcours académique</h2>
        <p className="section-lead reveal reveal-item">
          Du développement d&apos;applications à Antananarivo jusqu&apos;au Master MBDS à
          l&apos;Université Côte d&apos;Azur.
        </p>

        <ol className="edu-timeline">
          {education.map((item, index) => (
            <li
              className={`edu-step reveal reveal-item${index === 0 ? ' is-current' : ''}`}
              key={`${item.title}-${item.period}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="edu-marker" aria-hidden="true">
                <span className="edu-dot" />
              </div>
              <div className="edu-body">
                <span className="edu-period">{item.period}</span>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-school">
                  {item.school}
                  {item.place ? <span className="edu-place"> · {item.place}</span> : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
