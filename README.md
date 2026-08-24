# N79 Navigator

N79 Navigator is a React prototype for finding rooms, laboratories and useful campus information inside Griffith University's Henry Smerdon Engineering, Technology and Aviation building at Nathan.

## Features

- Level 1–5 floor-plan directory
- Searchable room and laboratory information
- Clickable room markers and responsive detail panels
- About N79 page based on published Griffith information
- Griffith Wi-Fi connection guide
- Prototype student, staff and guest login screen
- Responsive mobile navigation

## Project structure

```text
src/
├── assets/
│   ├── branding/       Official logo asset
│   ├── floor-plans/    N79 Level 1–5 plan images
│   ├── images/         Optimised website photography
│   └── legacy/         Unused starter/source assets kept for reference
├── components/         Reusable header, icons and map panels
├── data/               Room coordinates, descriptions and Wi-Fi instructions
├── pages/              One React component for each screen
├── styles/             Application styles
├── App.jsx             Page routing and document titles
├── index.css           Browser defaults
└── main.jsx            React entry point
```

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Useful checks:

```powershell
npm.cmd run lint
npm.cmd run build
```

## Prototype notes

- Navigation uses URL hashes such as `#navigate`, so it works without a server-side router.
- Login is a visual prototype. It does not send or store credentials and must be connected to an approved Griffith authentication service before release.
- The working student demo uses `s123456` with password `123456`. These values are visible in front-end code and are only for classroom demonstration.
- A successful demo login saves only an authentication flag in `localStorage`, so it remains active across pages and browser restarts until Logout is selected.
- Room names, references and hotspot positions should be checked against approved N79 building records before production use.
- Current room visuals are floor-plan references. Replace them with approved room photographs in `src/assets/rooms/` when available.
- The maps are for room discovery only, not emergency evacuation.

## Information sources

- [Griffith N79 building story](https://news.griffith.edu.au/2020/02/25/engineering-students-make-the-most-of-n79-their-new-home-at-nathan/)
- [Griffith facilities](https://www.griffith.edu.au/research/disaster-network/facilities)
- [Griffith Wi-Fi support](https://www.griffith.edu.au/internet-access/wifi/getting-connected)
