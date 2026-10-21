How to build and host CrystalSMP
================================

This download is a build-capable website project. It contains ordinary HTML pages,
a shared stylesheet, a favicon, and a Vite configuration. You can host the HTML
files directly, or use the build commands below to create a production folder.

Option A — Build the production website (recommended)
----------------------------------------------------
Requirements: Node.js 20.19+ (or Node.js 22.12+) and npm.

1. Open a terminal in this folder.
2. Run: npm install
3. Run: npm run build
4. Upload the generated dist folder to your hosting provider.

To work on the site locally, run: npm run dev
To preview a production build locally, run: npm run preview

Option B — Host the HTML directly
---------------------------------
1. Upload only index.html, the other exported .html page files, styles.css, and favicon.svg.
2. Keep index.html at the host root and keep the other HTML pages beside it.
3. Do not upload folio.json, because visitors do not need the editable project backup.

Hosting providers
-----------------
- Netlify: deploy the dist folder after building. For direct hosting, upload only the site HTML files, styles.css, and favicon.svg.
- Cloudflare Pages: use npm run build as the build command and dist as the output directory.
- GitHub Pages: build the project and publish the contents of dist.
- Another web host: upload the contents of dist, or use the direct-hosting option above.

Project editing
---------------
- folio.json is the editable Folio project backup. Visitors do not need it.
- To edit this site in Folio, choose Import project and select this ZIP, or select folio.json.
- The HTML pages are plain files and can also be edited in a code editor.

Notes
-----
- Only publish information you are happy for anyone to see.
- Buttons that send a message open the visitor's email app. The site does not store those messages.
- Typefaces load from Google Fonts when a visitor is online. Offline, the pages use backup fonts.
