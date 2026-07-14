import type { Metadata } from "next";
import { EditorialHero, PageShell, SourceLink } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Mi historia",
  description: "La trayectoria y la visión de Nina Quisinski entre relaciones institucionales y crecimiento empresarial.",
};

const timeline = [
  { year: "2024", title: "Un puente institucional", text: "La Cámara de Comercio e Industria Brasil–Panamá registra su lanzamiento en octubre de 2024." },
  { year: "2025", title: "Agenda Brasil–Panamá", text: "Fuentes institucionales registran la presidencia de Nina y su participación pública en el PBID 2025." },
  { year: "2025", title: "Una visión publicada", text: "Investor Lifestyle recoge su perspectiva sobre cooperación empresarial entre Brasil y Panamá." },
  { year: "2026", title: "La plataforma se amplía", text: "Nina articula su voz alrededor de capital relacional, expansión y mujeres que abren mercados." },
];

export default function StoryPage() {
  return (
    <PageShell active="story">
      <EditorialHero
        edition="NQ / 01"
        kicker="Mi historia"
        title={<>Una historia de <em>confianza, visión</em> y relaciones entre mercados.</>}
        intro="Mi trayectoria pública se ha construido alrededor de una convicción: las oportunidades más relevantes comienzan cuando contexto, reputación y propósito se encuentran."
        image="/images/nina-portrait.jpg"
        imageAlt="Retrato oficial de Nina Quisinski"
        imagePosition="50% 25%"
      />

      <section className="story-manifesto content-grid">
        <div>
          <p className="section-index">01 / Convicción</p>
          <p className="section-kicker">En primera persona</p>
        </div>
        <div className="manifesto-copy">
          <h2>No creo en el contacto por el contacto.</h2>
          <p className="serif-lead">Creo en comprender el contexto y construir relaciones con propósito.</p>
          <p>
            La expansión internacional no necesita más ruido. Necesita mejores preguntas, lectura cultural,
            confianza acumulada y la disciplina de transformar una conversación en una posibilidad legítima
            de colaboración.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / Trayectoria</p>
            <p className="section-kicker">Una línea de tiempo verificable</p>
          </div>
          <h2>Hitos públicos</h2>
        </div>
        <div className="timeline-list">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="source-notes">
          <SourceLink href="https://ccibrasilpanama.org/">CCI Brasil–Panamá</SourceLink>
          <SourceLink href="https://mici.gob.pa/2025/09/30/por-segundo-dia-consecutivo-mici-impulsa-la-proyeccion-internacional-de-panama-ante-inversionistas/">MICI Panamá</SourceLink>
          <SourceLink href="https://investor.com.pa/business/panama-y-brasil-construyen-un-puente-estrategico-global/">Investor Lifestyle</SourceLink>
        </div>
      </section>

      <section className="identity-note">
        <p className="section-index">Nota de identidad</p>
        <h2>Nina Quisinski es el nombre público asociado a Janaina Tobia Quisinski.</h2>
        <p>
          La asociación aparece en documentación institucional y converge con sus canales públicos. El sitio
          utiliza “Nina Quisinski” como firma editorial.
        </p>
        <SourceLink href="https://portalelegis.alesc.sc.gov.br/documentos/N09JP/download">Ver documento institucional</SourceLink>
      </section>
    </PageShell>
  );
}
