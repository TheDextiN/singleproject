import { useState } from 'react'
import griffithLogo from '../assets/branding/griffith-university-logo.svg'

/** Main navigation shared by every page. */
export default function Header({ navigate, page }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Closing the mobile menu here means every internal link behaves consistently.
  const goTo = (target) => {
    setMenuOpen(false)
    navigate(target)
  }

  const navClass = (target) =>
    page === target ? 'active text-link' : 'text-link'

  return (
    <header className="site-header">
      <button
        className="logo-link"
        onClick={() => goTo('home')}
        aria-label="Return to N79 Navigator home"
      >
        <img src={griffithLogo} alt="Griffith University" />
      </button>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        <button className={navClass('home')} onClick={() => goTo('home')}>Home</button>
        <button className={navClass('about')} onClick={() => goTo('about')}>About N79</button>
        <button className={navClass('navigate')} onClick={() => goTo('navigate')}>Rooms &amp; Labs</button>
        <button className={navClass('wifi')} onClick={() => goTo('wifi')}>Wi-Fi guide</button>
        <a
          href="https://www.griffith.edu.au/about-griffith/campuses-facilities/nathan"
          target="_blank"
          rel="noreferrer"
        >
          Nathan campus
        </a>
        <button className="nav-login" onClick={() => goTo('login')}>Login</button>
      </nav>
    </header>
  )
}
