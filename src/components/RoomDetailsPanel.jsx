/** Detailed third-column panel shown after a room is selected. */
export default function RoomDetailsPanel({ roomNumber, floor, room, onClose }) {
  return (
    <aside className="room-panel">
      <article className="room-details">
        <div className="detail-label">Room information</div>

        <div className="room-photo">
          <img src={room.image} alt={`Floor-plan preview for ${room.name}`} />
          <span>Floor-plan reference</span>
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
