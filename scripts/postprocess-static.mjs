import { readFile, writeFile } from "node:fs/promises";

const pages = [
  ["out/index.html", "es-PA"],
  ["out/pt/index.html", "pt-BR"],
  ["out/en/index.html", "en-US"],
];

for (const [path, language] of pages) {
  const source = await readFile(path, "utf8");
  const localized = source.replace(/<html lang="[^"]+">/i, `<html lang="${language}">`);

  if (localized === source) {
    throw new Error(`Could not localize the HTML language for ${path}`);
  }

  await writeFile(path, localized);
}
