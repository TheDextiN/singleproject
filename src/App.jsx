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
      <button className={page === 'navigate' ? 'active text-link' : 'text-link'} onClick={() => go('navigate')}>Navigate N79</button>
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
      {selected && selected !== 'student' && <button className="primary full" onClick={() => navigate('navigate')}>Open indoor map <Arrow/></button>}
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

const floorData = {
  0: [['Main entrance','Arrival Plaza'],['High-bay laboratory','N79 0.10'],['Engineering labs','Level 0'],['Accessible toilets','Central core']],
  1: [['Lecture theatre','N79 1.05'],['Aviation learning','Level 1'],['Student lounge','East wing'],['Meeting rooms','West wing']],
  2: [['Planning studio','N79 2.04'],['Design studios','East wing'],['Makerspace','West wing'],['Student kitchen','Central core']],
  3: [['Industry zone','Level 3'],['Collaboration spaces','East wing'],['L.J. Harvey pottery','Level 3'],['Rooftop garden access','North core']],
  4: [['Cyber security lab','N79 4.10'],['IT learning rooms','N79 4.16–4.17'],['Simulation studio','West wing'],['Computer labs','East wing']],
  5: [['Science super lab','Level 5'],['Aviation simulation','Level 5'],['Research spaces','East wing'],['Staff workspaces','West wing']],
}

function FloorMap({ floor, selected }) {
  return <div className="floor-map" aria-label={`Prototype map of N79 level ${floor}`}><div className="map-north">N ↑</div><div className="map-corridor horizontal"/><div className="map-corridor vertical-line"/>
    {floorData[floor].map(([name,room],i)=><div key={name} className={`map-room room-${i}${selected === name ? ' destination' : ''}`}><b>{room}</b><span>{name}</span></div>)}
    <div className="map-core lift">↕<span>Lift</span></div><div className="map-core stairs">⌁<span>Stairs</span></div><div className="map-core toilets">WC<span>Toilets</span></div>{selected && <div className="route-line"><i/><i/><i/></div>}<div className="you-are-here"><i/>You are here</div>
  </div>
}

function Navigator() {
  const [floor, setFloor] = useState(0), [query, setQuery] = useState(''), [destination, setDestination] = useState(''), [accessible, setAccessible] = useState(false)
  const allPlaces = Object.entries(floorData).flatMap(([level,places]) => places.map(([name,room])=>({name,room,floor:Number(level)})))
  const results = query ? allPlaces.filter(p => `${p.name} ${p.room}`.toLowerCase().includes(query.toLowerCase())).slice(0,6) : []
  const choose = p => { setDestination(p.name); setFloor(p.floor); setQuery('') }
  return <section className="navigator-page"><aside className="nav-panel"><p className="campus-label">N79 Indoor Navigation</p><h1>Where do you need to go?</h1><p className="nav-intro">Search for a room, facility or learning space.</p>
    <div className="search-box"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search N79" aria-label="Search N79 destinations"/>{query && <button onClick={()=>setQuery('')} aria-label="Clear search">×</button>}</div>
    {results.length > 0 && <div className="search-results">{results.map(p=><button key={`${p.floor}-${p.name}`} onClick={()=>choose(p)}><span><b>{p.name}</b><small>Level {p.floor} · {p.room}</small></span><Arrow/></button>)}</div>}
    <div className="floor-select"><span>Choose a level</span><div>{Object.keys(floorData).map(level=><button className={floor===Number(level)?'active':''} key={level} onClick={()=>{setFloor(Number(level));setDestination('')}}>{level}</button>)}</div></div>
    <div className="places"><h2>Level {floor} destinations</h2>{floorData[floor].map(([name,room])=><button className={destination===name?'active':''} key={name} onClick={()=>setDestination(name)}><span><b>{name}</b><small>{room}</small></span><Arrow/></button>)}</div>
    <label className="accessible-toggle"><input type="checkbox" checked={accessible} onChange={e=>setAccessible(e.target.checked)}/><span><b>Accessible route</b><small>Use lifts and step-free paths</small></span></label></aside>
    <div className="map-panel"><div className="map-toolbar"><div><span>Henry Smerdon Building</span><b>N79 · Level {floor}</b></div><span className="prototype-badge">Prototype floor layout</span></div><FloorMap floor={floor} selected={destination}/>
      {destination && <div className="directions"><div><span className="route-icon">➜</span><p><small>ROUTE TO</small><b>{destination}</b><span>About {floor === 0 ? '2' : floor + 2} min · {accessible ? 'Lift route' : 'Fastest route'}</span></p></div><ol><li><b>1</b>Continue along the central atrium</li><li><b>2</b>{floor === 0 ? 'Follow the room signs' : accessible ? `Take the lift to Level ${floor}` : `Take the stairs to Level ${floor}`}</li><li><b>3</b>Your destination will be highlighted</li></ol><button onClick={()=>setDestination('')}>End route</button></div>}
      <p className="map-disclaimer">Prototype navigation concept only. Follow official building signage and emergency instructions while on campus.</p></div></section>
}

function App() {
  const getPage = () => window.location.hash.slice(1) || 'home'
  const [page, setPage] = useState(getPage)
  useEffect(() => { const update = () => setPage(getPage()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  const navigate = (target) => { window.location.hash = target; setPage(target); window.scrollTo({top:0,behavior:'smooth'}) }
  useEffect(() => { document.title = page === 'navigate' ? 'Navigate N79 | Griffith University' : page === 'about' ? 'About N79 | Griffith University' : page === 'login' ? 'Student Login | N79 Navigator' : 'N79 Navigator | Griffith University' }, [page])
  return <main><Header navigate={navigate} page={page}/>{page === 'login' ? <Login navigate={navigate}/> : page === 'about' ? <About navigate={navigate}/> : page === 'navigate' ? <Navigator/> : <Home navigate={navigate}/>}</main>
}
export default App
