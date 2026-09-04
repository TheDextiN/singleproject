import { floorMarkers, floorPlans, rooms } from '../data/rooms'

/**
 * Displays the supplied floor plan and positions interactive room hotspots over it.
 * Hotspot coordinates come from data/rooms.js rather than being hard-coded in JSX.
 */
export default function FloorMap({ floor, selectedRoom, onSelectRoom }) {
  return (
    <div className="floor-map real-plan" aria-label={`Interactive N79 Level ${floor} map`}>
      <img
        src={floorPlans[floor]}
        alt={`Interactive N79 Level ${floor} map showing numbered rooms and laboratories`}
      />

      {/* This loop places every clickable room marker at its saved x/y position. */}
      {floorMarkers[floor].map(([roomNumber, x, y]) => (
        <button
          key={roomNumber}
          className={`map-hotspot${selectedRoom === roomNumber ? ' selected' : ''}`}
          style={{ left: `${x}%`, top: `${y}%` }}
          onClick={() => onSelectRoom(roomNumber)}
          aria-label={`Select ${rooms[roomNumber].name}`}
        >
          <span>{roomNumber}</span>
        </button>
      ))}

      <div className="plan-legend">
        <span><i className="legend-point" />Room or lab</span>
        <span><i className="legend-access">♿</i>Accessible</span>
        <span><i className="legend-stairs">↗</i>Stairs</span>
      </div>
    </div>
  )
}
