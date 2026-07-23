import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const project = new URL("../", import.meta.url);

async function html(path) {
  return readFile(new URL(path, output), "utf8");
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

test("exports a complete Spanish landing at the canonical root", async () => {
  const source = await html("index.html");

  assert.match(source, /<html lang="es-PA">/i);
  assert.match(source, /Nina/);
  assert.match(source, /QUISINSKI/);
  assert.match(source, /FUNDADORA Y PRESIDENTA/);
  assert.match(source, /SOCIA · STEPUP &amp; COMPANY/);
  assert.match(source, /Liderazgo institucional · Relaciones estratégicas · Expansión empresarial/);
  assert.match(source, /Capital &amp; Ownership Brief/);
  assert.match(source, /Investor Lifestyle/);
  assert.match(source, /Instagram/);
  assert.match(source, /YouTube/);
  assert.equal(count(source, /<h1\b/gi), 1);
});

test("exports Portuguese and English routes with equivalent authority", async () => {
  const [pt, en] = await Promise.all([html("pt/index.html"), html("en/index.html")]);

  assert.match(pt, /<html lang="pt-BR">/i);
  assert.match(pt, /FUNDADORA E PRESIDENTE/);
  assert.match(pt, /Liderança institucional · Relações estratégicas · Expansão empresarial/);
  assert.match(pt, /Este site não oferece intermediação financeira/);

  assert.match(en, /<html lang="en-US">/i);
  assert.match(en, /FOUNDER &amp; PRESIDENT/);
  assert.match(en, /Institutional leadership · Strategic relationships · Business expansion/);
  assert.match(en, /This site does not offer financial intermediation/);

  assert.equal(count(pt, /<h1\b/gi), 1);
  assert.equal(count(en, /<h1\b/gi), 1);
});

test("contains multilingual SEO, structured data and launch safety", async () => {
  const source = await html("index.html");

  assert.match(source, /hreflang="es-PA"/i);
  assert.match(source, /hreflang="pt-BR"/i);
  assert.match(source, /hreflang="en-US"/i);
  assert.match(source, /application\/ld\+json/i);
  assert.match(source, /"@type":"Person"/);
  assert.match(source, /name="robots" content="noindex, nofollow, noarchive"/i);
  assert.match(source, /nina-chairwoman-podium\.jpg/);
});

test("does not publish blocked claims, fake metrics or template debris", async () => {
  const sources = await Promise.all([html("index.html"), html("pt/index.html"), html("en/index.html")]);
  const joined = sources.join("\n");

  assert.doesNotMatch(joined, /14\.?000|1[.,]300|board certified|conselheira certificada|certificada como board/i);
  assert.doesNotMatch(joined, /garantiza|garantido|guaranteed return|access to capital guaranteed/i);
  assert.doesNotMatch(joined, /email@example|Quincy|therapist|codex-preview|Your site is taking shape/i);
  assert.doesNotMatch(joined, /documento confidencial|confidential invitation|convite confidencial/i);
});

test("ships required real assets and static Hostinger output", async () => {
  const assets = [
    "images/nina-chairwoman-podium.jpg",
    "images/nina-press-hero.jpg",
    "images/nina-business-speaking.jpg",
    "images/nina-lifestyle-dinner.jpg",
  ];
  await Promise.all(assets.map((asset) => access(new URL(asset, output))));
  await access(new URL("index.html", output));
  await access(new URL("pt/index.html", output));
  await access(new URL("en/index.html", output));
});

test("keeps the approved color territories explicit in the design system", async () => {
  const css = await readFile(new URL("app/globals.css", project), "utf8");

  assert.match(css, /--burgundy:\s*#4b1f2a/i);
  assert.match(css, /--beige:\s*#e8e0d3/i);
  assert.match(css, /--green:\s*#17351f/i);
  assert.match(css, /--gold:\s*#c2a367/i);
  assert.match(css, /--blue:\s*#aec1d3/i);
  assert.match(css, /\.nq-mandate\s*\{[^}]*background:\s*var\(--burgundy\)/s);
  assert.match(css, /\.nq-stepup\s*\{[^}]*background:\s*var\(--beige\)/s);
  assert.match(css, /\.nq-ideas\s*\{[^}]*background:\s*var\(--blue\)/s);
  assert.match(css, /\.nq-media\s*\{[^}]*background:\s*var\(--blue-soft\)/s);
  assert.match(css, /\.nq-lifestyle\s*\{[^}]*background:\s*var\(--green\)/s);
});

test("keeps the approved Nina Quisinski typographic signature", async () => {
  const [source, css, layout] = await Promise.all([
    html("index.html"),
    readFile(new URL("app/globals.css", project), "utf8"),
    readFile(new URL("app/layout.tsx", project), "utf8"),
  ]);

  assert.match(source, /<span>Nina<\/span><strong>QUISINSKI<\/strong>/);
  assert.match(css, /--script:\s*"Pinyon Script"/);
  assert.match(css, /--serif:\s*"Bodoni Moda"/);
  assert.match(css, /--condensed:\s*"Barlow Condensed"/);
  assert.match(css, /\.nq-hero h1 span\s*\{[^}]*font-family:\s*var\(--script\)/s);
  assert.match(layout, /family=Pinyon\+Script/);
  assert.match(layout, /family=Bodoni\+Moda/);
});
