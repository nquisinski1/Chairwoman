import { landingCopy, type Language } from "../_content/landing";

const languagePaths: Record<Language, string> = { es: "/", pt: "/pt/", en: "/en/" };

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

const institutionalContexts = ["CCI Brasil–Panamá", "MICI Panamá", "Embajada de Brasil", "Embajada de Panamá"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function LanguageSwitcher({ language, compact = false }: { language: Language; compact?: boolean }) {
  return (
    <nav className={compact ? "language-switcher language-switcher-compact" : "language-switcher"} aria-label="Language">
      {(["es", "pt", "en"] as const).map((item) => (
        <a key={item} href={languagePaths[item]} hrefLang={item} aria-current={language === item ? "page" : undefined}>
          {item.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function NinaLanding({ language }: { language: Language }) {
  const copy = landingCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";
  const navItems = [
    [copy.nav.mandate, "#presidencia"],
    [copy.nav.stepup, "#stepup"],
    [copy.nav.ideas, "#ideas"],
    [copy.nav.media, "#prensa"],
    [copy.nav.lifestyle, "#lifestyle"],
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: "https://ninaquisinski.com/",
    image: "https://ninaquisinski.com/images/nina-chairwoman-podium.jpg",
    jobTitle: language === "en" ? "Founder and President" : language === "pt" ? "Fundadora e Presidente" : "Fundadora y Presidenta",
    worksFor: {
      "@type": "Organization",
      name: language === "en" ? "Brazil–Panama Chamber of Commerce and Industry" : language === "pt" ? "Câmara de Comércio e Indústria Brasil–Panamá" : "Cámara de Comercio e Industria Brasil–Panamá",
      url: "https://ccibrasilpanama.org/",
    },
    affiliation: { "@type": "Organization", name: "StepUp & Company", url: "https://site.stepup10x.com/" },
    sameAs: [
      "https://www.linkedin.com/in/ninaquisinski/",
      "https://www.instagram.com/ninaquisinski/",
      "https://www.youtube.com/@NinaQuisinski",
    ],
  };

  return (
    <div className="nq-site" lang={locale}>
      <a className="skip-link" href="#contenido">{copy.skip}</a>

      <header className="nq-header">
        <a className="nq-brand" href={languagePaths[language]} aria-label="Nina Quisinski — Home">
          <span>NINA</span>
          <strong>QUISINSKI</strong>
          <i aria-hidden="true" />
        </a>

        <nav className="nq-nav" aria-label={copy.menu}>
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <LanguageSwitcher language={language} />

        <details className="nq-mobile-menu">
          <summary>{copy.menu}<span aria-hidden="true">＋</span></summary>
          <div>
            <nav aria-label={copy.menu}>
              {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            </nav>
            <LanguageSwitcher language={language} compact />
          </div>
        </details>
      </header>

      <main id="contenido">
        <section className="nq-hero" aria-labelledby="hero-title">
          <div className="nq-hero-copy">
            <p className="nq-eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="hero-title"><span>NINA</span><strong>QUISINSKI</strong></h1>
            <p className="nq-descriptor">{copy.hero.descriptor}</p>
            <p className="nq-hero-thesis">{copy.hero.thesis}</p>
            <div className="nq-actions">
              <a className="nq-button nq-button-primary" href="#presidencia">{copy.hero.primary}<Arrow /></a>
              <a className="nq-button nq-button-quiet" href="#ideas">{copy.hero.secondary}<Arrow /></a>
            </div>
          </div>

          <figure className="nq-hero-visual">
            <img src="/images/nina-chairwoman-podium.jpg" alt={copy.hero.alt} fetchPriority="high" />
            <figcaption>{copy.hero.caption}</figcaption>
            <span className="nq-hero-signal">{copy.hero.signal}</span>
          </figure>
        </section>

        <section className="nq-proof" aria-label={copy.proofLabel}>
          <p>{copy.proofLabel}</p>
          <div className="nq-proof-window">
            <div className="nq-proof-track">
              {[0, 1].map((group) => (
                <div className="nq-proof-group" key={group} aria-hidden={group === 1 ? "true" : undefined}>
                  {copy.proof.map((item) => (
                    <a href={item.href} key={`${group}-${item.label}`} target={item.href?.startsWith("http") ? "_blank" : undefined} rel={item.href?.startsWith("http") ? "noreferrer" : undefined}>
                      <strong>{item.label}</strong><span>{item.detail}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
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
            <img src="/images/nina-press-hero.jpg" alt={copy.mandate.alt} loading="lazy" />
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
            <ul>{institutionalContexts.map((item) => <li key={item}>{item}</li>)}</ul>
            <small>{copy.mandate.archiveNote}</small>
          </aside>
        </section>

        <section className="nq-stepup nq-section" id="stepup" aria-labelledby="stepup-title">
          <div className="nq-stepup-heading">
            <p className="nq-eyebrow">{copy.stepup.eyebrow}</p>
            <h2 id="stepup-title">{copy.stepup.title}</h2>
            <p className="nq-lead">{copy.stepup.body}</p>
            <a className="nq-text-link" href="https://site.stepup10x.com/" target="_blank" rel="noreferrer">{copy.stepup.cta}<Arrow /></a>
          </div>
          <figure>
            <img src="/images/nina-business-speaking.jpg" alt={copy.stepup.alt} loading="lazy" />
            <figcaption>{copy.stepup.caption}</figcaption>
          </figure>
          <div className="nq-stepup-pillars">
            {copy.stepup.pillars.map((pillar, index) => (
              <article key={pillar.title}><span>0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.body}</p></article>
            ))}
            <small>{copy.stepup.note}</small>
          </div>
        </section>

        <section className="nq-ideas nq-section" id="ideas" aria-labelledby="ideas-title">
          <div className="nq-ideas-name" aria-hidden="true">NQ</div>
          <div className="nq-ideas-copy">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.ideas.eyebrow}</p>
            <h2 id="ideas-title">{copy.ideas.title}</h2>
            <p className="nq-lead">{copy.ideas.body}</p>
            <div className="nq-actions">
              <a className="nq-button nq-button-primary" href="https://www.linkedin.com/newsletters/7460722642883522560/" target="_blank" rel="noreferrer">{copy.ideas.primary}<Arrow /></a>
              <a className="nq-button nq-button-quiet" href="https://www.youtube.com/@NinaQuisinski" target="_blank" rel="noreferrer">{copy.ideas.secondary}<Arrow /></a>
            </div>
          </div>
          <ol className="nq-topic-list">
            {copy.ideas.topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span><strong>{topic}</strong></li>)}
          </ol>
        </section>

        <section className="nq-media nq-section" id="prensa" aria-labelledby="media-title">
          <div className="nq-media-heading">
            <p className="nq-eyebrow nq-eyebrow-terra">{copy.media.eyebrow}</p>
            <h2 id="media-title">{copy.media.title}</h2>
            <p>{copy.media.intro}</p>
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
          <figure><img src="/images/nina-lifestyle-dinner.jpg" alt={copy.lifestyle.alt} loading="lazy" /></figure>
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

      <footer className="nq-footer">
        <div className="nq-footer-brand"><span>NINA</span><strong>QUISINSKI</strong><i aria-hidden="true" /></div>
        <p>{copy.footer.statement}</p>
        <div><span>{copy.footer.evidence}</span><span>{copy.footer.rights}</span><span>© 2026 Nina Quisinski</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
