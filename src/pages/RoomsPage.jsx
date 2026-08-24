import { useState } from 'react'
import ArrowIcon from '../components/ArrowIcon'
import FloorMap from '../components/FloorMap'
import RoomDetailsPanel from '../components/RoomDetailsPanel'
import { floorMarkers, rooms, searchableRooms } from '../data/rooms'

/** Main floor directory: filters rooms, changes levels, and manages selection. */
export default function RoomsPage() {
  const [floor, setFloor] = useState(1)
  const [query, setQuery] = useState('')
  const [selectedRoom, setSelectedRoom] = useState(null)

  const normalizedQuery = query.trim().toLowerCase()
  // filter loops through searchable rooms and keeps only text matches.
  const searchResults = normalizedQuery
    ? searchableRooms.filter((room) => (
        `${room.name} ${room.code} ${room.type} level ${room.floor}`
          .toLowerCase()
          .includes(normalizedQuery)
      )).slice(0, 6)
    : []

  // A search result may be on another floor, so update floor and room together.
  const selectSearchResult = (room) => {
    setFloor(room.floor)
    setSelectedRoom(room.number)
    setQuery('')
  }

  // Clear the old selection when switching plans to avoid showing stale details.
  const changeFloor = (level) => {
    setFloor(level)
    setSelectedRoom(null)
  }

  return (
    <section className={`navigator-page${selectedRoom ? ' has-details' : ''}`}>
      <aside className="nav-panel">
        <p className="campus-label">N79 Room Directory</p>
        <h1>Explore rooms and labs</h1>
        <p className="nav-intro">
          Choose a level to see its classrooms, laboratories and shared facilities.
        </p>

        <div className="search-box">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search N79"
            aria-label="Search N79 rooms"
          />
          {query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}
        </div>

        {searchResults.length > 0 && (
          <div className="search-results">
            {/* This loop renders the filtered room matches below the search field. */}
            {searchResults.map((room) => (
              <button key={room.number} onClick={() => selectSearchResult(room)}>
                <span><b>{room.name}</b><small>{room.code} · Level {room.floor}</small></span>
                <ArrowIcon />
              </button>
            ))}
          </div>
        )}

        <div className="floor-select">
          <span>Choose a level</span>
          <div>
            {/* This loop creates one level button for every available floor plan. */}
            {Object.keys(floorMarkers).map((level) => (
              <button
                className={floor === Number(level) ? 'active' : ''}
                key={level}
                onClick={() => changeFloor(Number(level))}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="places">
          <h2>Level {floor} rooms and labs</h2>
          {/* This loop lists only rooms belonging to the currently selected level. */}
          {floorMarkers[floor].map(([roomNumber]) => (
            <button
              className={selectedRoom === roomNumber ? 'active' : ''}
              key={roomNumber}
              onClick={() => setSelectedRoom(roomNumber)}
            >
              <span><b>{rooms[roomNumber].name}</b><small>{rooms[roomNumber].code}</small></span>
              <ArrowIcon />
            </button>
          ))}
        </div>

      </aside>

      <div className="map-panel">
        <div className="map-toolbar">
          <div><span>Henry Smerdon Building</span><b>N79 · Level {floor}</b></div>
          <span className="prototype-badge">Project floor plan</span>
        </div>
        <FloorMap
          floor={floor}
          selectedRoom={selectedRoom}
          onSelectRoom={setSelectedRoom}
        />
        <p className="map-disclaimer">
          Use this project map for room information only. Always follow official
          building signage and emergency instructions while on campus.
        </p>
      </div>

      {selectedRoom && (
        <RoomDetailsPanel
          roomNumber={selectedRoom}
          floor={floor}
          room={rooms[selectedRoom]}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  )
}
