import type { Metadata } from "next";
import { EditorialHero, PageShell, SourceLink } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Chairwoman",
  description: "Nina Quisinski y la agenda institucional de la Cámara de Comercio e Industria Brasil–Panamá.",
};

export default function ChairwomanPage() {
  return (
    <PageShell active="chairwoman">
      <EditorialHero
        edition="NQ / 02"
        kicker="Chairwoman"
        title={<>Brasil y Panamá, unidos por una <em>agenda empresarial con propósito.</em></>}
        intro="El sitio oficial de la Cámara de Comercio e Industria Brasil–Panamá identifica a Nina Quisinski como su presidenta en la revisión fechada del 13 de julio de 2026."
        image="/images/nina-chairwoman-podium.jpg"
        imageAlt="Nina Quisinski hablando en un espacio institucional en Panamá"
        imagePosition="53% 50%"
      />

      <section className="fact-banner">
        <p>Mandato institucional</p>
        <strong>Presidenta · CCI Brasil–Panamá</strong>
        <span>Fuente institucional revisada el 13.07.2026</span>
      </section>

      <section className="chairwoman-intro content-grid">
        <div>
          <p className="section-index">01 / La agenda</p>
          <p className="section-kicker">Dos mercados. Una relación para construir.</p>
        </div>
        <div className="manifesto-copy">
          <h2>Brasil aporta escala. Panamá aporta conectividad.</h2>
          <p className="serif-lead">La confianza articula la oportunidad.</p>
          <p>
            La agenda bilateral abre conversaciones sobre comercio, servicios, logística, tecnología,
            sostenibilidad, educación y cooperación empresarial. El rol de Nina se presenta aquí con su
            alcance exacto: liderazgo institucional, conversación pública y articulación de una agenda.
          </p>
        </div>
      </section>

      <section className="pbid-feature">
        <figure>
          <img src="/images/nina-pbid.jpg" alt="Nina Quisinski en el Panama Business & Investors’ Day 2025" />
          <figcaption>Panama Business & Investors’ Day · 2025</figcaption>
        </figure>
        <div>
          <p className="section-index">02 / Caso institucional</p>
          <p className="section-kicker">PBID 2025</p>
          <h2>Una conversación pública sobre negocios, inversión y cooperación.</h2>
          <p>
            El programa oficial del PBID 2025 identifica a Nina como presidenta de la CCI Brasil–Panamá,
            participante de panel y moderadora de una conversación sobre casos de éxito.
          </p>
          <div className="stacked-links">
            <SourceLink href="https://ccibrasilpanama.org/eventos/panama-business-investors-days-2025/">Programa oficial del PBID</SourceLink>
            <SourceLink href="https://www.telemetro.com/nacionales/panama-y-brasil-anuncian-primer-foro-comercial-ingreso-al-mercosur-n6053628">Contexto en Telemetro</SourceLink>
            <SourceLink href="https://quijano.com/business-investors-day-2025-organized-by-the-panama-brazil-chamber-of-commerce-and-industry/">Registro de Quijano & Associates</SourceLink>
          </div>
        </div>
      </section>

      <section className="institutional-principles">
        <article><span>01</span><h3>Contexto antes del contacto</h3><p>Comprender el mercado y la agenda antes de pedir atención.</p></article>
        <article><span>02</span><h3>Reputación antes de la oportunidad</h3><p>Construir confianza antes de convertir la relación en una solicitud.</p></article>
        <article><span>03</span><h3>Acuerdos antes de la visibilidad</h3><p>Medir el valor por la calidad de la agenda, no por el volumen de apariciones.</p></article>
      </section>
    </PageShell>
  );
}
