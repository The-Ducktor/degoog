import sass from "sass";

// --- SCSS ---
const result = sass.compile("src/styles/style.scss");
await Bun.write("src/public/themes/degoog-theme/style.css", result.css);
console.log("SCSS compiled successfully.");

// --- TypeScript bundling ---

// --- app bundle ---
await Bun.build({
  entrypoints: ["src/client/app.ts"],
  outdir: "src/public",
  bundle: true,
  format: "esm",
  splitting: true,
  minify: true,

  target: "browser",
  naming: {
    entry: "app.js",
  },
});

// --- settings bundle
await Bun.build({
  entrypoints: ["src/client/modules/settings/settings.ts"],
  outdir: "src/public",
  bundle: true,
  format: "esm",
  target: "browser",
  splitting: false,
  minify: true,
  naming: {
    entry: "settings-page.js",
  },
});
console.log("TypeScript bundled successfully.");
