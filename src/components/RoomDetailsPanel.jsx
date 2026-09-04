import { useState } from 'react'

/** Detailed third-column panel shown after a room is selected. */
export default function RoomDetailsPanel({ roomNumber, floor, room, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0)
  const images = room.images ?? []

  // These functions wrap at either end so the gallery never reaches a dead end.
  const showPreviousPhoto = () => {
    setActivePhoto((current) => (current - 1 + images.length) % images.length)
  }

  const showNextPhoto = () => {
    setActivePhoto((current) => (current + 1) % images.length)
  }

  return (
    <aside className="room-panel">
      <article className="room-details">
        <div className="detail-label">Room information</div>

        <div className="room-gallery">
          <div className="room-photo">
            <img
              src={images[activePhoto] ?? images[0]}
              alt={`${room.name}, photo ${activePhoto + 1} of ${images.length}`}
            />
            <span>{activePhoto + 1} / {images.length}</span>

            {images.length > 1 && (
              <div className="room-photo-controls">
                <button onClick={showPreviousPhoto} aria-label="Show previous room photo">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button onClick={showNextPhoto} aria-label="Show next room photo">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
                </button>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div
              className="room-thumbnails"
              role="group"
              aria-label={`${room.name} photo gallery`}
            >
              {/* This loop creates one selectable thumbnail for every room photo. */}
              {images.map((image, index) => (
                <button
                  className={activePhoto === index ? 'active' : ''}
                  key={image}
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Show room photo ${index + 1}`}
                  aria-pressed={activePhoto === index}
                >
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="room-detail-heading">
          <span className="room-number">{roomNumber}</span>
          <div>
            <small>{room.type}</small>
            <h2>{room.name}</h2>
            <p>{room.code} · Level {floor}</p>
          </div>
        </div>

        <p className="room-description">{room.detail}</p>
        <div className="room-features">
          <span>♿ Accessible via lift</span>
          <span>⌖ Located on Level {floor}</span>
        </div>

        <div className="detail-help">
          <b>Finding this room</b>
          <p>Select the highlighted marker and follow the central grey corridor.</p>
        </div>

        <button onClick={onClose}>← Close room details</button>
      </article>
    </aside>
  )
}
