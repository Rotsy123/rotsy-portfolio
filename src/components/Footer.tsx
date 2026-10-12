import { profile } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          <strong>
            {profile.firstName} {profile.lastName}
          </strong>{' '}
          — {profile.title}
        </span>
        <span>© {year}</span>
      </div>
    </footer>
  )
}
