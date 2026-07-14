import type { Metadata } from "next";
import { EditorialHero, PageShell, SourceLink, StatusTag } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Perspectivas de Nina Quisinski sobre capital relacional, expansión y liderazgo femenino.",
};

const editorialPillars = [
  { number: "01", title: "Capital relacional", text: "Confianza, reputación y contexto como infraestructura para las decisiones." },
  { number: "02", title: "Brasil–Panamá", text: "Lecturas sobre mercados, instituciones y oportunidades de cooperación." },
  { number: "03", title: "Arquitectura de crecimiento", text: "Cómo convertir conversación, estrategia y operación en movimiento." },
  { number: "04", title: "Mujeres que abren mercados", text: "Liderazgo femenino conectado a negocios, expansión y poder institucional." },
];

export default function NewsletterPage() {
  return (
    <PageShell active="newsletter">
      <EditorialHero
        edition="NQ / 05"
        kicker="Newsletter"
        title={<>Perspectivas desde donde comienzan <em>las conversaciones importantes.</em></>}
        intro="Ideas sobre capital relacional, expansión empresarial, Brasil–Panamá y mujeres que abren mercados."
        image="/images/nina-interview.jpg"
        imageAlt="Nina Quisinski en un encuentro editorial"
        imagePosition="65% 40%"
      />

      <section className="newsletter-intro content-grid">
        <div><p className="section-index">01 / Archivo editorial</p><StatusTag>Canal en LinkedIn</StatusTag></div>
        <div className="manifesto-copy">
          <h2>Una voz para líderes que no quieren crecer a ciegas.</h2>
          <p className="serif-lead">Menos fórmulas. Más contexto para decidir.</p>
          <p>
            La newsletter reúne observaciones, marcos y conversaciones para quienes construyen empresas,
            relaciones e influencia con horizonte de largo plazo.
          </p>
          <SourceLink href="https://www.linkedin.com/newsletters/7460722642883522560/">Leer la newsletter en LinkedIn</SourceLink>
        </div>
      </section>

      <section className="pillars-section">
        <div className="section-heading">
          <div><p className="section-index">02 / Pilares</p><p className="section-kicker">El territorio editorial</p></div>
          <h2>Cuatro lentes para interpretar el movimiento.</h2>
        </div>
        <div className="framework-grid">
          {editorialPillars.map((pillar) => (
            <article key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>
          ))}
        </div>
      </section>

      <section className="newsletter-subscribe">
        <p className="section-kicker">Seguir las próximas ediciones</p>
        <h2>La conversación continúa en LinkedIn.</h2>
        <p>La suscripción y el archivo permanecen en la plataforma oficial hasta que exista un sistema propio de consentimiento y envío.</p>
        <a className="button button-light" href="https://www.linkedin.com/newsletters/7460722642883522560/" target="_blank" rel="noreferrer">Abrir newsletter</a>
      </section>
    </PageShell>
  );
}
