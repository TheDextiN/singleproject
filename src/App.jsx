import { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RoomsPage from './pages/RoomsPage'
import StudentPage from './pages/StudentPage'
import WifiGuidePage from './pages/WifiGuidePage'
import './styles/app.css'

const pageTitles = {
  home: 'N79 Navigator | Griffith University',
  about: 'About N79 | Griffith University',
  navigate: 'N79 Rooms & Labs | Griffith University',
  wifi: 'Connect to Wi-Fi | N79 Navigator',
  login: 'Login | N79 Navigator',
  student: 'Student Area | N79 Navigator',
}

/** Read the page name from a URL such as /#about. */
const getPageFromHash = () => window.location.hash.slice(1) || 'home'

/**
 * Lightweight hash routing keeps this prototype dependency-free.
 * A production deployment could replace it with React Router if URLs grow.
 */
export default function App() {
  const [page, setPage] = useState(getPageFromHash)
  // localStorage restores the demo account after page refreshes and browser restarts.
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => window.localStorage.getItem('n79-demo-auth') === 'student',
  )

  useEffect(() => {
    // This listener updates React whenever browser back/forward changes the hash.
    const updatePage = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  useEffect(() => {
    // Keep the browser-tab title in sync with the visible screen.
    document.title = pageTitles[page] ?? pageTitles.home
  }, [page])

  // Internal navigation changes the hash and returns the next page to the top.
  const navigate = (target) => {
    window.location.hash = target
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // A successful login saves the account and opens the main room directory.
  const login = () => {
    window.localStorage.setItem('n79-demo-auth', 'student')
    setIsLoggedIn(true)
    navigate('navigate')
  }

  // This is the only function that removes the persistent demo session.
  const logout = () => {
    window.localStorage.removeItem('n79-demo-auth')
    setIsLoggedIn(false)
    navigate('home')
  }

  const pages = {
    home: <HomePage navigate={navigate} isLoggedIn={isLoggedIn} />,
    about: <AboutPage navigate={navigate} />,
    navigate: <RoomsPage />,
    wifi: <WifiGuidePage />,
    login: isLoggedIn
      ? <StudentPage navigate={navigate} onLogout={logout} />
      : <LoginPage navigate={navigate} onLogin={login} />,
    student: isLoggedIn
      ? <StudentPage navigate={navigate} onLogout={logout} />
      : <LoginPage navigate={navigate} onLogin={login} />,
  }

  return (
    <main>
      <Header
        navigate={navigate}
        page={page}
        isLoggedIn={isLoggedIn}
        onLogout={logout}
      />
      {/* key restarts the short fade when the page changes. */}
      <div className="page-transition" key={page}>
        {pages[page] ?? pages.home}
      </div>
    </main>
  )
}
