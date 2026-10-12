import { useEffect, useRef } from 'react'
import { profile } from '../data'

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-in')
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section contact" id="contact">
      <div className="section-inner reveal" ref={ref}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Travaillons ensemble</h2>

        <div className="contact-panel">
          <p>
            Une idée de produit, une refonte, une intégration API ? Écrivez-moi — je suis ouverte
            aux échanges autour de projets web et d&apos;opportunités Full Stack.
          </p>
          <div className="contact-links">
            <a className="is-main" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
