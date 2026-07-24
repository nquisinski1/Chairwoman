import { readFile, writeFile } from "node:fs/promises";

const pages = [
  ["out/index.html", "es-PA"],
  ["out/pt/index.html", "pt-BR"],
  ["out/en/index.html", "en-US"],
  ["out/chairwoman/index.html", "es-PA"],
  ["out/pt/chairwoman/index.html", "pt-BR"],
  ["out/en/chairwoman/index.html", "en-US"],
];

for (const [path, language] of pages) {
  const source = await readFile(path, "utf8");
  const htmlTag = source.match(/<html lang="[^"]+">/i);

  if (!htmlTag) {
    throw new Error(`Could not localize the HTML language for ${path}`);
  }

  const localized = source.replace(htmlTag[0], `<html lang="${language}">`);
  await writeFile(path, localized);
}
