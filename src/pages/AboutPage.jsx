import campusBackground from '../assets/images/griffith-campus.jpg'
import ArrowIcon from '../components/ArrowIcon'

const buildingStats = [
  ['6,000 m²', 'of adaptable learning and research space'],
  ['Six levels', 'of multi-functional teaching facilities'],
  ['10 m high', 'specialised high-bay laboratory'],
]

const buildingFeatures = [
  ['High-bay laboratory', 'An indoor drone fly-zone with cranes and gantries, large enough to suspend a lightweight aircraft or vehicle.'],
  ['Simulation facilities', 'Virtual and augmented reality environments support scenario planning and problem solving.'],
  ['Flexible learning', 'Workshops, specialised laboratories, informal learning areas and a central atrium bring students together.'],
  ['Disaster resilience', 'Specialist spaces support exercises, planning, training and simulated emergency response.'],
]

/** Background and facilities summary based on Griffith's published N79 pages. */
export default function AboutPage({ navigate }) {
  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{ '--campus-image': `url(${campusBackground})` }}
      >
        <div>
          <p className="campus-label light">Discover N79</p>
          <h1>Built for ideas<br />that move.</h1>
          <p>
            Engineering, technology and aviation come together in one of
            Nathan campus&apos;s most innovative learning environments.
          </p>
          <button className="primary" onClick={() => navigate('navigate')}>
            Explore rooms &amp; labs <ArrowIcon />
          </button>
        </div>
      </section>

      <section className="about-intro">
        <span className="section-tag">The building</span>
        <div>
          <h2>Henry Smerdon Engineering, Technology and Aviation</h2>
          <p>
            N79 is a landmark learning and teaching building at Griffith
            University&apos;s Nathan campus. Its adaptable spaces connect hands-on
            experimentation, teaching and industry-focused problem solving.
          </p>
        </div>
      </section>

      <section className="feature-stats">
        {/* This loop turns each building statistic into one summary card. */}
        {buildingStats.map(([value, label]) => (
          <article key={value}><strong>{value}</strong><p>{label}</p></article>
        ))}
      </section>

      <section className="inside">
        <div className="inside-art"><span>N79</span></div>
        <div>
          <span className="section-tag">Inside N79</span>
          <h2>Designed to test, make and simulate.</h2>
          <ul>
            {/* This loop keeps repeated feature markup consistent and easy to edit. */}
            {buildingFeatures.map(([title, description]) => (
              <li key={title}><b>{title}</b><span>{description}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta">
        <div><p className="campus-label light">Ready to explore?</p><h2>See N79 for yourself.</h2></div>
        <button className="light-btn" onClick={() => navigate('navigate')}>
          Open room directory <ArrowIcon />
        </button>
      </section>

      <footer>
        <p>Information sourced from Griffith University.</p>
        <div>
          <a href="https://news.griffith.edu.au/2020/02/25/engineering-students-make-the-most-of-n79-their-new-home-at-nathan/" target="_blank" rel="noreferrer">Building story</a>
          <a href="https://www.griffith.edu.au/research/disaster-network/facilities" target="_blank" rel="noreferrer">N79 facilities</a>
          <a href="https://www.griffith.edu.au/__data/assets/pdf_file/0038/1259993/24MAP_GEN_NAT.pdf" target="_blank" rel="noreferrer">Campus map</a>
        </div>
      </footer>
    </div>
  )
}
