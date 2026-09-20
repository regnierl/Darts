# Darts

An interactive darts game application built with React, TypeScript and Redux Toolkit.
It supports **Cricket**, **301** and **501**, and can run in a browser or be packaged
as a Windows application with Electron.

## Features

- Create a game with 1 to 5 players.
- Choose between **Cricket**, **301** and **501**.
- Enter throws by clicking directly on a dartboard.
- Support for singles, doubles, triples and Bull.
- Limit of three throws per turn.
- Remove a throw before validating the turn.
- Automatic turn progression and turn counter.
- Player table with Cricket marks and score tracking.
- Turn validation and automatic score calculation.
- Application menu with an About dialog.
- Light and dark themes, persisted between browser sessions.
- Portable Windows version generated with Electron Builder.

## Technologies

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Electron](https://www.electronjs.org/)
- [Electron Builder](https://www.electron.build/)

## Prerequisites

- Node.js and npm installed.
- Windows is required to produce the Windows executable with the Electron scripts
  provided by the project.

## Installation

From the project directory:

```bash
npm install
```

## Run In Development

```bash
npm run dev
```

Vite will display the local application address, usually
`http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Checks TypeScript and generates the Vite build in `dist/`. |
| `npm run preview` | Serves the generated Vite build locally. |
| `npm run lint` | Runs ESLint on the project. |
| `npm run electron` | Starts Electron with `index.js` as its entry point. |
| `npm run package` | Creates a Windows x64 package with Electron Packager. |
| `npm run dist` | Creates a Windows distribution with Electron Builder. |
| `npm run buildexe` | Builds the Windows application with Electron Builder. |

## Build The Windows Executable

1. Install the dependencies:

	 ```bash
	 npm install
	 ```

2. Build the web application:

	 ```bash
	 npm run build
	 ```

3. Check `dist/index.html`. To load the generated resources in Electron, asset
   paths must be relative, according to the project configuration.

4. Build the Windows application:

	 ```bash
	 npm run buildexe
	 ```

The Windows build is configured in **portable** mode. Depending on the local
Electron Builder configuration, the generated directory can be found in
`dist/win-unpacked`.

## Implemented Game Rules

### Cricket

The supported targets are Bull and numbers 15 to 20. Each target must be closed
with three marks. Additional marks score points for opponents who have not yet
closed that target.

### 301 et 501

Each player starts with 301 or 501 points. The value of each throw is subtracted
from the player's score. The score is only reduced when the turn total does not
exceed the remaining score.

## Architecture

```text
.
├── public/
│   └── target.png              # Interactive dartboard image
├── src/
│   ├── components/
│   │   ├── Header/             # Menu, new game and theme
│   │   ├── Footer/             # Current throws and validation
│   │   ├── Modals/             # New game and About dialogs
│   │   ├── TablePlayer/        # Single player display
│   │   ├── TablePlayers/       # Player table
│   │   └── Target/             # Clicked area detection
│   ├── models/                 # Player and Launch types
│   ├── redux/                  # Redux store and slices
│   ├── App.tsx                 # Main composition and theme
│   └── main.tsx                # React entry point
├── index.js                    # Electron window
├── index.html                  # Vite HTML document
├── package.json                # Dependencies and scripts
└── vite.config.ts              # Vite configuration
```

The game state is managed with Redux Toolkit. The `players` slice contains the
players, game type, current player, turn and current throws. The `modals` slice
controls the New Game and About dialogs.

## Current Limitations

- Game data is not saved after closing or reloading the application.
- The theme is persisted, but scores and players are not.
- Executable generation and verification are primarily intended for Windows.

## Quality Checks

Before submitting a change, use the following commands to check the project:

```bash
npm run lint
npm run build
```

## Licence

No license is currently declared in this repository.


