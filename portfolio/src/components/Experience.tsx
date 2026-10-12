import { useEffect, useRef } from 'react'
import { experiences } from '../data'

export function Experience() {
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
      { threshold: 0.15 },
    )
    items.forEach((item) => io.observe(item))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="experience">
      <div className="section-inner" ref={ref}>
        <p className="section-label reveal reveal-item">Expérience</p>
        <h2 className="section-title reveal reveal-item">Ce que j&apos;ai construit</h2>
        <p className="section-lead reveal reveal-item">
          Produits SaaS et CRM B2B — fonctionnalités métier, intégrations API et interfaces
          pensées pour le terrain.
        </p>

        <div className="timeline">
          {experiences.map((job) => (
            <article className="job reveal reveal-item" key={`${job.company}-${job.period}`}>
              <div className="job-head">
                <h3 className="job-role">{job.role}</h3>
                <div className="job-meta">
                  <strong>{job.company}</strong>
                  <span>{job.period}</span>
                  <span>{job.place}</span>
                </div>
              </div>
              <div className="stack">
                {job.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
