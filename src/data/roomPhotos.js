/**
 * Vite converts every optimised room photo into a production-ready URL.
 * Keeping this lookup here avoids dozens of repetitive imports in rooms.js.
 */
const photoModules = import.meta.glob('../assets/rooms/room-*/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

/**
 * reduce visits each imported photo and groups it by the room number in its
 * folder name, for example room-06/photo-02.jpg becomes roomPhotos[6].
 */
export const roomPhotos = Object.entries(photoModules).reduce(
  (groups, [path, source]) => {
    const roomMatch = path.match(/room-(\d+)/)

    if (!roomMatch) return groups

    const roomNumber = Number(roomMatch[1])
    groups[roomNumber] ??= []
    groups[roomNumber].push({ path, source })
    return groups
  },
  {},
)

/**
 * forEach visits every room gallery. sort orders its numbered file paths, then
 * map removes those helper paths and keeps only the image URLs used by React.
 */
Object.entries(roomPhotos).forEach(([roomNumber, photos]) => {
  roomPhotos[roomNumber] = photos
    .sort((first, second) => first.path.localeCompare(second.path))
    .map((photo) => photo.source)
})
