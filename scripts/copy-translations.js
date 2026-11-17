// scripts/copy-translations.js
const fs = require("fs");
const path = require("path");

const locales = ["hi", "fr", "de", "es", "zh", "ar", "pt", "ja", "ru"];
const srcDir = ".next";
const outDir = path.join("public", "translations");

fs.mkdirSync(outDir, { recursive: true });

let copied = 0;
for (const l of locales) {
  const src = path.join(srcDir, `${l}.json`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outDir, `${l}.json`));
    copied++;
  } else if (fs.existsSync(path.join(outDir, `${l}.json`))) {
    console.warn(`[copy-translations] ${src} not generated, keeping committed public/translations/${l}.json`);
  } else {
    console.error(`[copy-translations] No translation file for ${l} anywhere`);
    process.exit(1);
  }
}

console.log(`[copy-translations] Copied ${copied} files to ${outDir}`);