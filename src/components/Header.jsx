import { useState } from 'react'
import griffithLogo from '../assets/branding/griffith-university-logo.svg'

/** Main navigation shared by every page. */
export default function Header({ navigate, page, isLoggedIn, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // Closing the mobile menu here means every internal link behaves consistently.
  const goTo = (target) => {
    setMenuOpen(false)
    setProfileOpen(false)
    navigate(target)
  }

  // Logging out also closes both header menus before App removes the account.
  const handleLogout = () => {
    setMenuOpen(false)
    setProfileOpen(false)
    onLogout()
  }

  // This helper adds the active underline to the link for the current page.
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
        {isLoggedIn ? (
          <div className="profile-menu-wrap">
            <button
              className="profile-button"
              type="button"
              aria-label="Open profile menu"
              aria-expanded={profileOpen}
              onClick={() => setProfileOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4.5 21c.8-4.2 3.3-6.3 7.5-6.3s6.7 2.1 7.5 6.3" />
              </svg>
              <span className="profile-name">s123456</span>
              <span className="profile-chevron" aria-hidden="true">⌄</span>
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <button onClick={() => goTo('student')}>
                  <span className="dropdown-icon" aria-hidden="true">○</span>
                  <span><b>Profile</b><small>View student area</small></span>
                </button>
                <button className="logout-option" onClick={handleLogout}>
                  <span className="dropdown-icon" aria-hidden="true">↪</span>
                  <span><b>Logout</b><small>End this session</small></span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="nav-login" onClick={() => goTo('login')}>Login</button>
        )}
      </nav>
    </header>
  )
}
