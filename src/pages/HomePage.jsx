import campusBackground from '../assets/images/griffith-campus.jpg'
import ArrowIcon from '../components/ArrowIcon'

/** Simple starting point that sends visitors to the project's main tools. */
export default function HomePage({ navigate, isLoggedIn }) {
  return (
    <section
      className="home-stage"
      style={{ '--campus-image': `url(${campusBackground})` }}
    >
      <div className="home-content">
        <p className="campus-label light">Griffith University · Nathan campus</p>
        <h1>Find your way<br />around N79.</h1>
        <p>
          Explore rooms, laboratories and learning spaces inside the Henry
          Smerdon Engineering, Technology and Aviation building.
        </p>

        <div className="home-actions">
          <button className="primary" onClick={() => navigate('navigate')}>
            Explore rooms &amp; labs <ArrowIcon />
          </button>
          <button className="secondary-light" onClick={() => navigate('wifi')}>
            Connect to campus Wi-Fi
          </button>
        </div>

        <div className="home-quick">
          <button onClick={() => navigate('about')}>
            <b>About N79</b>
            <span>Learn about the building →</span>
          </button>
          {/* The account shortcut reflects the same login state as the header. */}
          <button onClick={() => navigate(isLoggedIn ? 'student' : 'login')}>
            <b>{isLoggedIn ? 'My profile' : 'Login'}</b>
            <span>{isLoggedIn ? 'Open your student area →' : 'Student, staff or guest →'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
