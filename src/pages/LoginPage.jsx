import { useState } from 'react'
import campusBackground from '../assets/images/griffith-campus.jpg'
import ArrowIcon from '../components/ArrowIcon'

const loginRoles = [
  ['student', 'Student'],
  ['staff', 'Staff'],
  ['guest', 'Guest'],
]

// Demo credentials requested for the prototype. Never use hard-coded credentials in production.
const demoStudent = {
  username: 's123456',
  password: '123456',
}

/**
 * Prototype role-based sign-in screen.
 * It deliberately does not send credentials until real Griffith SSO is connected.
 */
export default function LoginPage({ navigate, onLogin }) {
  const [role, setRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')

  const fieldLabel = role === 'student'
    ? 'Griffith student number'
    : role === 'staff'
      ? 'Griffith staff username'
      : 'Guest email address'

  const fieldPlaceholder = role === 'student'
    ? 'e.g. s1234567'
    : role === 'staff'
      ? 'Enter staff username'
      : 'name@example.com'

  const handleSubmit = (event) => {
    event.preventDefault()

    // Only the requested student demo has a working credential check for now.
    const studentMatches = role === 'student'
      && loginId.trim().toLowerCase() === demoStudent.username
      && password === demoStudent.password

    if (studentMatches) {
      // App owns the persistent session, so every page sees the same login state.
      onLogin()
      return
    }

    if (role === 'student') {
      setMessage('Student number or password is incorrect. Please try again.')
      return
    }

    setMessage(`${role === 'staff' ? 'Staff' : 'Guest'} login is a visual prototype and is not connected yet.`)
  }

  // Changing roles also clears credentials so values cannot carry into another form.
  const changeRole = (nextRole) => {
    setRole(nextRole)
    setLoginId('')
    setPassword('')
    setMessage('')
  }

  return (
    <section
      className="login-page"
      style={{ '--campus-image': `url(${campusBackground})` }}
    >
      <div className="login-card">
        <button className="back" onClick={() => navigate('home')}>&larr; Back to home</button>
        <p className="campus-label">N79 access</p>
        <h1>Choose your login.</h1>
        <p className="intro">Select how you&apos;re visiting Griffith today.</p>

        <div className="role-tabs">
          {/* This loop creates one tab from every role in the loginRoles array. */}
          {loginRoles.map(([id, label]) => (
            <button
              className={role === id ? 'active' : ''}
              key={id}
              type="button"
              onClick={() => changeRole(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-id">{fieldLabel}</label>
          <input
            id="login-id"
            name="login-id"
            autoComplete="username"
            placeholder={fieldPlaceholder}
            value={loginId}
            onChange={(event) => setLoginId(event.target.value)}
            required
          />

          <div className="password-row">
            <label htmlFor="password">Password</label>
            <button type="button" onClick={() => setShowPassword((show) => !show)}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="form-meta">
            <label><input type="checkbox" /> Remember me</label>
            <a href="https://www.griffith.edu.au/password-management" target="_blank" rel="noreferrer">
              Forgot password?
            </a>
          </div>

          <button className="primary full" type="submit">
            {role === 'guest' ? 'Continue as guest' : 'Sign in and continue'}
            <ArrowIcon />
          </button>
          {message && <p className="form-message" role="status">{message}</p>}
        </form>

        <div className="secure-note">
          <span>&bull;</span>
          <p><strong>Prototype sign-in</strong><br />This project does not send or store credentials.</p>
        </div>
      </div>
    </section>
  )
}
