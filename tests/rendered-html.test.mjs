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
  assert.doesNotMatch(source, /FUNDADORA Y PRESIDENTA/);
  assert.doesNotMatch(source, /SOCIA · STEPUP &amp; COMPANY/);
  assert.match(source, /Liderazgo institucional · Relaciones estratégicas · Expansión empresarial/);
  assert.match(source, /Executive Insights/);
  assert.doesNotMatch(source, /class="nq-topic-list"/);
  assert.doesNotMatch(source, /Lifestyle &amp; Cultural Capital/);
  assert.match(source, /Investor Lifestyle/);
  assert.match(source, /https:\/\/stepupandco\.com\//);
  assert.doesNotMatch(source, /site\.stepup10x\.com/);
  assert.doesNotMatch(source, /class="nq-proof/);
  assert.match(source, /Instagram/);
  assert.match(source, /YouTube/);
  assert.equal(count(source, /<h1\b/gi), 1);
});

test("exports Portuguese and English routes with equivalent authority", async () => {
  const [pt, en] = await Promise.all([html("pt/index.html"), html("en/index.html")]);

  assert.match(pt, /<html lang="pt-BR">/i);
  assert.doesNotMatch(pt, /FUNDADORA E PRESIDENTE/);
  assert.match(pt, /Liderança institucional · Relações estratégicas · Expansão empresarial/);
  assert.doesNotMatch(pt, /Este site não oferece intermediação financeira/);

  assert.match(en, /<html lang="en-US">/i);
  assert.doesNotMatch(en, /FOUNDER &amp; PRESIDENT/);
  assert.match(en, /Institutional leadership · Strategic relationships · Business expansion/);
  assert.doesNotMatch(en, /This site does not offer financial intermediation/);

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
  assert.match(source, /nina-hero-original\.jpg/);
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
    "images/nina-press-hero.jpg",
    "images/nina-business-speaking.jpg",
    "images/nina-lifestyle-dinner.jpg",
    "images/nina-hero-original.jpg",
    "images/nina-chairwoman-original.jpg",
    "images/nina-stepup-original.jpg",
    "images/nina-lifestyle-original.jpg",
    "logos/stepup-co-white.png",
    "logos/cci-brasil-panama-white-horizontal.png",
    "logos/investor-lifestyle.png",
    "logos/telemetro-white-on-charcoal.png",
    "brand/nina-chairwoman-emblem.svg",
  ];
  await Promise.all(assets.map((asset) => access(new URL(asset, output))));
  await access(new URL("index.html", output));
  await access(new URL("pt/index.html", output));
  await access(new URL("en/index.html", output));
});

test("keeps the approved color territories explicit in the design system", async () => {
  const css = await readFile(new URL("app/globals.css", project), "utf8");

  assert.match(css, /--burgundy:\s*#4b1f2a/i);
  assert.match(css, /--beige:\s*#ebe0d3/i);
  assert.match(css, /--green:\s*#17351f/i);
  assert.match(css, /--rose-gold:\s*#b77a76/i);
  assert.match(css, /--rose-gold-light:\s*#e5c6c1/i);
  assert.match(css, /--rose-gold-dark:\s*#8f5552/i);
  assert.match(css, /--blue:\s*#aec1d3/i);
  assert.match(css, /--lux-black:\s*#090909/i);
  assert.match(css, /--lux-charcoal:\s*#212121/i);
  assert.match(css, /--lux-navy:\s*#0f141e/i);
  assert.match(css, /--lux-purple:\s*#28191e/i);
  assert.match(css, /--lux-saddle:\s*#302013/i);
  assert.match(css, /--lux-off-white:\s*#dad0b8/i);
  assert.match(css, /\.nq-header\s*\{[^}]*background:\s*rgba\(247,\s*242,\s*235,\s*0\.97\)/s);
  assert.match(css, /\.nq-nav a\s*\{[^}]*color:\s*rgba\(15,\s*20,\s*30,\s*0\.68\)/s);
  assert.match(css, /\.nq-hero h1\s*\{[^}]*color:\s*var\(--blue-deep\)/s);
  assert.doesNotMatch(css, /\.nq-hero-role\s*\{/);
  assert.match(css, /\.nq-hero \.nq-button-primary\s*\{[^}]*background:\s*var\(--rose-gold\)/s);
  assert.doesNotMatch(css, /\.nq-proof(?:\s|[-{])/);
  assert.match(css, /\.site-header\s*\{[^}]*background:\s*var\(--lux-navy\)/s);
  assert.match(css, /\.nq-mandate\s*\{[^}]*background:\s*var\(--burgundy-deep\)/s);
  assert.match(css, /\.nq-stepup\s*\{[^}]*background:\s*var\(--beige\)/s);
  assert.match(css, /\.nq-ideas\s*\{[^}]*background:\s*var\(--lux-navy\)/s);
  assert.match(css, /\.nq-ideas \.nq-button-primary\s*\{[^}]*background:\s*var\(--rose-gold\)/s);
  assert.match(css, /\.nq-executive\s*\{[^}]*background:\s*var\(--lux-navy\)/s);
  assert.match(css, /\.nq-executive li > span\s*\{[^}]*color:\s*var\(--rose-gold\)/s);
  assert.match(css, /\.nq-media\s*\{[^}]*background:\s*var\(--paper\)/s);
  assert.match(css, /\.nq-media-heading h2\s*\{[^}]*color:\s*var\(--blue-deep\)/s);
  assert.match(css, /\.nq-media-list span\s*\{[^}]*color:\s*var\(--rose-gold-dark\)/s);
  assert.match(css, /\.nq-lifestyle\s*\{[^}]*background:\s*var\(--lux-navy\)/s);
  assert.doesNotMatch(css, /--(?:lux-)?gold(?:-light|-ink)?:/i);
  assert.doesNotMatch(css, /rgba\(194,\s*163,\s*103,/i);
});

test("keeps one approved typographic system across every route", async () => {
  const [source, css, layout, logo] = await Promise.all([
    html("index.html"),
    readFile(new URL("app/globals.css", project), "utf8"),
    readFile(new URL("app/layout.tsx", project), "utf8"),
    readFile(new URL("app/_components/NinaLogo.tsx", project), "utf8"),
  ]);

  assert.match(source, /class="nina-logo__wordmark"[^>]*><span>NINA<\/span><strong>QUISINSKI<\/strong>/);
  assert.doesNotMatch(source, /class="nina-logo__signature"/);
  assert.match(logo, /className="nina-logo__signature"/);
  assert.match(logo, /Nina Quisinski/);
  assert.doesNotMatch(logo, /nq-monogram|NqMonogram/);
  assert.match(css, /--font-signature:\s*"Pinyon Script"/);
  assert.match(css, /--font-display:\s*"Noto Serif Display"/);
  assert.match(css, /--font-body:\s*"Inter"/);
  assert.match(css, /--font-interface:\s*var\(--font-body\)/);
  assert.match(css, /\.nina-logo__signature\s*\{[^}]*font-family:\s*var\(--font-signature\)/s);
  assert.match(css, /\.nq-mobile-menu nav:not\(\.language-switcher\) a\s*\{[^}]*font-family:\s*var\(--font-interface\)/s);
  assert.match(css, /\.cw-mobile-menu nav:first-child a\s*\{[^}]*font-family:\s*var\(--font-interface\)/s);
  for (const [, family] of css.matchAll(/font-family:\s*([^;]+);/g)) {
    assert.match(family.trim(), /^var\(--font-(?:signature|display|body|interface)\)$/);
  }
  assert.doesNotMatch(css, /var\(--(?:script|serif|condensed|sans)\)/);
  assert.match(layout, /family=Pinyon\+Script/);
  assert.match(layout, /family=Noto\+Serif\+Display/);
  assert.match(layout, /family=Inter/);
  assert.doesNotMatch(layout, /Bodoni\+Moda|Barlow\+Condensed/);
});

test("exports the Chairwoman page in Spanish, Portuguese and English", async () => {
  const [es, pt, en] = await Promise.all([
    html("chairwoman/index.html"),
    html("pt/chairwoman/index.html"),
    html("en/chairwoman/index.html"),
  ]);

  assert.match(es.slice(0, 80), /<html lang="es-PA">/i);
  assert.match(es, /Liderar es hacer que la/);
  assert.match(es, /Cuando una institución escribe, el contexto importa/);
  assert.match(es, /Una fotografía registra una agenda/);
  assert.match(es, /\/pt\/chairwoman\//);
  assert.match(es, /\/en\/chairwoman\//);

  assert.match(pt.slice(0, 80), /<html lang="pt-BR">/i);
  assert.match(pt, /Liderar é fazer a/);
  assert.match(pt, /Quando uma instituição escreve, o contexto importa/);
  assert.match(pt, /Uma fotografia registra uma agenda/);

  assert.match(en.slice(0, 80), /<html lang="en-US">/i);
  assert.match(en, /Leadership makes/);
  assert.match(en, /When an institution writes, context matters/);
  assert.match(en, /A photograph records an agenda/);

  for (const source of [es, pt, en]) {
    assert.match(source, /nina-chairwoman-original\.jpg/);
    assert.match(source, /ccibrasilpanama\.org\/2026-lid-nina/);
    assert.match(source, /ccibrasilpanama\.org\/2026-camara\/#honras/);
    assert.match(source, /mici\.gob\.pa\/2025\/08\/18/);
    assert.match(source, /presidencia\.gob\.pa\/storage\/documentos/);
    assert.match(source, /portalegis\.alesc\.sc\.gov\.br\/documentos\/N09JP/);
    assert.match(source, /wp-content\/uploads\/2026\/05\/CNI\.jpg/);
    assert.match(source, /Antonio Ricardo Álvarez Alban/);
    assert.match(source, /João Mendes Pereira/);
    assert.match(source, /Flavio Gabriel Méndez Altamirano/);
    assert.match(source, /Carlos Henrique Moojen de Abreu e Silva/);
    assert.match(source, /Julio A\. Moltó/);
    assert.doesNotMatch(source, /Startup Summit|Carta-Oficial-de-Invitacion-Clicksign|preto-scaled|Confidencial/i);
    assert.doesNotMatch(source, /class="cw-(?:index|eyebrow)"/);
    assert.doesNotMatch(source, /01 \/ (?:EL MANDATO|O MANDATO|THE MANDATE)/);
    assert.doesNotMatch(source, /(?:Cargo, trayectoria|Cargo, trajetória|Role, record).*revisad|reviewed against/i);
    assert.equal(count(source, /class="cw-emblem(?:\s|")/g), 0);
    assert.equal(count(source, /class="nq-monogram(?:\s|")/g), 0);
    assert.match(source, /class="nina-logo__wordmark"[^>]*><span>NINA<\/span><strong>QUISINSKI<\/strong>/);
    assert.doesNotMatch(source, /class="nina-logo__signature"/);
    assert.equal(count(source, /<h1\b/gi), 1);
    assert.equal(count(source, /<img\b/gi), 1);
  }
});

test("links each home language to its dedicated Chairwoman route", async () => {
  const [es, pt, en] = await Promise.all([
    html("index.html"),
    html("pt/index.html"),
    html("en/index.html"),
  ]);

  assert.match(es, /href="\/chairwoman\/"/);
  assert.match(pt, /href="\/pt\/chairwoman\/"/);
  assert.match(en, /href="\/en\/chairwoman\/"/);
});

test("renders the standardized header and shared editorial footer", async () => {
  const [home, chairwoman, lifestyle, headerComponent, siteChrome] = await Promise.all([
    html("pt/index.html"),
    html("pt/chairwoman/index.html"),
    html("lifestyle/index.html"),
    readFile(new URL("app/_components/NinaHeader.tsx", project), "utf8"),
    readFile(new URL("app/_components/SiteChrome.tsx", project), "utf8"),
  ]);

  for (const source of [home, chairwoman]) {
    assert.match(source, /class="nina-footer"/);
    assert.match(source, /Explorar/);
    assert.match(source, /Conteúdo/);
    assert.match(source, /Institucional/);
    assert.match(source, /Canais/);
  }

  assert.doesNotMatch(home, /class="nina-footer-legal"/);
  assert.doesNotMatch(home, /class="nina-footer-display"/);
  assert.doesNotMatch(home, /class="nina-footer-statement"/);
  assert.doesNotMatch(chairwoman, /class="nina-footer-display"/);
  assert.doesNotMatch(chairwoman, /class="nina-footer-statement"/);
  assert.doesNotMatch(chairwoman, /class="nina-footer-legal"/);
  assert.doesNotMatch(home, /class="nq-stepup-pillars"/);
  assert.doesNotMatch(home, /CONVERSA EMPRESARIAL/);
  assert.doesNotMatch(chairwoman, /class="cw-hero-role"/);
  assert.doesNotMatch(chairwoman, /class="cw-emblem/);

  assert.match(headerComponent, /navigation:\s*HeaderNavigationItem\[\]/);
  assert.doesNotMatch(headerComponent, /variant:\s*"home"\s*\|\s*"chairwoman"/);
  assert.match(headerComponent, /languagePaths:\s*Record<Language,\s*string>/);
  assert.match(headerComponent, /export function getPrimaryNavigation/);
  assert.match(siteChrome, /<NinaHeader/);
  assert.match(siteChrome, /getPrimaryNavigation\("es"\)/);

  for (const [source, pressLabel] of [
    [home, "Imprensa"],
    [chairwoman, "Imprensa"],
    [lifestyle, "Prensa"],
  ]) {
    assert.match(source, /<header class="nq-header">/);
    assert.doesNotMatch(source, /<header class="(?:cw-header|site-header)">/);
    const chairwomanIndex = source.indexOf(">Chairwoman<");
    const stepupIndex = source.indexOf(">StepUp &amp; Co<");
    const insightsIndex = source.indexOf(">Insights &amp; Newsletter<");
    const lifestyleIndex = source.indexOf(">Lifestyle<");
    const pressIndex = source.indexOf(`>${pressLabel}<`);

    assert.ok(chairwomanIndex >= 0);
    assert.ok(chairwomanIndex < stepupIndex);
    assert.ok(stepupIndex < insightsIndex);
    assert.ok(insightsIndex < lifestyleIndex);
    assert.ok(lifestyleIndex < pressIndex);
  }
});

test("keeps the Chairwoman page inside the burgundy ivory and rose-gold territory", async () => {
  const css = await readFile(new URL("app/globals.css", project), "utf8");

  assert.match(css, /\.cw-site\s*\{[^}]*background:\s*var\(--white\)/s);
  assert.match(css, /\.cw-hero\s*\{[^}]*background:\s*var\(--white\)/s);
  assert.match(css, /\.cw-hero\s*\{[^}]*color:\s*var\(--burgundy\)/s);
  assert.match(css, /\.cw-record\s*\{[^}]*background:\s*var\(--burgundy-deep\)/s);
  assert.match(css, /\.cw-button-accent\s*\{[^}]*background:\s*var\(--rose-gold\)/s);
  assert.doesNotMatch(css, /\.cw-button-gold/);
  assert.doesNotMatch(css, /\.cw-wordmark-(?:script|type)/);
  assert.doesNotMatch(css, /\.cw-emblem(?:\s|[-{])/);
});
