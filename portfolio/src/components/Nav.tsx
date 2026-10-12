import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'Profil' },
  { href: '#experience', label: 'Expérience' },
  { href: '#education', label: 'Formation' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40)

      const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[]
      const y = window.scrollY + 120
      let current = ''
      for (const section of sections) {
        if (section.offsetTop <= y) current = `#${section.id}`
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav${solid ? ' is-solid' : ''}`}>
        <a className="nav-brand" href="#top" onClick={close}>
          <span>R</span>
          {profile.firstName}
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={active === link.href ? 'is-active' : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Me contacter
        </a>

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
          <i />
        </button>
      </header>

      <nav className={`nav-mobile${open ? ' is-open' : ''}`} aria-label="Navigation mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={close}>
          Me contacter
        </a>
      </nav>
    </>
  )
}
