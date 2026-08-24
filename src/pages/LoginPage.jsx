import { useState } from 'react'
import campusBackground from '../assets/images/griffith-campus.jpg'
import ArrowIcon from '../components/ArrowIcon'

const loginRoles = [
  ['student', 'Student'],
  ['staff', 'Staff'],
  ['guest', 'Guest'],
]

/**
 * Prototype role-based sign-in screen.
 * It deliberately does not send credentials until real Griffith SSO is connected.
 */
export default function LoginPage({ navigate }) {
  const [role, setRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

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
    setMessage('Demo mode: connect this form to Griffith single sign-on before launch.')
  }

  return (
    <section
      className="login-page"
      style={{ '--campus-image': `url(${campusBackground})` }}
    >
      <div className="login-card">
        <button className="back" onClick={() => navigate('home')}>← Back to home</button>
        <p className="campus-label">N79 access</p>
        <h1>Choose your login.</h1>
        <p className="intro">Select how you&apos;re visiting Griffith today.</p>

        <div className="role-tabs">
          {loginRoles.map(([id, label]) => (
            <button
              className={role === id ? 'active' : ''}
              key={id}
              type="button"
              onClick={() => setRole(id)}
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
          <span>●</span>
          <p><strong>Prototype sign-in</strong><br />This project does not send or store credentials.</p>
        </div>
      </div>
    </section>
  )
}
