import { useEffect, useState } from 'react'
import campusBackground from './assets/griffith-campus-bg.png'
import griffithLogo from './assets/griffith-university-logo.svg'
import './App.css'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>

function Header({ navigate, page }) {
  const [open, setOpen] = useState(false)
  const go = (target) => { setOpen(false); navigate(target) }
  return <header className="site-header">
    <button className="logo-link" onClick={() => go('home')} aria-label="Return to N79 tour home"><img src={griffithLogo} alt="Griffith University" /></button>
    <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/><span/></button>
    <nav className={open ? 'open' : ''} aria-label="Main navigation">
      <button className={page === 'home' ? 'active text-link' : 'text-link'} onClick={() => go('home')}>Home</button>
      <button className={page === 'about' ? 'active text-link' : 'text-link'} onClick={() => go('about')}>About N79</button>
      <a href="https://www.griffith.edu.au/about-griffith/campuses-facilities/nathan" target="_blank" rel="noreferrer">Nathan campus</a>
      <button className="nav-login" onClick={() => go('login')}>Student login</button>
    </nav>
  </header>
}

function Home({ navigate }) {
  const [selected, setSelected] = useState('')
  const types = [
    ['student','Current Student',"You're enrolled at Griffith and exploring N79."],
    ['staff','Staff','You work at Griffith and want a refresher on N79.'],
    ['visitor','Visitor / Guest','Prospective student, industry partner, or community visitor.'],
  ]
  const choose = (id) => { setSelected(id); if (id === 'student') navigate('login') }
  return <section className="home-stage" style={{'--campus-image':`url(${campusBackground})`}}>
    <div className="welcome-card">
      <p className="campus-label">Griffith University · N79</p><h1>N79 Digital Self-Tour</h1>
      <p className="intro">Explore N79 at your own pace — no staff-led tour or booking required. Choose how you&apos;re visiting today to get started.</p>
      <h2>Continue as</h2><div className="options">{types.map(([id,title,description]) => <button className={selected === id ? 'selected' : ''} key={id} onClick={() => choose(id)}><span><strong>{title}</strong><small>{description}</small></span><Arrow/></button>)}</div>
      <p className="privacy">No account or personal details needed. Your choice only personalises this tour experience.</p>
      {selected && selected !== 'student' && <button className="primary full" onClick={() => navigate('about')}>Start self-tour <Arrow/></button>}
    </div>
  </section>
}

function Login({ navigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const submit = (event) => { event.preventDefault(); setMessage('Demo mode: connect this form to Griffith single sign-on before launch.') }
  return <section className="login-page" style={{'--campus-image':`url(${campusBackground})`}}>
    <div className="login-card"><button className="back" onClick={() => navigate('home')}>← Back to tour home</button><p className="campus-label">Student access · N79</p><h1>Welcome back.</h1><p className="intro">Sign in with your Griffith student details to continue your personalised building tour.</p>
      <form onSubmit={submit}><label htmlFor="student-id">Griffith student number</label><input id="student-id" name="student-id" autoComplete="username" placeholder="e.g. s1234567" required />
        <div className="password-row"><label htmlFor="password">Password</label><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div>
        <input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required />
        <div className="form-meta"><label><input type="checkbox"/> Remember me</label><a href="https://www.griffith.edu.au/password-management" target="_blank" rel="noreferrer">Forgot password?</a></div>
        <button className="primary full" type="submit">Sign in and begin <Arrow/></button>{message && <p className="form-message" role="status">{message}</p>}
      </form><div className="secure-note"><span>●</span><p><strong>Prototype sign-in</strong><br/>This tour does not currently send or store credentials.</p></div>
    </div>
  </section>
}

const features = [
  ['6,000 m²','of adaptable learning and research space'],['Six levels','of multi-functional teaching facilities'],['10 m high','specialised high-bay laboratory'],
]
function About({ navigate }) {
  return <div className="about-page">
    <section className="about-hero" style={{'--campus-image':`url(${campusBackground})`}}><div><p className="campus-label light">Discover N79</p><h1>Built for ideas<br/>that move.</h1><p>Engineering, technology and aviation come together in one of Nathan campus&apos;s most innovative learning environments.</p><button className="primary" onClick={() => navigate('home')}>Begin the self-tour <Arrow/></button></div></section>
    <section className="about-intro"><span className="section-tag">The building</span><div><h2>Henry Smerdon Engineering, Technology and Aviation</h2><p>N79 is a landmark learning and teaching building at Griffith University&apos;s Nathan campus. Completed as a new home for engineering students, its adaptable spaces connect hands-on experimentation, teaching and industry-focused problem solving.</p></div></section>
    <section className="feature-stats">{features.map(([value,label])=><article key={value}><strong>{value}</strong><p>{label}</p></article>)}</section>
    <section className="inside"><div className="inside-art"><span>N79</span></div><div><span className="section-tag">Inside N79</span><h2>Designed to test, make and simulate.</h2><ul><li><b>High-bay laboratory</b><span>An indoor drone fly-zone with cranes and gantries, large enough to suspend a lightweight aircraft or vehicle.</span></li><li><b>Simulation facilities</b><span>Virtual and augmented reality environments support scenario planning and problem solving.</span></li><li><b>Flexible learning</b><span>Workshops, specialised laboratories, informal learning areas and a central atrium bring students together.</span></li><li><b>Disaster resilience</b><span>Specialist spaces support exercises, planning, training and simulated emergency response.</span></li></ul></div></section>
    <section className="about-cta"><div><p className="campus-label light">Ready to explore?</p><h2>See N79 for yourself.</h2></div><button className="light-btn" onClick={() => navigate('home')}>Choose your tour <Arrow/></button></section>
    <footer><p>Information sourced from Griffith University.</p><div><a href="https://news.griffith.edu.au/2020/02/25/engineering-students-make-the-most-of-n79-their-new-home-at-nathan/" target="_blank" rel="noreferrer">Building story</a><a href="https://www.griffith.edu.au/research/disaster-network/facilities" target="_blank" rel="noreferrer">N79 facilities</a><a href="https://www.griffith.edu.au/__data/assets/pdf_file/0038/1259993/24MAP_GEN_NAT.pdf" target="_blank" rel="noreferrer">Campus map</a></div></footer>
  </div>
}

function App() {
  const getPage = () => window.location.hash.slice(1) || 'home'
  const [page, setPage] = useState(getPage)
  useEffect(() => { const update = () => setPage(getPage()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  const navigate = (target) => { window.location.hash = target; setPage(target); window.scrollTo({top:0,behavior:'smooth'}) }
  return <main><Header navigate={navigate} page={page}/>{page === 'login' ? <Login navigate={navigate}/> : page === 'about' ? <About navigate={navigate}/> : <Home navigate={navigate}/>}</main>
}
export default App
