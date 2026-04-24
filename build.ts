import * as sass from "sass";

const result = sass.compile("src/styles/style.scss");
await Bun.write("src/public/themes/degoog-theme/style.css", result.css);
console.log("SCSS compiled successfully.");

const buildResult = await Bun.build({
  entrypoints: [
    "src/client/app.ts",
    "src/client/modules/settings/settings.ts",
  ],
  outdir: "src/public",
  target: "browser",
  format: "esm",
  splitting: true,
  minify: true,
  sourcemap: true,
});

if (!buildResult.success) {
  console.error("Build failed:", buildResult.logs);
  process.exit(1);
}

console.log("TypeScript bundled successfully.");