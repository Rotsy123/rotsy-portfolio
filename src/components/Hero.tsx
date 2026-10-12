import { profile } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-plane" aria-hidden="true">
        <div className="hero-orb hero-orb--a" />
        <div className="hero-orb hero-orb--b" />
      </div>

      <div className="hero-content">
        <h1 className="hero-brand">
          {profile.firstName}
          <em>.</em>
        </h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-text">
          Interfaces web modernes, intégration d&apos;API et produits SaaS en évolution continue —
          depuis Antananarivo.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            Voir mon parcours
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Écrire un message
          </a>
        </div>
      </div>

      {/* <div className="hero-scroll" aria-hidden="true">
        Scroll
        <span />
      </div> */}
    </section>
  )
}
