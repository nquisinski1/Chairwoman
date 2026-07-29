import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, project), "utf8");

test("builds the editorial Chairwoman anatomy", async () => {
  const component = await source("app/_components/ChairwomanLanding.tsx");

  assert.match(component, /className="ne-header"/);
  assert.match(component, /src="\/brand\/nina-chairwoman-mark\.svg"/);
  assert.doesNotMatch(component, /<NinaHeader|<NinaFooter/);
  assert.match(component, /<em>Nina Quisinski<\/em>/);
  assert.match(component, /nina-chairwoman-opening-2025\.jpg/);
  assert.match(component, /nina-official-portrait\.jpg/);
  assert.match(component, /className="ne-proof-strip"/);
  assert.match(component, /strip\.map/);
  assert.match(component, /className="ne-story"/);
  assert.match(component, /className="ne-story-body"/);
  assert.doesNotMatch(component, /copy\.mandate\.body\}<\/p>/);
  assert.doesNotMatch(component, /copy\.chamber\.secondary<Arrow \/><\/a>/);
  assert.match(component, /className="ne-record"/);
  assert.match(component, /className="ne-letters"/);
  assert.match(component, /className="ne-press"/);
  assert.match(component, /className="ne-chamber"/);
  assert.doesNotMatch(component, /StepUp|Lifestyle|Newsletter|collaboration/i);
});

test("uses the full name as the dominant editorial display", async () => {
  const [component, css] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/globals.css"),
  ]);

  assert.match(component, /<em>Nina Quisinski<\/em>/);
  assert.doesNotMatch(component, /<em>Nina<\/em>|<em>Quisinski<\/em>/);
  assert.match(css, /Chairwoman — dark editorial residence/);
  assert.match(css, /\.ne-hero h1 em\s*\{[^}]*font-family:\s*"Bodoni Moda"/s);
});

test("ships four verified authority territories in every language", async () => {
  const content = await source("app/_content/chairwoman.ts");
  assert.match(content, /authority:\s*\[\s*"Fundación y presidencia"/);
  assert.match(content, /authority:\s*\[\s*"Fundação e presidência"/);
  assert.match(content, /authority:\s*\[\s*"Foundation and presidency"/);
  assert.equal((content.match(/authority:\s*\[/g) ?? []).length, 3);
  assert.match(content, /press:\s*\{/);
});

test("uses the centered editorial residence with the approved light palette", async () => {
  const css = await source("app/globals.css");

  assert.match(css, /\.ne-frame\s*\{[^}]*max-width:\s*1120px[^}]*border:\s*0[^}]*border-radius:\s*0/s);
  assert.match(css, /\.ne-hero-images\s*\{[^}]*display:\s*grid/s);
  assert.match(css, /\.ne-hero-main img\s*\{[^}]*filter:\s*grayscale\(1\)/s);
  assert.match(css, /\.ne-proof-strip\s*\{[^}]*background:\s*var\(--ne-ink\)/s);
  assert.match(css, /url\("\/images\/nina-chairwoman-mandate\.jpg"\)/);
  assert.match(css, /Chairwoman refinement — minimal hierarchy/);
  assert.match(css, /Chairwoman — white, warm graphite and copper palette/);
  assert.match(css, /\.ne-record ol\s*\{[^}]*grid-template-columns:\s*repeat\(2/s);
});

test("includes the approved Chairwoman mark as a real asset", async () => {
  await access(new URL("public/brand/nina-chairwoman-mark.svg", project));
  const mark = await source("public/brand/nina-chairwoman-mark.svg");
  assert.match(mark, />N<\/text>/);
  assert.match(mark, />Q<\/text>/);
  assert.match(mark, /#C68D80/i);
  assert.doesNotMatch(mark, /#9f7453/i);
});

test("keeps readable controls and a true iPad single-column composition", async () => {
  const [component, css] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/globals.css"),
  ]);
  assert.match(component, /<h1 id="ne-hero-title"><span>\{identity\.intro\}<\/span><em>Nina Quisinski<\/em><\/h1>/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-story\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-press\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.ne-mobile-menu summary\s*\{[^}]*min-height:\s*44px/s);
  assert.doesNotMatch(css, /inset-right/);
});

test("uses the approved standard circular source icon", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /\.ne-record li > a\s*\{[^}]*width:\s*64px[^}]*min-height:\s*64px[^}]*border-radius:\s*50%/s);
  assert.match(css, /\.ne-record li > a span\s*\{[^}]*position:\s*absolute[^}]*top:\s*13px[^}]*left:\s*11px/s);
  assert.match(css, /\.ne-record li > a:hover span\s*\{[^}]*translate\(3px,\s*-3px\)/s);
});

test("renders the institutional record as a responsive timeline", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /\.ne-record ol\s*\{[^}]*grid-template-columns:\s*repeat\(6,\s*minmax\(185px,\s*1fr\)\)/s);
  assert.match(css, /\.ne-record li::before\s*\{[^}]*height:\s*1px/s);
  assert.match(css, /\.ne-record li::after\s*\{[^}]*border-radius:\s*50%[^}]*background:\s*var\(--ne-copper-deep\)/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-record ol\s*\{[^}]*display:\s*block/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-record li::before\s*\{[^}]*width:\s*1px/s);
});
