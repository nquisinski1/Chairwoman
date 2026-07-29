import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const html = (path) => readFile(new URL(path, output), "utf8");

test("exports Chairwoman as the canonical trilingual root experience", async () => {
  const [es, pt, en] = await Promise.all([
    html("index.html"),
    html("pt/index.html"),
    html("en/index.html"),
  ]);

  assert.match(es.slice(0, 100), /<html lang="es-PA">/i);
  assert.doesNotMatch(es, /PRESIDENCIA INSTITUCIONAL|PRESIDENTA/);
  assert.match(es, /El respeto se construye/);
  assert.match(es, /El legado se cultiva/);
  assert.match(es, /La admiración y el respeto no se imponen/);
  assert.match(pt.slice(0, 100), /<html lang="pt-BR">/i);
  assert.doesNotMatch(pt, /PRESIDÊNCIA INSTITUCIONAL|PRESIDENTE/);
  assert.match(pt, /Respeito se constrói/);
  assert.match(pt, /Legado se cultiva/);
  assert.match(en.slice(0, 100), /<html lang="en-US">/i);
  assert.doesNotMatch(en, />CHAIRWOMAN</);
  assert.match(en, /Respect is earned/);
  assert.match(en, /Legacy is cultivated/);

  for (const source of [es, pt, en]) {
    assert.match(source, /class="ne-site"/);
    assert.match(source, /class="ne-story-body"/);
    assert.match(source, /<em>Nina Quisinski<\/em>/);
    assert.match(source, /nina-chairwoman-opening-2025\.jpg/);
    assert.match(source, /href="https:\/\/ccibrasilpanama\.org\/"/);
    assert.doesNotMatch(source, /StepUp|Lifestyle|Newsletter|collaboration/i);
    assert.equal((source.match(/<h1\b/gi) ?? []).length, 1);
  }
});

test("uses the Chairwoman subdomain in canonical, alternates and structured data", async () => {
  const source = await html("index.html");

  assert.match(source, /rel="canonical" href="https:\/\/chairwoman\.ninaquisinski\.com\/"/i);
  assert.match(source, /hreflang="pt-BR" href="https:\/\/chairwoman\.ninaquisinski\.com\/pt\/"/i);
  assert.match(source, /hreflang="en-US" href="https:\/\/chairwoman\.ninaquisinski\.com\/en\/"/i);
  assert.match(source, /"url":"https:\/\/chairwoman\.ninaquisinski\.com\/"/);
  assert.doesNotMatch(source, /"url":"https:\/\/ninaquisinski\.com/);
});

test("keeps review builds non-indexable by default", async () => {
  const source = await html("index.html");
  assert.match(source, /name="robots" content="noindex, nofollow, noarchive"/i);
});

test("exports robots and sitemap for the dedicated host", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", output), "utf8"),
    readFile(new URL("sitemap.xml", output), "utf8"),
  ]);
  assert.match(robots, /Host: https:\/\/chairwoman\.ninaquisinski\.com/);
  assert.match(robots, /Sitemap: https:\/\/chairwoman\.ninaquisinski\.com\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/chairwoman\.ninaquisinski\.com\/pt\//);
  assert.match(sitemap, /https:\/\/chairwoman\.ninaquisinski\.com\/en\//);
});

test("ships the editorial assets required by the published pages", async () => {
  const assets = [
    "brand/nina-chairwoman-mark.svg",
    "images/nina-chairwoman-opening-2025.jpg",
    "images/nina-official-portrait.jpg",
    "images/nina-chairwoman-mandate.jpg",
    "images/nina-press-pbid.jpg",
  ];
  await Promise.all(assets.map((asset) => access(new URL(asset, output))));
});

test("does not publish blocked claims, fake metrics or template debris", async () => {
  const sources = await Promise.all([html("index.html"), html("pt/index.html"), html("en/index.html")]);
  const joined = sources.join("\n");
  assert.doesNotMatch(joined, /14\.?000|1[.,]300|guaranteed return|access to capital guaranteed/i);
  assert.doesNotMatch(joined, /email@example|Quincy|therapist|Your site is taking shape/i);
  assert.doesNotMatch(joined, /documento confidencial|confidential invitation|convite confidencial/i);
});
