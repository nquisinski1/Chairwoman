import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const project = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, project), "utf8");

test("ships the StepUp partner chapter in Spanish Portuguese and English", async () => {
  const [content, component] = await Promise.all([
    source("app/_content/stepup.ts"),
    source("app/_components/StepUpLanding.tsx"),
  ]);

  assert.match(content, /Socia & Partner · Relaciones estratégicas · Expansión internacional/);
  assert.match(content, /Sócia & Partner · Relações estratégicas · Expansão internacional/);
  assert.match(content, /Partner · Strategic relations · International expansion/);
  assert.match(component, /id="perspectiva"/);
  assert.match(component, /id="relaciones"/);
  assert.match(component, /id="expansion"/);
  assert.match(component, /id="socia"/);
  assert.match(component, /<EditorialHeader language=\{language\} area="stepup"/);
  assert.doesNotMatch(component, /next\/image|<Image|<figure|\/images\//);
});

test("keeps Nina's StepUp positioning inside verified professional boundaries", async () => {
  const content = await source("app/_content/stepup.ts");
  assert.match(content, /no promete acceso, capital ni resultados/);
  assert.match(content, /não promete acesso, capital ou resultados/);
  assert.match(content, /does not promise access, capital or outcomes/);
  assert.doesNotMatch(content, /guaranteed access|acceso garantizado|acesso garantido|investment advisor/i);
});

test("adds a second unified StepUp menu beside Chairwoman", async () => {
  const component = await source("app/_components/ChairwomanLanding.tsx");
  assert.match(component, /<summary>Chairwoman/);
  assert.match(component, /<summary>StepUp &amp; Company/);
  assert.match(component, /stepUpPaths\[language\]/);
  assert.match(component, /https:\/\/stepupandco\.com\//);
});

test("exports dedicated trilingual StepUp routes", async () => {
  for (const route of [
    "app/stepup-company/page.tsx",
    "app/pt/stepup-company/page.tsx",
    "app/en/stepup-company/page.tsx",
  ]) {
    assert.match(await source(route), /StepUpLanding/);
  }
});
