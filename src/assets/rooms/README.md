# Room photographs

The supplied N79 photographs are organised into one folder per map point:
`room-01/` through `room-15/`. Each image has been resized and compressed for
the website while the original files remain in the temporary `updates` folder.

`src/data/roomPhotos.js` automatically groups files from these folders, so a new
`.jpg` can be added to the relevant folder without writing another import. Keep
the `photo-01.jpg`, `photo-02.jpg` naming pattern to control gallery order.
