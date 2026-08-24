/**
 * Successful demo logins land here.
 * This placeholder can be replaced once the student-page requirements are known.
 */
export default function StudentPage({ navigate, onLogout }) {
  return (
    <section className="student-page">
      <div className="student-welcome">
        <p className="campus-label">Student area · N79</p>
        <span className="success-mark" aria-hidden="true">✓</span>
        <h1>Login successful.</h1>
        <p>
          Welcome, <strong>s123456</strong>. Your new student page is ready for
          the features and content you want to add next.
        </p>
        <div className="student-actions">
          <button className="primary" onClick={() => navigate('navigate')}>Open rooms &amp; labs</button>
          <button className="student-logout" onClick={onLogout}>Log out</button>
        </div>
      </div>
    </section>
  )
}
