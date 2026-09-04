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
          {/* The main action becomes the room directory after a user signs in. */}
          <button
            className="primary"
            onClick={() => navigate(isLoggedIn ? 'navigate' : 'login')}
          >
            {isLoggedIn ? 'Explore rooms & labs' : 'Login'} <ArrowIcon />
          </button>
          <button className="secondary-light" onClick={() => navigate('wifi')}>
            Connect to campus Wi-Fi
          </button>
        </div>

        <div className="home-quick">
          {/* This shortcut changes from building information to the signed-in profile. */}
          <button onClick={() => navigate(isLoggedIn ? 'student' : 'about')}>
            <b>{isLoggedIn ? 'My profile' : 'About N79'}</b>
            <span>{isLoggedIn ? 'Open your student area →' : 'Learn about the building →'}</span>
          </button>
          <a
            href="https://www.griffith.edu.au/about-griffith/campuses-facilities/nathan"
            target="_blank"
            rel="noreferrer"
          >
            <b>Nathan campus</b>
            <span>Open the official campus page ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
