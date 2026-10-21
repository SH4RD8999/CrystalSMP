import { defineConfig } from "vite";
import { readdirSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

// Build every exported HTML page as a separate entry point, not just index.html.
const root = process.cwd();
const htmlPages = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".html"))
  .map((entry) => resolve(root, entry.name));

const input = Object.fromEntries(
  htmlPages.map((file) => [basename(file, extname(file)), file]),
);

export default defineConfig({
  // Relative asset URLs also work when the built site is hosted under a subpath.
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: { input },
  },
});
