import Image from "next/image";
import { chairwomanCopy, chairwomanPaths, homePaths, type Language } from "../_content/chairwoman";

const chamberHome = "https://ccibrasilpanama.org/";
const chamberProfile = "https://ccibrasilpanama.org/2026-lid-nina/";
const chamberHonours = "https://ccibrasilpanama.org/2026-camara/#honras";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function EditorialHeader({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  const links = [
    [copy.nav.mandate, "#mandato"],
    [copy.nav.record, "#historico"],
    [copy.nav.letters, "#cartas"],
    [copy.nav.press, "#imprensa"],
  ];

  return (
    <header className="ne-header">
      <nav className="ne-nav ne-nav--left" aria-label={copy.menu}>
        {links.slice(0, 2).map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="ne-mark" href={homePaths[language]} aria-label={copy.nav.home}>
        <Image src="/brand/nina-chairwoman-mark.svg" alt="" width={52} height={40} />
      </a>
      <nav className="ne-nav ne-nav--right" aria-label={copy.menu}>
        {links.slice(2).map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        <a href={chamberHome} target="_blank" rel="noreferrer">{copy.nav.chamber}</a>
      </nav>
      <div className="ne-languages" aria-label="Language">
        {(["es", "pt", "en"] as Language[]).map((item) => (
          <a href={chairwomanPaths[item]} aria-current={item === language ? "page" : undefined} key={item}>{item}</a>
        ))}
      </div>
      <details className="ne-mobile-menu">
        <summary>{copy.menu}</summary>
        <nav aria-label={copy.menu}>
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href={chamberHome} target="_blank" rel="noreferrer">{copy.nav.chamber}<Arrow /></a>
        </nav>
      </details>
    </header>
  );
}

function EditorialFooter({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  return (
    <footer className="ne-footer">
      <div className="ne-footer-mark" aria-hidden="true">NQ</div>
      <div>
        <p>{copy.footer.statement}</p>
        <small>Brasil · Panamá</small>
      </div>
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
  const strip = language === "es"
    ? [["2024", "Fundación de la Cámara"], ["BR ↔ PA", "Agenda bilateral"], ["CCI", "Presidencia institucional"], ["OFICIAL", "Fuentes documentadas"]]
    : language === "pt"
      ? [["2024", "Fundação da Câmara"], ["BR ↔ PA", "Agenda bilateral"], ["CCI", "Presidência institucional"], ["OFICIAL", "Fontes documentadas"]]
      : [["2024", "Chamber founded"], ["BR ↔ PA", "Bilateral agenda"], ["CCI", "Institutional presidency"], ["OFFICIAL", "Documented sources"]];
  const identity = language === "es"
    ? { label: "Presidencia institucional", intro: "PRESIDENTA", quote: "La autoridad no se declara.", script: "Se demuestra con trabajo, contexto y fuentes.", section: "Una trayectoria construida entre dos países.", record: "Registro institucional", letters: "Cartas y reconocimientos", press: "Prensa y presencia pública" }
    : language === "pt"
      ? { label: "Presidência institucional", intro: "PRESIDENTE", quote: "Autoridade não se declara.", script: "Demonstra-se com trabalho, contexto e fontes.", section: "Uma trajetória construída entre dois países.", record: "Registro institucional", letters: "Cartas e reconhecimentos", press: "Imprensa e presença pública" }
      : { label: "Institutional presidency", intro: "CHAIRWOMAN", quote: "Authority is not declared.", script: "It is demonstrated through work, context and sources.", section: "A record built between two countries.", record: "Institutional record", letters: "Letters and recognition", press: "Press and public presence" };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: `https://chairwoman.ninaquisinski.com${chairwomanPaths[language]}`,
    image: "https://chairwoman.ninaquisinski.com/images/nina-chairwoman-opening-2025.jpg",
    jobTitle: copy.hero.role,
    memberOf: { "@type": "Organization", name: copy.chamber.organization, url: chamberHome },
  };

  return (
    <div className="ne-site" lang={locale}>
      <a className="skip-link" href="#conteudo">{copy.skip}</a>
      <div className="ne-frame">
        <EditorialHeader language={language} />

        <main id="conteudo">
          <section className="ne-hero" aria-labelledby="ne-hero-title">
            <p className="ne-kicker">{identity.label}</p>
            <div className="ne-hero-title-row">
              <h1 id="ne-hero-title"><span>{identity.intro}</span><em>Nina Quisinski</em></h1>
              <p>{copy.hero.role}</p>
            </div>
            <div className="ne-hero-images">
              <figure className="ne-hero-main">
                <Image src="/images/nina-chairwoman-opening-2025.jpg" alt={copy.hero.alt} fill priority sizes="(max-width: 760px) 100vw, 72vw" />
              </figure>
              <figure className="ne-hero-portrait">
                <Image src="/images/nina-official-portrait.jpg" alt={copy.hero.portraitAlt} fill sizes="(max-width: 760px) 38vw, 210px" />
              </figure>
              <span className="ne-orbit" aria-hidden="true" />
            </div>
            <div className="ne-hero-foot">
              <p>{copy.hero.descriptor}</p>
              <p>{copy.mandate.lead}</p>
              <a href="#mandato">{copy.hero.primary}<Arrow /></a>
            </div>
          </section>

          <section className="ne-proof-strip" aria-label={copy.authorityLabel}>
            {strip.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </section>

          <section className="ne-story" id="mandato" aria-labelledby="ne-story-title">
            <div className="ne-story-photo">
              <figure><Image src="/images/nina-chairwoman-mandate.jpg" alt={copy.mandate.alt} fill sizes="(max-width: 760px) 100vw, 45vw" /></figure>
              <span className="ne-story-orbit" aria-hidden="true" />
            </div>
            <div className="ne-story-copy">
              <p className="ne-kicker">{copy.nav.mandate}</p>
              <h2 id="ne-story-title">{identity.quote}<em>{identity.script}</em></h2>
              <p>{copy.mandate.body}</p>
              <a href={chamberProfile} target="_blank" rel="noreferrer">{copy.chamber.secondary}<Arrow /></a>
            </div>
            <blockquote>{identity.section}</blockquote>
            <figure className="ne-story-detail"><Image src="/images/nina-press-pbid.jpg" alt={copy.press.alt} fill sizes="(max-width: 760px) 42vw, 280px" /></figure>
          </section>

          <section className="ne-record" id="historico" aria-labelledby="ne-record-title">
            <div className="ne-record-head">
              <p className="ne-kicker">{identity.record}</p>
              <h2 id="ne-record-title">{copy.record.title}</h2>
              <p>{copy.record.intro}</p>
            </div>
            <ol>
              {copy.record.items.map((item, index) => (
                <li key={`${item.date}-${item.title}`}>
                  <span>0{index + 1}</span><time>{item.date}</time>
                  <div><small>{item.origin}</small><h3>{item.title}</h3><p>{item.body}</p></div>
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${copy.record.sourceAction}: ${item.title}`}><Arrow /></a>
                </li>
              ))}
            </ol>
          </section>

          <section className="ne-letters" id="cartas" aria-labelledby="ne-letters-title">
            <div className="ne-letters-head">
              <p className="ne-kicker">{identity.letters}</p>
              <h2 id="ne-letters-title">{copy.letters.title}</h2>
              <p>{copy.letters.intro}</p>
              <a href={chamberHonours} target="_blank" rel="noreferrer">{copy.letters.archiveAction}<Arrow /></a>
            </div>
            <ol>
              {copy.letters.items.map((item, index) => (
                <li key={`${item.date}-${item.title}`}>
                  <span>0{index + 1}</span><time>{item.date}</time><small>{item.category}</small>
                  <h3>{item.title}</h3><p>{item.issuer}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">{copy.letters.sourceAction}<Arrow /></a>
                </li>
              ))}
            </ol>
          </section>

          <section className="ne-press" id="imprensa" aria-labelledby="ne-press-title">
            <figure><Image src="/images/nina-press-pbid.jpg" alt={copy.press.alt} fill sizes="(max-width: 760px) 100vw, 48vw" /></figure>
            <div>
              <p className="ne-kicker">{identity.press}</p>
              <h2 id="ne-press-title">{copy.press.title}</h2>
              <p>{copy.press.body}</p>
              <a href={copy.press.href} target="_blank" rel="noreferrer">{copy.press.action}<Arrow /></a>
            </div>
          </section>

          <section className="ne-chamber" aria-labelledby="ne-chamber-title">
            <p className="ne-script-line">Brasil &amp; Panamá</p>
            <h2 id="ne-chamber-title">{copy.chamber.title}</h2>
            <p>{copy.chamber.body}</p>
            <div><a href={chamberHome} target="_blank" rel="noreferrer">{copy.chamber.primary}<Arrow /></a><a href={chamberProfile} target="_blank" rel="noreferrer">{copy.chamber.secondary}<Arrow /></a></div>
          </section>
        </main>

        <EditorialFooter language={language} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
