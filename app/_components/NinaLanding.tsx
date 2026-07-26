import { landingCopy, type Language } from "../_content/landing";
import { NinaFooter } from "./NinaFooter";
import { getPrimaryNavigation, NinaHeader } from "./NinaHeader";

const languagePaths: Record<Language, string> = { es: "/", pt: "/pt/", en: "/en/" };
const chairwomanPaths: Record<Language, string> = {
  es: "/chairwoman/",
  pt: "/pt/chairwoman/",
  en: "/en/chairwoman/",
};

const sourceLinks = [
  {
    label: "CCI Brasil–Panamá",
    href: "https://ccibrasilpanama.org/2026-lid-nina/",
  },
  {
    label: "MICI Panamá",
    href: "https://mici.gob.pa/2025/09/30/por-segundo-dia-consecutivo-mici-impulsa-la-proyeccion-internacional-de-panama-ante-inversionistas/",
  },
  {
    label: "ALESC",
    href: "https://portalegis.alesc.sc.gov.br/documentos/N09JP",
  },
];

const institutionalContexts: Record<Language, string[]> = {
  es: ["CCI Brasil–Panamá", "MICI Panamá", "Embajada de Brasil", "Embajada de Panamá"],
  pt: ["CCI Brasil–Panamá", "MICI Panamá", "Embaixada do Brasil", "Embaixada do Panamá"],
  en: ["Brazil–Panama Chamber", "MICI Panama", "Embassy of Brazil", "Embassy of Panama"],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function NinaLanding({ language }: { language: Language }) {
  const copy = landingCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";
  const navItems = getPrimaryNavigation(language);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: "https://ninaquisinski.com/",
    image: "https://ninaquisinski.com/images/nina-official-portrait.jpg",
    jobTitle: language === "en" ? "Founder and President" : language === "pt" ? "Fundadora e Presidente" : "Fundadora y Presidenta",
    worksFor: {
      "@type": "Organization",
      name: language === "en" ? "Brazil–Panama Chamber of Commerce and Industry" : language === "pt" ? "Câmara de Comércio e Indústria Brasil–Panamá" : "Cámara de Comercio e Industria Brasil–Panamá",
      url: "https://ccibrasilpanama.org/",
    },
    affiliation: { "@type": "Organization", name: "StepUp & Company", url: "https://stepupandco.com/" },
    sameAs: [
      "https://www.linkedin.com/in/ninaquisinski/",
      "https://www.instagram.com/ninaquisinski/",
      "https://www.youtube.com/@NinaQuisinski",
    ],
  };

  return (
    <div className="nq-site" lang={locale}>
      <a className="skip-link" href="#contenido">{copy.skip}</a>

      <NinaHeader
        language={language}
        languagePaths={languagePaths}
        brandHref={languagePaths[language]}
        menuLabel={copy.menu}
        navigation={navItems}
      />

      <main id="contenido">
        <section className="nq-hero" aria-labelledby="hero-title">
          <div className="nq-hero-copy">
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p className="nq-descriptor">{copy.hero.descriptor}</p>
            <p className="nq-hero-thesis">{copy.hero.thesis}</p>
            <div className="nq-actions">
              <a className="nq-button nq-button-primary" href={chairwomanPaths[language]}>{copy.hero.primary}<Arrow /></a>
            </div>
          </div>

          <figure className="nq-hero-visual">
            <img src="/images/nina-official-portrait.jpg" alt={copy.hero.alt} fetchPriority="high" />
          </figure>
        </section>

        <section className="nq-executive nq-section" aria-labelledby="executive-title">
          <div className="nq-section-intro">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.executive.eyebrow}</p>
            <h2 id="executive-title">{copy.executive.title}</h2>
          </div>
          <div className="nq-executive-body">
            <p>{copy.executive.body}</p>
            <ol>
              {copy.executive.pillars.map((pillar, index) => (
                <li key={pillar.title}><span>0{index + 1}</span><div><strong>{pillar.title}</strong><p>{pillar.body}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="nq-mandate nq-section" id="presidencia" aria-labelledby="mandate-title">
          <figure className="nq-documentary-photo">
            <img src="/images/nina-chairwoman-mandate.jpg" alt={copy.mandate.alt} loading="lazy" />
            <figcaption>{copy.mandate.caption}</figcaption>
          </figure>
          <div className="nq-mandate-copy">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.mandate.eyebrow}</p>
            <h2 id="mandate-title">{copy.mandate.title}</h2>
            <p className="nq-lead">{copy.mandate.body}</p>
            <div className="nq-source-block">
              <span>{copy.mandate.sourcesLabel}</span>
              {sourceLinks.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.label}>{source.label}<Arrow /></a>)}
            </div>
          </div>
          <aside className="nq-institutional-archive">
            <p className="nq-eyebrow">{copy.mandate.archiveTitle}</p>
            <p>{copy.mandate.archiveBody}</p>
            <ul>{institutionalContexts[language].map((item) => <li key={item}>{item}</li>)}</ul>
            <small>{copy.mandate.archiveNote}</small>
          </aside>
        </section>

        <section className="nq-stepup nq-section" id="stepup" aria-labelledby="stepup-title">
          <div className="nq-stepup-heading">
            <p className="nq-eyebrow">{copy.stepup.eyebrow}</p>
            <h2 id="stepup-title">{copy.stepup.title}</h2>
            <p className="nq-lead">{copy.stepup.body}</p>
            <a className="nq-text-link" href="https://stepupandco.com/" target="_blank" rel="noreferrer">{copy.stepup.cta}<Arrow /></a>
          </div>
          <figure>
            <img src="/images/nina-stepup-meeting.jpg" alt={copy.stepup.alt} loading="lazy" />
          </figure>
        </section>

        <section className="nq-ideas nq-section" id="ideas" aria-labelledby="ideas-title">
          <figure className="nq-ideas-visual">
            <img src="/images/nina-insights-stage.jpg" alt={copy.ideas.alt} loading="lazy" />
          </figure>
          <div className="nq-ideas-copy">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.ideas.eyebrow}</p>
            <h2 id="ideas-title">{copy.ideas.title}</h2>
            <p className="nq-lead">{copy.ideas.body}</p>
            <div className="nq-actions">
              <a className="nq-button nq-button-primary" href="https://www.linkedin.com/newsletters/7460722642883522560/" target="_blank" rel="noreferrer">{copy.ideas.primary}<Arrow /></a>
              <a className="nq-button nq-button-quiet" href="https://www.youtube.com/@NinaQuisinski" target="_blank" rel="noreferrer">{copy.ideas.secondary}<Arrow /></a>
            </div>
          </div>
        </section>

        <section className="nq-media nq-section" id="prensa" aria-labelledby="media-title">
          <div className="nq-media-heading">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.media.eyebrow}</p>
            <h2 id="media-title">{copy.media.title}</h2>
            <p>{copy.media.intro}</p>
            <figure className="nq-media-evidence">
              <img src="/images/nina-press-pbid.jpg" alt={copy.media.alt} loading="lazy" />
            </figure>
          </div>
          <div className="nq-media-list">
            {copy.media.items.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.outlet}>
                <span>{item.date}</span><strong>{item.outlet}</strong><p>{item.title}</p><Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="nq-lifestyle nq-section" id="lifestyle" aria-labelledby="lifestyle-title">
          <figure><img src="/images/nina-lifestyle-bilateral.jpg" alt={copy.lifestyle.alt} loading="lazy" /></figure>
          <div className="nq-lifestyle-copy">
            <p className="nq-eyebrow">{copy.lifestyle.eyebrow}</p>
            <h2 id="lifestyle-title">{copy.lifestyle.title}</h2>
            <p>{copy.lifestyle.body}</p>
            <ul>{copy.lifestyle.criteria.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className="nq-text-link" href="https://www.instagram.com/ninaquisinski/" target="_blank" rel="noreferrer">{copy.lifestyle.cta}<Arrow /></a>
          </div>
        </section>

        <section className="nq-channels nq-section" aria-labelledby="channels-title">
          <div>
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.channels.eyebrow}</p>
            <h2 id="channels-title">{copy.channels.title}</h2>
            <p>{copy.channels.body}</p>
          </div>
          <nav aria-label={copy.channels.eyebrow}>
            {copy.channels.links.map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.label}><span>{item.detail}</span><strong>{item.label}</strong><Arrow /></a>)}
          </nav>
        </section>
      </main>

      <NinaFooter language={language} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
