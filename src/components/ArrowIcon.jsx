/**
 * Small arrow shared by buttons and links.
 * aria-hidden keeps decorative SVGs out of screen-reader output.
 */
export default function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
