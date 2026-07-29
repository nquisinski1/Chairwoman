import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, project), "utf8");

test("builds the editorial Chairwoman anatomy", async () => {
  const component = await source("app/_components/ChairwomanLanding.tsx");

  assert.match(component, /className="ne-header"/);
  assert.match(component, /className="ne-wordmark"[\s\S]*Nina Quisinski/);
  assert.match(component, /className="ne-nav ne-nav--all"/);
  assert.doesNotMatch(component, /className="ne-mark"/);
  assert.doesNotMatch(component, /<NinaHeader|<NinaFooter/);
  assert.match(component, /<em>Nina Quisinski<\/em>/);
  assert.doesNotMatch(component, /<Image|\/images\//);
  assert.doesNotMatch(component, /className="ne-proof-strip"|strip\.map|const strip/);
  assert.doesNotMatch(component, /className="ne-hero-foot"/);
  assert.doesNotMatch(component, /copy\.hero\.descriptor|copy\.mandate\.lead|copy\.hero\.primary/);
  assert.match(component, /className="ne-story"/);
  assert.match(component, /className="ne-story-body"/);
  assert.doesNotMatch(component, /copy\.mandate\.body\}<\/p>/);
  assert.doesNotMatch(component, /copy\.chamber\.secondary<Arrow \/><\/a>/);
  assert.match(component, /className="ne-record"/);
  assert.match(component, /className="ne-letters"/);
  assert.match(component, /className="ne-press"/);
  assert.doesNotMatch(component, /className="ne-chamber"|Brasil &amp; Panamá/);
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
  assert.match(css, /Chairwoman — image-free institutional composition/);
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
  assert.match(component, /<h1 id="ne-hero-title"><em>Nina Quisinski<\/em><\/h1>/);
  assert.doesNotMatch(component, /identity\.label|identity\.intro/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-story\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.ne-press\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s);
  assert.match(css, /\.ne-mobile-menu summary\s*\{[^}]*min-height:\s*44px/s);
  assert.doesNotMatch(css, /inset-right/);
});

test("uses the same textual source action as letters and recognition", async () => {
  const [component, css] = await Promise.all([
    source("app/_components/ChairwomanLanding.tsx"),
    source("app/globals.css"),
  ]);
  assert.match(component, /\{copy\.record\.sourceAction\}<Arrow \/>/);
  assert.match(css, /\.ne-record li > a\s*\{[^}]*width:\s*max-content[^}]*border-bottom:\s*1px solid currentColor[^}]*text-transform:\s*uppercase/s);
  assert.match(css, /\.ne-record li > a span\s*\{[^}]*position:\s*static[^}]*margin-left:\s*22px/s);
  assert.doesNotMatch(css, /\.ne-record li > a\s*\{[^}]*width:\s*64px/s);
});

test("renders the institutional record as a responsive timeline", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /\.ne-record ol\s*\{[^}]*grid-template-columns:\s*repeat\(6,\s*minmax\(185px,\s*1fr\)\)/s);
  assert.match(css, /\.ne-record li::before\s*\{[^}]*height:\s*1px/s);
  assert.match(css, /\.ne-record li::after\s*\{[^}]*border-radius:\s*50%[^}]*background:\s*var\(--ne-copper-deep\)/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-record ol\s*\{[^}]*display:\s*block/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-record li::before\s*\{[^}]*width:\s*1px/s);
});

test("places the Nina Quisinski wordmark opposite the navigation", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /Chairwoman header — name left, navigation right/);
  assert.match(css, /\.ne-header\s*\{[^}]*grid-template-columns:\s*auto minmax\(0,\s*1fr\)/s);
  assert.match(css, /\.ne-header-actions\s*\{[^}]*justify-content:\s*flex-end/s);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.ne-nav--all,[\s\S]*?\.ne-header-actions > \.ne-languages\s*\{[^}]*display:\s*none/s);
});

test("removes all photography from the rendered Chairwoman page", async () => {
  const component = await source("app/_components/ChairwomanLanding.tsx");
  assert.doesNotMatch(component, /next\/image|<Image|<figure|\/images\//);
});

test("uses the approved centered editorial site organization", async () => {
  const css = await source("app/globals.css");
  assert.match(css, /Chairwoman — centered editorial residence based on the approved composition/);
  assert.match(css, /\.ne-frame\s*\{[^}]*width:\s*min\(calc\(100% - 40px\),\s*980px\)[^}]*margin-inline:\s*auto/s);
  assert.match(css, /\.ne-story-copy\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*\.9fr\) minmax\(280px,\s*1\.1fr\)/s);
  assert.match(css, /\.ne-press\s*\{[^}]*background:\s*var\(--ne-ink-deep\)/s);
});
