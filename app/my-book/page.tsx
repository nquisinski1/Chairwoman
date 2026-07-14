import type { Metadata } from "next";
import { PageShell, StatusTag } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Mi libro — Proyecto editorial",
  description: "Un proyecto editorial en desarrollo de Nina Quisinski sobre confianza, liderazgo y expansión.",
};

export default function BookPage() {
  return (
    <PageShell active="book">
      <section className="book-hero">
        <div className="book-portrait">
          <img src="/images/nina-portrait.jpg" alt="Retrato de Nina Quisinski" />
        </div>
        <div className="book-copy">
          <div className="edition-line"><span>NQ / 06</span><span>Proyecto editorial</span></div>
          <StatusTag>Libro en desarrollo</StatusTag>
          <h1>El próximo capítulo empieza con una pregunta.</h1>
          <p className="serif-lead">¿Qué hace que una relación sea capaz de construir un mercado?</p>
          <p>
            Este espacio documentará el desarrollo de una obra alrededor de confianza, liderazgo,
            capital relacional y las conversaciones que permiten que empresas y personas avancen.
          </p>
        </div>
      </section>

      <section className="book-principles">
        <article><span>01</span><h2>Confianza</h2><p>La reputación que existe antes de una oportunidad.</p></article>
        <article><span>02</span><h2>Contexto</h2><p>La lectura de mercado y cultura que da sentido a una relación.</p></article>
        <article><span>03</span><h2>Movimiento</h2><p>La disciplina de convertir una conversación en un próximo paso legítimo.</p></article>
      </section>

      <section className="book-disclosure">
        <p className="section-index">Nota editorial</p>
        <h2>Esta página no anuncia todavía un título, editorial, fecha de lanzamiento o preventa.</h2>
        <p>El libro se presenta exclusivamente como proyecto en desarrollo. Las novedades se publicarán cuando exista un activo editorial confirmado.</p>
      </section>
    </PageShell>
  );
}
