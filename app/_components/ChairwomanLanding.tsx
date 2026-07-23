import Image from "next/image";
import {
  chairwomanCopy,
  chairwomanPaths,
  homePaths,
} from "../_content/chairwoman";
import type { Language } from "../_content/landing";

const chamberHome = "https://ccibrasilpanama.org/";
const chamberProfile = "https://ccibrasilpanama.org/2026-lid-nina/";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark({ href }: { href: string }) {
  return (
    <a className="cw-wordmark" href={href} aria-label="Nina Quisinski — Home">
      <span>Nina</span>
      <strong>QUISINSKI</strong>
      <i aria-hidden="true" />
    </a>
  );
}

function LanguageSwitcher({ language }: { language: Language }) {
  return (
    <nav className="cw-languages" aria-label="Language">
      {(["es", "pt", "en"] as const).map((item) => (
        <a
          href={chairwomanPaths[item]}
          hrefLang={item}
          aria-current={language === item ? "page" : undefined}
          key={item}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function ChairwomanLanding({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";
  const navigation = [
    { label: copy.nav.home, href: homePaths[language] },
    { label: copy.nav.mandate, href: "#mandato" },
    { label: copy.nav.record, href: "#historico" },
    { label: copy.nav.protocol, href: "#criterio" },
    { label: copy.nav.chamber, href: chamberHome, external: true },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: `https://ninaquisinski.com${chairwomanPaths[language]}`,
    image: "https://ninaquisinski.com/images/nina-chairwoman-podium.jpg",
    jobTitle: language === "en" ? "Founder and President" : language === "pt" ? "Fundadora e Presidente" : "Fundadora y Presidenta",
    memberOf: {
      "@type": "Organization",
      name: language === "en" ? "Brazil–Panama Chamber of Commerce and Industry" : language === "pt" ? "Câmara de Comércio e Indústria Brasil–Panamá" : "Cámara de Comercio e Industria Brasil–Panamá",
      url: chamberHome,
    },
  };

  return (
    <div className="cw-site" lang={locale}>
      <a className="skip-link" href="#conteudo">{copy.skip}</a>

      <header className="cw-header">
        <Wordmark href={homePaths[language]} />

        <nav className="cw-desktop-nav" aria-label={copy.menu}>
          {navigation.map((item) => (
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher language={language} />

        <details className="cw-mobile-menu">
          <summary>{copy.menu}<span aria-hidden="true">＋</span></summary>
          <div>
            <nav aria-label={copy.menu}>
              {navigation.map((item) => (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LanguageSwitcher language={language} />
          </div>
        </details>
      </header>

      <main id="conteudo">
        <section className="cw-hero" aria-labelledby="cw-hero-title">
          <div className="cw-hero-copy">
            <p className="cw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="cw-hero-title">
              <span>{copy.hero.titleBefore}</span>
              <em>{copy.hero.titleAccent}</em>
              <span>{copy.hero.titleAfter}</span>
            </h1>
            <p className="cw-hero-descriptor">{copy.hero.descriptor}</p>
            <div className="cw-actions">
              <a className="cw-button cw-button-gold" href="#mandato">
                {copy.hero.primary}<Arrow />
              </a>
              <a className="cw-button cw-button-outline" href={chamberHome} target="_blank" rel="noreferrer">
                {copy.hero.secondary}<Arrow />
              </a>
            </div>
            <small>{copy.hero.sourceNote}</small>
          </div>

          <figure className="cw-hero-photo">
            <Image
              src="/images/nina-chairwoman-podium.jpg"
              alt={copy.hero.alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
            <figcaption>{copy.hero.caption}</figcaption>
            <span aria-hidden="true">CHAIRWOMAN</span>
          </figure>
        </section>

        <section className="cw-mandate" id="mandato" aria-labelledby="cw-mandate-title">
          <div className="cw-section-heading">
            <p className="cw-index">{copy.mandate.index}</p>
            <p className="cw-eyebrow">{copy.mandate.eyebrow}</p>
            <h2 id="cw-mandate-title">{copy.mandate.title}</h2>
          </div>
          <div className="cw-mandate-copy">
            <p className="cw-lead">{copy.mandate.lead}</p>
            <p>{copy.mandate.body}</p>
          </div>
          <ol className="cw-pillars">
            {copy.mandate.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <span>0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cw-record" id="historico" aria-labelledby="cw-record-title">
          <div className="cw-record-intro">
            <p className="cw-index">{copy.record.index}</p>
            <p className="cw-eyebrow">{copy.record.eyebrow}</p>
            <h2 id="cw-record-title">{copy.record.title}</h2>
            <p>{copy.record.intro}</p>
          </div>

          <ol className="cw-timeline">
            {copy.record.items.map((item, index) => (
              <li key={`${item.date}-${item.title}`}>
                <span className="cw-timeline-number">0{index + 1}</span>
                <div className="cw-timeline-meta">
                  <time>{item.date}</time>
                  <span>{item.origin}</span>
                </div>
                <div className="cw-timeline-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${copy.record.sourceAction}: ${item.title}`}>
                  {copy.record.sourceAction}<Arrow />
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="cw-protocol" id="criterio" aria-labelledby="cw-protocol-title">
          <div className="cw-protocol-heading">
            <p className="cw-index">{copy.protocol.index}</p>
            <p className="cw-eyebrow">{copy.protocol.eyebrow}</p>
            <h2 id="cw-protocol-title">{copy.protocol.title}</h2>
          </div>
          <div className="cw-protocol-copy">
            <p className="cw-lead">{copy.protocol.body}</p>
            <ol>
              {copy.protocol.labels.map((item, index) => (
                <li key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <small>{copy.protocol.note}</small>
          </div>
        </section>

        <section className="cw-chamber" aria-labelledby="cw-chamber-title">
          <p className="cw-eyebrow">{copy.chamber.eyebrow}</p>
          <h2 id="cw-chamber-title">{copy.chamber.title}</h2>
          <p>{copy.chamber.body}</p>
          <div className="cw-actions">
            <a className="cw-button cw-button-gold" href={chamberHome} target="_blank" rel="noreferrer">
              {copy.chamber.primary}<Arrow />
            </a>
            <a className="cw-button cw-button-outline" href={chamberProfile} target="_blank" rel="noreferrer">
              {copy.chamber.secondary}<Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="cw-footer">
        <Wordmark href={homePaths[language]} />
        <p>{copy.footer.statement}</p>
        <div>
          <span>{copy.footer.evidence}</span>
          <span>{copy.footer.rights}</span>
          <span>© 2026 Nina Quisinski</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
