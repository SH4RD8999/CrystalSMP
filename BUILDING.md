# Build your exported Folio website

## Requirements
- Node.js 20.19+ (or Node.js 22.12+)
- npm

## Commands

`npm install` installs the build tool.

`npm run dev` starts a local development server.

`npm run build` builds every page into the `dist/` folder. Upload the contents of `dist/` to your static host.

`npm run preview` previews the production build locally.

## Deploy settings
- Build command: `npm run build`
- Output/publish directory: `dist`

For direct static hosting without a build step, upload only `index.html`, the other page HTML files, `styles.css`, and `favicon.svg`. Do not publish `folio.json`, which is the editable project backup.
