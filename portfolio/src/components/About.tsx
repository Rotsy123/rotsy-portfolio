import { useEffect, useRef } from 'react'
import { languages, profile } from '../data'

export function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('is-in')
      },
      { threshold: 0.18 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="about">
      <div className="section-inner reveal" ref={ref}>
        <p className="section-label">Profil</p>
        <h2 className="section-title">Une développeuse orientée produit</h2>
        <p className="section-lead">{profile.summary}</p>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              À l&apos;aise dans des environnements orientés produit et intégration de services
              externes, je construis des fonctionnalités métier claires, performantes et utiles au
              quotidien des équipes.
            </p>
            <p>
              Aujourd&apos;hui chez Constellation Group, je contribue à des plateformes SaaS et CRM
              B2B — du frontend React aux API NestJS, en passant par l&apos;état applicatif et
              l&apos;expérience utilisateur.
            </p>
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <strong>Localisation</strong>
              <span>{profile.location}</span>
            </div>
            <div className="about-fact">
              <strong>Email</strong>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="about-fact">
              <strong>Téléphone</strong>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </div>
            <div className="about-fact">
              <strong>Langues</strong>
              <div className="languages">
                {languages.map((lang) => (
                  <span className="chip" key={lang}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
