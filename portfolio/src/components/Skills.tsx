import { useEffect, useRef } from 'react'
import { skills } from '../data'

const PINNED = new Set(['visualstudiocode', 'twilio'])

function iconUrl(slug: string) {
  if (PINNED.has(slug)) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/${slug}.svg`
  }
  return `https://cdn.simpleicons.org/${slug}`
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-in')
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="skills">
      <div className="section-inner reveal" ref={ref}>
        <p className="section-label">Compétences</p>
        <h2 className="section-title">Stack & outils</h2>
        <p className="section-lead">
          Frontend, backend, bases de données et outillage — pour livrer des produits complets.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-block" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item.name} title={item.name}>
                    <img
                      className="skill-icon"
                      src={iconUrl(item.icon)}
                      alt=""
                      width={18}
                      height={18}
                      loading="lazy"
                      decoding="async"
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
