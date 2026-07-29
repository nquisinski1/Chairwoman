import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, project), "utf8");

test("uses the approved Chairwoman editorial typography", async () => {
  const [css, component, layout] = await Promise.all([
    source("app/globals.css"),
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/layout.tsx"),
  ]);
  assert.match(component, /<em>Nina Quisinski<\/em>/);
  assert.match(css, /\.ne-hero h1 em\s*\{[^}]*font-family:\s*"Bodoni Moda"/s);
  assert.match(css, /\.ne-site\s*\{[^}]*font-family:\s*"Montserrat"/s);
  assert.match(layout, /family=Bodoni\+Moda/);
  assert.match(layout, /family=Montserrat/);
});

test("keeps the approved institutional palette", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /--ivory:\s*#f7f2eb/i);
  assert.match(css, /--burgundy:\s*#4b1f2a/i);
  assert.match(css, /--rose-gold:\s*#b77a76/i);
  assert.match(css, /--mineral-blue:\s*#2d4f5a/i);
  assert.match(css, /--forest-green:\s*#17351f/i);
  assert.match(css, /--graphite:\s*#212121/i);
});

test("makes every public root exclusively Chairwoman", async () => {
  for (const page of ["app/page.tsx", "app/pt/page.tsx", "app/en/page.tsx"]) {
    const file = await source(page);
    assert.match(file, /ChairwomanLanding/);
    assert.doesNotMatch(file, /NinaLanding/);
  }
});

test("keeps former brand routes as root-only compatibility redirects", async () => {
  for (const page of ["la-socia", "lifestyle", "my-book", "my-story", "newsletter", "press"]) {
    assert.match(await source(`app/${page}/page.tsx`), /redirect\("\/"\)/);
  }
  assert.match(await source("app/chairwoman/page.tsx"), /redirect\("\/"\)/);
  assert.match(await source("app/pt/chairwoman/page.tsx"), /redirect\("\/pt\/"\)/);
  assert.match(await source("app/en/chairwoman/page.tsx"), /redirect\("\/en\/"\)/);
});

test("maps canonical language paths to the dedicated roots", async () => {
  const content = await source("app/_content/chairwoman.ts");
  assert.match(content, /es:\s*"\/"/);
  assert.match(content, /pt:\s*"\/pt\/"/);
  assert.match(content, /en:\s*"\/en\/"/);
  assert.doesNotMatch(content, /es:\s*"\/chairwoman\/"/);
});

test("includes the approved mark and documentary photography", async () => {
  for (const asset of [
    "public/brand/nina-chairwoman-mark.svg",
    "public/images/nina-chairwoman-opening-2025.jpg",
    "public/images/nina-chairwoman-mandate.jpg",
    "public/images/nina-press-pbid.jpg",
  ]) await access(new URL(asset, project));
});
