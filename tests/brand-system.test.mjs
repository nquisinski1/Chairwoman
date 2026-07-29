import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, project), "utf8");
}

test("uses the approved Nina type roles and the dedicated Chairwoman editorial pair", async () => {
  const [css, chairwoman, logo] = await Promise.all([
    source("app/globals.css"),
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/_components/NinaLogo.tsx"),
  ]);

  assert.match(css, /--font-display:\s*"Noto Serif Display"/);
  assert.match(css, /--font-body:\s*"Inter"/);
  assert.match(css, /--font-signature:\s*"Pinyon Script"/);
  assert.ok((css.match(/font-family:\s*var\(--font-signature\)/g) ?? []).length >= 2);
  assert.match(logo, /nina-logo__signature[\s\S]*Nina Quisinski/);
  assert.match(chairwoman, /<em>Nina Quisinski<\/em>/);
  assert.match(css, /\.ne-hero h1 em\s*\{[^}]*font-family:\s*"Bodoni Moda"/s);
  assert.match(css, /\.ne-site\s*\{[^}]*font-family:\s*"Montserrat"/s);
  assert.doesNotMatch(chairwoman, /<em>\{copy\.hero\.titleAccent\}<\/em>/);
});

test("limits the palette to ivory burgundy rose gold mineral blue forest green and graphite", async () => {
  const css = await source("app/globals.css");

  assert.match(css, /--ivory:\s*#f7f2eb/i);
  assert.match(css, /--burgundy:\s*#4b1f2a/i);
  assert.match(css, /--rose-gold:\s*#b77a76/i);
  assert.match(css, /--mineral-blue:\s*#2d4f5a/i);
  assert.match(css, /--forest-green:\s*#17351f/i);
  assert.match(css, /--graphite:\s*#212121/i);
  assert.doesNotMatch(css, /--lux-(?:black|navy|purple|saddle|silver|forest|burgundy|off-white):/i);
});

test("keeps mobile navigation legible and stacks both heroes at iPad width", async () => {
  const css = await source("app/globals.css");

  assert.match(css, /\.nq-mobile-menu > div\s*\{[^}]*background:\s*var\(--graphite\)[^}]*color:\s*var\(--ivory\)/s);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.nq-hero\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.cw-hero\s*\{[^}]*grid-template-columns:\s*1fr/s);
});

test("shows the verified founder and president role in the Chairwoman first fold", async () => {
  const [component, content] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/_content/chairwoman.ts"),
  ]);

  assert.match(component, /className="ne-hero-title-row"[\s\S]*?<p>\{copy\.hero\.role\}<\/p>/);
  assert.match(content, /role:\s*"Fundadora e presidente da Câmara de Comércio e Indústria Brasil–Panamá"/);
  assert.match(content, /role:\s*"Founder and president of the Brazil–Panama Chamber of Commerce and Industry"/);
});

test("removes blocked StepUp claims and redirects archived one-language routes", async () => {
  const appFiles = [];
  async function walk(url) {
    for (const entry of await readdir(url, { withFileTypes: true })) {
      const next = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, url);
      if (entry.isDirectory()) await walk(next);
      else if (/\.(?:ts|tsx)$/.test(entry.name)) appFiles.push(await readFile(next, "utf8"));
    }
  }
  await walk(new URL("app/", project));
  const joined = appFiles.join("\n");
  assert.doesNotMatch(joined, /\bCOO\b|cofundador(?:a)?|co-founder/i);
  assert.doesNotMatch(joined, /portalelegis\.alesc\.sc\.gov\.br/);
  assert.doesNotMatch(joined, /CHAIRMANSHIP/);

  const redirects = {
    "app/la-socia/page.tsx": "/#stepup",
    "app/press/page.tsx": "/#prensa",
    "app/lifestyle/page.tsx": "/#lifestyle",
    "app/newsletter/page.tsx": "/#ideas",
    "app/my-story/page.tsx": "/",
    "app/my-book/page.tsx": "/",
  };
  for (const [file, target] of Object.entries(redirects)) {
    const page = await source(file);
    assert.match(page, new RegExp(`redirect\\(\\"${target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\"\\)`));
  }
});

test("maps the official photography library by editorial role", async () => {
  const [home, chairwoman] = await Promise.all([
    source("app/_components/NinaLanding.tsx"),
    source("app/_components/ChairwomanLanding.tsx"),
  ]);

  for (const asset of [
    "nina-official-portrait.jpg",
    "nina-chairwoman-opening-2025.jpg",
    "nina-chairwoman-mandate.jpg",
    "nina-stepup-meeting.jpg",
    "nina-insights-stage.jpg",
    "nina-lifestyle-bilateral.jpg",
    "nina-press-pbid.jpg",
  ]) {
    await access(new URL(`public/images/${asset}`, project));
  }

  assert.match(home, /nina-official-portrait\.jpg/);
  assert.match(home, /nina-chairwoman-mandate\.jpg/);
  assert.match(home, /nina-stepup-meeting\.jpg/);
  assert.match(home, /nina-insights-stage\.jpg/);
  assert.match(home, /nina-lifestyle-bilateral\.jpg/);
  assert.match(home, /nina-press-pbid\.jpg/);
  assert.match(chairwoman, /nina-chairwoman-opening-2025\.jpg/);
  assert.match(chairwoman, /nina-chairwoman-mandate\.jpg/);
});

test("removes AppleDouble metadata from the static Hostinger package", async () => {
  const postprocess = await source("scripts/postprocess-static.mjs");

  assert.match(postprocess, /entry\.name\.startsWith\("\._"\)/);
  assert.match(postprocess, /await rm\(/);
});
