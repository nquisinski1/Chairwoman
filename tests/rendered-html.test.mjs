import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);

async function html(path) {
  return readFile(new URL(path, output), "utf8");
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

test("exports a complete Spanish landing at the canonical root", async () => {
  const source = await html("index.html");

  assert.match(source, /<html lang="es-PA">/i);
  assert.match(source, /NINA/);
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
