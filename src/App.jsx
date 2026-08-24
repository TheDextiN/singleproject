import { useState } from 'react'
import campusBackground from './assets/griffith-campus-bg.png'
import './App.css'

const types = [
  ['student', 'Current Student', "You're enrolled at Griffith and exploring N79."],
  ['staff', 'Staff', 'You work at Griffith and want a refresher on N79.'],
  ['visitor', 'Visitor / Guest', 'Prospective student, industry partner, or community visitor.'],
]
const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>

function App() {
  const [selected, setSelected] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return <main className="landing" style={{ '--campus-image': `url(${campusBackground})` }}>
    <header className="site-header">
      <a className="griffith-logo" href="#top" aria-label="Griffith University home">
        <span className="logo-symbol" aria-hidden="true"><i>G</i></span>
        <span className="logo-text"><strong>GRIFFITH</strong><small>UNIVERSITY</small></span>
      </a>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span/><span/><span/>
      </button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>About N79</a>
        <a href="#tour" onClick={() => setMenuOpen(false)}>Tour information</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button type="button" onClick={() => { setMenuOpen(false); document.querySelector('.welcome-card')?.scrollIntoView({ behavior: 'smooth' }) }}>Start tour</button>
      </nav>
    </header>

    <section className="welcome-card" id="top" aria-labelledby="page-title">
      <p className="campus-label">Griffith University · N79</p>
      <h1 id="page-title">N79 Digital Self-Tour</h1>
      <p className="intro">Explore N79 at your own pace — no staff-led tour or booking required. Choose how you&apos;re visiting today to get started.</p>
      <h2>Continue as</h2>
      <div className="options">
        {types.map(([id, title, description]) => <button className={selected === id ? 'selected' : ''} key={id} type="button" aria-pressed={selected === id} onClick={() => setSelected(id)}>
          <span><strong>{title}</strong><small>{description}</small></span><Arrow />
        </button>)}
      </div>
      <p className="privacy">No account or personal details needed. This choice only personalises your welcome message and isn&apos;t stored anywhere except this device.</p>
      {selected && <button className="continue" type="button">Start self-tour <Arrow /></button>}
    </section>
  </main>
}

export default App
