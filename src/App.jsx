import { useEffect, useState } from 'react'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RoomsPage from './pages/RoomsPage'
import WifiGuidePage from './pages/WifiGuidePage'
import './styles/app.css'

const pageTitles = {
  home: 'N79 Navigator | Griffith University',
  about: 'About N79 | Griffith University',
  navigate: 'N79 Rooms & Labs | Griffith University',
  wifi: 'Connect to Wi-Fi | N79 Navigator',
  login: 'Login | N79 Navigator',
}

/** Read the page name from a URL such as /#about. */
const getPageFromHash = () => window.location.hash.slice(1) || 'home'

/**
 * Lightweight hash routing keeps this prototype dependency-free.
 * A production deployment could replace it with React Router if URLs grow.
 */
export default function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const updatePage = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  useEffect(() => {
    document.title = pageTitles[page] ?? pageTitles.home
  }, [page])

  const navigate = (target) => {
    window.location.hash = target
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages = {
    home: <HomePage navigate={navigate} />,
    about: <AboutPage navigate={navigate} />,
    navigate: <RoomsPage />,
    wifi: <WifiGuidePage />,
    login: <LoginPage navigate={navigate} />,
  }

  return (
    <main>
      <Header navigate={navigate} page={page} />
      {/* key restarts the short fade when the page changes. */}
      <div className="page-transition" key={page}>
        {pages[page] ?? pages.home}
      </div>
    </main>
  )
}
