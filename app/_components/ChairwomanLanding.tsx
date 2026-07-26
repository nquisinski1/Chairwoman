import Image from "next/image";
import { chairwomanCopy, chairwomanPaths, homePaths } from "../_content/chairwoman";
import type { Language } from "../_content/landing";

const chamberHome = "https://ccibrasilpanama.org/";
const chamberProfile = "https://ccibrasilpanama.org/2026-lid-nina/";
const chamberHonours = "https://ccibrasilpanama.org/2026-camara/#honras";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ChairwomanHeader({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  const links = [
    [copy.nav.mandate, "#mandato"],
    [copy.nav.record, "#historico"],
    [copy.nav.letters, "#cartas"],
    [copy.nav.press, "#imprensa"],
  ];

  return (
    <header className="cw-chair-header">
      <a className="cw-chair-mark" href={homePaths[language]} aria-label={copy.nav.home}>
        <img src="/brand/nina-chairwoman-mark.svg" alt="" width="44" height="52" />
      </a>
      <nav className="cw-chair-nav" aria-label={copy.menu}>
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        <a href={chamberHome} target="_blank" rel="noreferrer">{copy.nav.chamber}<Arrow /></a>
      </nav>
      <div className="cw-chair-languages" aria-label="Language">
        {(["es", "pt", "en"] as Language[]).map((item) => (
          <a href={chairwomanPaths[item]} aria-current={item === language ? "page" : undefined} key={item}>{item}</a>
        ))}
      </div>
      <details className="cw-chair-mobile">
        <summary>{copy.menu}</summary>
        <nav aria-label={copy.menu}>
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href={chamberHome} target="_blank" rel="noreferrer">{copy.nav.chamber}<Arrow /></a>
        </nav>
      </details>
    </header>
  );
}

function ChairwomanFooter({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  return (
    <footer className="cw-chair-footer">
      <img src="/brand/nina-chairwoman-mark.svg" alt="" width="38" height="45" />
      <p>{copy.footer.statement}</p>
      <nav aria-label={copy.nav.chamber}>
        <a href={chamberHome} target="_blank" rel="noreferrer">{copy.chamber.primary}</a>
        <a href={chamberProfile} target="_blank" rel="noreferrer">{copy.chamber.secondary}</a>
        <a href={chamberHonours} target="_blank" rel="noreferrer">{copy.letters.archiveAction}</a>
      </nav>
    </footer>
  );
}

export function ChairwomanLanding({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: `https://ninaquisinski.com${chairwomanPaths[language]}`,
    image: "https://ninaquisinski.com/images/nina-chairwoman-opening-2025.jpg",
    jobTitle: copy.hero.role,
    memberOf: { "@type": "Organization", name: copy.chamber.organization, url: chamberHome },
  };

  return (
    <div className="cw-site" lang={locale}>
      <a className="skip-link" href="#conteudo">{copy.skip}</a>
      <ChairwomanHeader language={language} />

      <main id="conteudo">
        <section className="cw-hero-editorial" aria-labelledby="cw-hero-title">
          <div className="cw-hero-intro">
            <p className="cw-signature">Nina Quisinski</p>
            <p className="cw-hero-role">{copy.hero.role}</p>
            <h1 id="cw-hero-title">
              <span>{copy.hero.titleBefore}</span>{" "}
              <span className="cw-title-accent">{copy.hero.titleAccent}</span>{" "}
              <span>{copy.hero.titleAfter}</span>
            </h1>
            <p className="cw-hero-descriptor">{copy.hero.descriptor}</p>
            <div className="cw-actions">
              <a className="cw-button cw-button-accent" href="#mandato">{copy.hero.primary}<Arrow /></a>
              <a className="cw-button cw-button-outline" href={chamberHome} target="_blank" rel="noreferrer">{copy.hero.secondary}<Arrow /></a>
            </div>
          </div>
          <div className="cw-hero-collage">
            <figure className="cw-portrait-main">
              <Image src="/images/nina-chairwoman-opening-2025.jpg" alt={copy.hero.alt} fill priority sizes="(max-width: 980px) 100vw, 52vw" />
            </figure>
            <figure className="cw-portrait-secondary">
              <Image src="/images/nina-official-portrait.jpg" alt={copy.hero.portraitAlt} fill sizes="(max-width: 980px) 42vw, 240px" />
            </figure>
          </div>
        </section>

        <section className="cw-authority-strip" aria-label={copy.authorityLabel}>
          <ul>{copy.authority.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="cw-mandate" id="mandato" aria-labelledby="cw-mandate-title">
          <div className="cw-section-heading"><h2 id="cw-mandate-title">{copy.mandate.title}</h2></div>
          <div className="cw-mandate-copy"><p className="cw-lead">{copy.mandate.lead}</p><p>{copy.mandate.body}</p></div>
          <figure className="cw-mandate-photo"><Image src="/images/nina-chairwoman-mandate.jpg" alt={copy.mandate.alt} fill sizes="(max-width: 980px) 100vw, 88vw" /></figure>
          <ol className="cw-pillars">
            {copy.mandate.pillars.map((pillar, index) => <li key={pillar.title}><span>0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.body}</p></li>)}
          </ol>
        </section>

        <section className="cw-record" id="historico" aria-labelledby="cw-record-title">
          <div className="cw-record-intro"><h2 id="cw-record-title">{copy.record.title}</h2><p>{copy.record.intro}</p></div>
          <ol className="cw-timeline">
            {copy.record.items.map((item, index) => (
              <li key={`${item.date}-${item.title}`}>
                <span className="cw-timeline-number">0{index + 1}</span>
                <div className="cw-timeline-meta"><time>{item.date}</time><span>{item.origin}</span></div>
                <div className="cw-timeline-copy"><h3>{item.title}</h3><p>{item.body}</p></div>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${copy.record.sourceAction}: ${item.title}`}>{copy.record.sourceAction}<Arrow /></a>
              </li>
            ))}
          </ol>
        </section>

        <section className="cw-letters" id="cartas" aria-labelledby="cw-letters-title">
          <div className="cw-letters-heading">
            <div><h2 id="cw-letters-title">{copy.letters.title}</h2></div>
            <div className="cw-letters-intro"><p>{copy.letters.intro}</p><a href={chamberHonours} target="_blank" rel="noreferrer">{copy.letters.archiveAction}<Arrow /></a></div>
          </div>
          <ol className="cw-letter-list">
            {copy.letters.items.map((item, index) => (
              <li className={index === 1 ? "cw-letter-featured" : undefined} key={`${item.date}-${item.title}`}>
                <div className="cw-letter-meta"><time>{item.date}</time><span>{item.category}</span></div>
                <p className="cw-letter-issuer">{item.issuer}</p><h3>{item.title}</h3><p>{item.body}</p>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${copy.letters.sourceAction}: ${item.title}`}>{copy.letters.sourceAction}<Arrow /></a>
              </li>
            ))}
          </ol>
          <p className="cw-letters-disclaimer">{copy.letters.disclaimer}</p>
        </section>

        <section className="cw-press" id="imprensa" aria-labelledby="cw-press-title">
          <figure><Image src="/images/nina-press-pbid.jpg" alt={copy.press.alt} fill sizes="(max-width: 980px) 100vw, 50vw" /></figure>
          <div><h2 id="cw-press-title">{copy.press.title}</h2><p>{copy.press.body}</p><a href={copy.press.href} target="_blank" rel="noreferrer">{copy.press.action}<Arrow /></a></div>
        </section>

        <section className="cw-chamber" aria-labelledby="cw-chamber-title">
          <h2 id="cw-chamber-title">{copy.chamber.title}</h2><p>{copy.chamber.body}</p>
          <div className="cw-actions"><a className="cw-button cw-button-accent" href={chamberHome} target="_blank" rel="noreferrer">{copy.chamber.primary}<Arrow /></a><a className="cw-button cw-button-outline" href={chamberProfile} target="_blank" rel="noreferrer">{copy.chamber.secondary}<Arrow /></a></div>
        </section>
      </main>

      <ChairwomanFooter language={language} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
