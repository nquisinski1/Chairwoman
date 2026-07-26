import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, project), "utf8");

test("builds the approved editorial Chairwoman anatomy", async () => {
  const component = await source("app/_components/ChairwomanLanding.tsx");

  assert.match(component, /className="cw-chair-header"/);
  assert.match(component, /src="\/brand\/nina-chairwoman-mark\.svg"/);
  assert.doesNotMatch(component, /<NinaHeader|<NinaFooter/);
  assert.match(component, /className="cw-signature">Nina Quisinski/);
  assert.match(component, /nina-chairwoman-opening-2025\.jpg/);
  assert.match(component, /nina-official-portrait\.jpg/);
  assert.match(component, /className="cw-authority-strip"/);
  assert.match(component, /copy\.authority\.map/);
  assert.match(component, /className="cw-mandate"/);
  assert.match(component, /className="cw-record"/);
  assert.match(component, /className="cw-letters"/);
  assert.match(component, /className="cw-press"/);
  assert.match(component, /className="cw-chamber"/);
  assert.doesNotMatch(component, /StepUp|Lifestyle|Newsletter|collaboration/i);
});

test("keeps the signature script exclusive to the full name", async () => {
  const [component, css] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/globals.css"),
  ]);

  assert.match(component, /className="cw-signature">Nina Quisinski<\/p>/);
  assert.match(css, /\.cw-signature\s*\{[^}]*font-family:\s*var\(--font-signature\)/s);
  assert.doesNotMatch(css, /\.cw-title-accent\s*\{[^}]*font-family:\s*var\(--font-signature\)/s);
});

test("ships four verified authority territories in every language", async () => {
  const content = await source("app/_content/chairwoman.ts");
  assert.match(content, /authority:\s*\[\s*"Fundación y presidencia"/);
  assert.match(content, /authority:\s*\[\s*"Fundação e presidência"/);
  assert.match(content, /authority:\s*\[\s*"Foundation and presidency"/);
  assert.equal((content.match(/authority:\s*\[/g) ?? []).length, 3);
  assert.match(content, /press:\s*\{/);
});

test("uses a spacious single-column Chairwoman composition at iPad width", async () => {
  const css = await source("app/globals.css");

  assert.match(css, /\.cw-hero-editorial\s*\{[^}]*display:\s*grid/s);
  assert.match(css, /\.cw-portrait-secondary img\s*\{[^}]*filter:\s*grayscale\(1\)/s);
  assert.match(css, /\.cw-authority-strip\s*\{[^}]*background:\s*var\(--graphite\)/s);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.cw-hero-editorial\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.cw-site\s*\{[^}]*overflow:\s*clip/s);
});

test("includes the approved Chairwoman mark as a real asset", async () => {
  await access(new URL("public/brand/nina-chairwoman-mark.svg", project));
  const mark = await source("public/brand/nina-chairwoman-mark.svg");
  assert.match(mark, />N<\/text>/);
  assert.match(mark, />Q<\/text>/);
  assert.match(mark, /#B77A76/i);
  assert.doesNotMatch(mark, /#9f7453/i);
});

test("keeps readable controls and a true iPad single-column composition", async () => {
  const [component, css] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/globals.css"),
  ]);
  assert.match(component, /titleBefore\}<\/span>\{" "\}/);
  assert.match(component, /titleAccent\}<\/span>\{" "\}/);
  assert.match(css, /\.cw-hero-editorial \.cw-button-outline\s*\{[^}]*color:\s*var\(--burgundy\)/s);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.cw-pillars\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.cw-letter-list\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.doesNotMatch(css, /inset-right/);
});
