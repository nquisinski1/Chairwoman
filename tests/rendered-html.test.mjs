import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Nina Quisinski editorial homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es"/i);
  assert.match(html, /Nina Quisinski/);
  assert.match(html, /Las relaciones correctas no solo abren puertas/i);
  assert.match(html, /Presidenta · CCI Brasil–Panamá/i);
  assert.match(html, /COO &amp; Co-founder · StepUp &amp; Company/i);
  assert.match(html, /Mi historia/);
  assert.match(html, /Chairwoman/);
  assert.match(html, /Lifestyle/);
  assert.match(html, /Newsletter/);
  assert.match(html, /Mi libro/);
  assert.match(html, /Prensa/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("all requested editorial routes render", async () => {
  const routes = [
    ["/my-story", /Una historia de/],
    ["/chairwoman", /Brasil y Panamá/],
    ["/la-socia", /La Socia/],
    ["/lifestyle", /Plataforma editorial/],
    ["/newsletter", /Archivo editorial/],
    ["/my-book", /Libro en desarrollo/],
    ["/press", /Prensa &amp; Contacto/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});

test("the starter preview was removed and publication-risk placeholders are absent", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  const source = `${page}\n${layout}\n${css}`;
  assert.doesNotMatch(source, /SkeletonPreview|codex-preview|email@example|Quincy|therapist/i);
  assert.match(layout, /index:\s*false/);
  assert.match(layout, /lang="es"/);

  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/preview.css", import.meta.url)));
});
