import level1Plan from '../assets/floor-plans/level-1.png'
import level2Plan from '../assets/floor-plans/level-2.png'
import level3Plan from '../assets/floor-plans/level-3.png'
import level4Plan from '../assets/floor-plans/level-4.png'
import level5Plan from '../assets/floor-plans/level-5.png'
import { roomPhotos } from './roomPhotos'

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
 * Details shown in the room directory and information panel. The supplied
 * photos are grouped by the numbered points on each floor plan.
 */
export const rooms = {
  1: {
    name: 'Central Atrium',
    code: 'N79 Level 1',
    type: 'Building hub',
    images: roomPhotos[1],
    detail: 'The main shared space connecting teaching rooms, laboratories and building facilities.',
  },
  2: {
    name: 'Engineering and Aviation Showcase',
    code: 'N79 Level 1',
    type: 'Engineering learning space',
    images: roomPhotos[2],
    detail: 'A technology-rich space used for practical engineering demonstrations, aviation learning and student projects.',
  },
  3: {
    name: 'Virtual Reality Studio',
    code: 'N79 1.10',
    type: 'Immersive learning studio',
    images: roomPhotos[3],
    detail: 'An immersive teaching space supporting virtual-reality demonstrations, simulation and collaborative learning.',
  },
  4: {
    name: 'Disaster Management Suite',
    code: 'N79 Level 1',
    type: 'Simulation and project space',
    images: roomPhotos[4],
    detail: 'A specialist suite for disaster and emergency management teaching, scenario exercises and industry collaboration.',
  },
  5: {
    name: 'Flexible Teaching Studios',
    code: 'N79 2.03A–2.03B',
    type: 'Teaching studio',
    images: roomPhotos[5],
    detail: 'Flexible rooms that can support classes, presentations, group work and technology-enabled demonstrations.',
  },
  6: {
    name: 'Makerspace',
    code: 'N79 Level 2',
    type: 'Prototyping laboratory',
    images: roomPhotos[6],
    detail: 'A hands-on makerspace with practical work areas and equipment for building, testing and refining ideas.',
  },
  7: {
    name: 'Print Lab',
    code: 'N79 Level 2',
    type: 'Specialist laboratory',
    images: roomPhotos[7],
    detail: 'A specialist print and production space supporting practical project work and prototype development.',
  },
  8: {
    name: 'Engineering Teaching Laboratories',
    code: 'N79 2.13A–2.15B',
    type: 'Teaching laboratories',
    images: roomPhotos[8],
    detail: 'A collection of adaptable laboratories for practical classes, technical exercises and supervised project work.',
  },
  9: {
    name: 'Level 3 Learning Commons',
    code: 'N79 Level 3',
    type: 'Learning and collaboration space',
    images: roomPhotos[9],
    detail: 'An open level with informal learning areas designed for individual study, group work and collaboration.',
  },
  10: {
    name: 'Level 4 Collaboration Hub',
    code: 'N79 Level 4',
    type: 'Student collaboration space',
    images: roomPhotos[10],
    detail: 'Comfortable shared areas for project meetings, informal study and conversation between classes.',
  },
  11: {
    name: 'Cyber-Physical and Mechatronics Labs',
    code: 'N79 4.07–4.10',
    type: 'Technology laboratories',
    images: roomPhotos[11],
    detail: 'Specialist laboratories supporting cyber-physical systems, mechatronics and practical technology learning.',
  },
  12: {
    name: 'Computing and Networking Labs',
    code: 'N79 4.15–4.19',
    type: 'Computer laboratories',
    images: roomPhotos[12],
    detail: 'Computer, networking and flight-learning spaces equipped for practical classes and technical simulations.',
  },
  13: {
    name: 'Level 5 Science Laboratory',
    code: 'N79 Level 5',
    type: 'Science teaching laboratory',
    images: roomPhotos[13],
    detail: 'A modern laboratory environment supporting supervised science teaching and practical activities.',
  },
  14: {
    name: 'Chemistry Laboratories',
    code: 'N79 Level 5',
    type: 'Chemistry teaching laboratories',
    images: roomPhotos[14],
    detail: 'Purpose-built chemistry laboratories with teaching benches, demonstration equipment and safe practical work areas.',
  },
  15: {
    name: 'Bioscience Laboratories',
    code: 'N79 Level 5',
    type: 'Bioscience teaching laboratories',
    images: roomPhotos[15],
    detail: 'Teaching laboratories configured for bioscience practicals, demonstrations and collaborative investigation.',
  },
}

/**
 * flatMap visits every floor, while the inner map converts each marker into
 * a searchable room record. The final result is one flat array of all rooms.
 */
export const searchableRooms = Object.entries(floorMarkers).flatMap(
  ([level, markers]) => markers.map(([number]) => ({
    number,
    ...rooms[number],
    floor: Number(level),
  })),
)
