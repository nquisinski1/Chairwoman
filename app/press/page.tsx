import type { Metadata } from "next";
import { EditorialHero, PageShell, SourceLink, StatusTag } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Prensa & Contacto",
  description: "Solicitudes de prensa, entrevistas, eventos y colaboraciones con Nina Quisinski.",
};

const topics = [
  "Relaciones empresariales Brasil–Panamá",
  "Capital relacional y confianza",
  "Expansión y diplomacia empresarial",
  "Liderazgo institucional femenino",
  "Mujeres que abren mercados",
];

export default function PressPage() {
  return (
    <PageShell active="press">
      <EditorialHero
        edition="NQ / 07"
        kicker="Prensa & Contacto"
        title={<>Para entrevistas, escenarios y <em>conversaciones que importan.</em></>}
        intro="Solicitudes de prensa, invitaciones institucionales, moderación y propuestas de colaboración editorial o de marca."
        image="/images/nina-press-hero.jpg"
        imageAlt="Nina Quisinski atendiendo preguntas de periodistas"
        imagePosition="50% 45%"
      />

      <section className="press-actions">
        <a href="https://www.linkedin.com/in/ninaquisinski/?locale=es" target="_blank" rel="noreferrer">
          <span>01</span><p>Entrevistas y eventos</p><strong>Contactar por LinkedIn</strong><b>↗</b>
        </a>
        <a href="https://www.instagram.com/ninaquisinski/" target="_blank" rel="noreferrer">
          <span>02</span><p>Editorial & Lifestyle</p><strong>Proponer por Instagram</strong><b>↗</b>
        </a>
      </section>

      <section className="press-profile content-grid">
        <div><p className="section-index">01 / Perfil</p><StatusTag>Bio institucional</StatusTag></div>
        <div className="manifesto-copy">
          <h2>Nina Quisinski</h2>
          <p className="serif-lead">Capital relacional · Diplomacia empresarial · Expansión.</p>
          <p>
            Nina Quisinski desarrolla su posicionamiento en la intersección de relaciones institucionales,
            capital relacional y expansión empresarial. El sitio oficial de la CCI Brasil–Panamá la identifica
            como presidenta en la revisión del 13 de julio de 2026, y StepUp & Company la presenta como COO y
            cofundadora.
          </p>
          <div className="stacked-links">
            <SourceLink href="https://ccibrasilpanama.org/">Fuente institucional CCI</SourceLink>
            <SourceLink href="https://site.stepup10x.com/">Perfil corporativo StepUp</SourceLink>
          </div>
        </div>
      </section>

      <section className="topics-section">
        <div className="section-heading">
          <div><p className="section-index">02 / Temas</p><p className="section-kicker">Para entrevistas y escenarios</p></div>
          <h2>Conversaciones con contexto.</h2>
        </div>
        <ol className="topic-list">
          {topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}
        </ol>
      </section>

      <section className="press-sources">
        <p className="section-index">03 / Archivo verificable</p>
        <h2>Fuentes y apariciones seleccionadas</h2>
        <div className="press-source-grid">
          <SourceLink href="https://investor.com.pa/business/panama-y-brasil-construyen-un-puente-estrategico-global/">Investor Lifestyle · 2025</SourceLink>
          <SourceLink href="https://mici.gob.pa/2025/09/30/por-segundo-dia-consecutivo-mici-impulsa-la-proyeccion-internacional-de-panama-ante-inversionistas/">MICI Panamá · 2025</SourceLink>
          <SourceLink href="https://www.telemetro.com/nacionales/panama-y-brasil-anuncian-primer-foro-comercial-ingreso-al-mercosur-n6053628">Telemetro · PBID 2025</SourceLink>
          <SourceLink href="https://quijano.com/business-investors-day-2025-organized-by-the-panama-brazil-chamber-of-commerce-and-industry/">Quijano & Associates · PBID 2025</SourceLink>
        </div>
      </section>

      <section className="contact-note">
        <p className="section-kicker">Canales oficiales</p>
        <h2>La calidad de una conversación empieza por la claridad de la agenda.</h2>
        <p>Mientras se confirma un contacto dedicado de prensa, las solicitudes se reciben únicamente a través de LinkedIn e Instagram.</p>
      </section>
    </PageShell>
  );
}
