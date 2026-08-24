import level1Plan from '../assets/floor-plans/level-1.png'
import level2Plan from '../assets/floor-plans/level-2.png'
import level3Plan from '../assets/floor-plans/level-3.png'
import level4Plan from '../assets/floor-plans/level-4.png'
import level5Plan from '../assets/floor-plans/level-5.png'

/** Floor-plan image used for each level selector. */
export const floorPlans = {
  1: level1Plan,
  2: level2Plan,
  3: level3Plan,
  4: level4Plan,
  5: level5Plan,
}

/**
 * Marker coordinates are percentages measured from the top-left of each plan.
 * Keeping them separate from room descriptions makes map positions easy to tune.
 * Format: [room number, horizontal %, vertical %]
 */
export const floorMarkers = {
  1: [[1, 53.3, 61.2], [2, 51.5, 49.3], [3, 64, 46.3], [4, 75.4, 62.5]],
  2: [[5, 68.3, 64.2], [6, 44.2, 51.5], [7, 29.9, 51.8], [8, 55.8, 46]],
  3: [[9, 57.5, 48.8]],
  4: [[10, 68.3, 64], [11, 36.4, 51.8], [12, 55.7, 46]],
  5: [[13, 60.4, 55.5], [14, 37.5, 51.5], [15, 55.7, 46]],
}

/**
 * Details shown in the room directory and information panel.
 * The plan image acts as a temporary visual until verified room photos are supplied.
 */
export const rooms = {
  1: { name: 'Central Atrium', code: 'N79 Level 1', type: 'Building hub', image: level1Plan, detail: 'The main shared space connecting the lower levels, teaching rooms and building facilities.' },
  2: { name: 'Engineering High-Bay Lab', code: 'N79 1.10', type: 'Specialist laboratory', image: level1Plan, detail: 'A 10-metre-high engineering laboratory designed for large-scale testing, demonstrations and drone activities.' },
  3: { name: 'Materials Testing Lab', code: 'N79 1.12', type: 'Engineering laboratory', image: level1Plan, detail: 'A practical teaching space for testing materials, structures and engineering solutions.' },
  4: { name: 'Engineering Workshop', code: 'N79 1.15', type: 'Workshop', image: level1Plan, detail: 'A hands-on workshop supporting fabrication, prototyping and practical engineering activities.' },
  5: { name: 'Student Lounge and Kitchen', code: 'N79 Level 2', type: 'Student facility', image: level2Plan, detail: 'An informal space for breaks, group discussion and multidisciplinary collaboration.' },
  6: { name: 'Engineering Lecture Theatre', code: 'N79 2.05', type: 'Teaching room', image: level2Plan, detail: 'A flexible teaching room used for engineering, technology and aviation classes and presentations.' },
  7: { name: 'West Collaboration Zone', code: 'N79 Level 2 West', type: 'Collaboration space', image: level2Plan, detail: 'Open project space for student teamwork, informal learning and industry conversations.' },
  8: { name: 'Aviation Learning Studio', code: 'N79 Level 2', type: 'Teaching studio', image: level2Plan, detail: 'A technology-enabled studio supporting aviation teaching and collaborative learning.' },
  9: { name: 'Planning and Design Studio', code: 'N79 3.04', type: 'Design studio', image: level3Plan, detail: 'A flexible flat-floor studio for design work, scenario planning and project-based learning.' },
  10: { name: 'Industry Project Zone', code: 'N79 Level 4', type: 'Industry space', image: level4Plan, detail: 'Meeting and project spaces where students can collaborate with and present to industry partners.' },
  11: { name: 'Makerspace', code: 'N79 Level 4 West', type: 'Prototyping lab', image: level4Plan, detail: 'A practical prototyping environment for developing and testing new ideas.' },
  12: { name: 'VR and AR Simulation Studio', code: 'N79 Level 4', type: 'Simulation studio', image: level4Plan, detail: 'Virtual and augmented reality facilities for problem solving, design simulation and training exercises.' },
  13: { name: 'Cyber Security Lab', code: 'N79 5.10', type: 'Computer laboratory', image: level5Plan, detail: 'A specialised technology lab supporting cyber security teaching, cryptography and secure communications.' },
  14: { name: 'Computer Learning Lab', code: 'N79 5.16', type: 'Computer laboratory', image: level5Plan, detail: 'A modern computer laboratory for Information Technology classes and practical activities.' },
  15: { name: 'IT Teaching Lab', code: 'N79 5.17', type: 'Teaching laboratory', image: level5Plan, detail: 'A technology-rich teaching room for software, computing and collaborative class work.' },
}

/** Flattened room records make directory searching straightforward. */
export const searchableRooms = Object.entries(floorMarkers).flatMap(
  ([level, markers]) => markers.map(([number]) => ({
    number,
    ...rooms[number],
    floor: Number(level),
  })),
)
