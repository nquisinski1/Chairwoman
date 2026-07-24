import Image from "next/image";
import {
  chairwomanCopy,
  chairwomanPaths,
  homePaths,
} from "../_content/chairwoman";
import type { Language } from "../_content/landing";
import { NinaFooter } from "./NinaFooter";
import { getPrimaryNavigation, NinaHeader } from "./NinaHeader";

const chamberHome = "https://ccibrasilpanama.org/";
const chamberProfile = "https://ccibrasilpanama.org/2026-lid-nina/";
const chamberHonours = "https://ccibrasilpanama.org/2026-camara/#honras";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function ChairwomanLanding({ language }: { language: Language }) {
  const copy = chairwomanCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";
  const navigation = getPrimaryNavigation(language);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Quisinski",
    alternateName: "Janaina Tobia Quisinski",
    url: `https://ninaquisinski.com${chairwomanPaths[language]}`,
    image: "https://ninaquisinski.com/images/nina-chairwoman-original.jpg",
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

      <NinaHeader
        language={language}
        languagePaths={chairwomanPaths}
        brandHref={homePaths[language]}
        menuLabel={copy.menu}
        navigation={navigation}
      />

      <main id="conteudo">
        <section className="cw-hero" aria-labelledby="cw-hero-title">
          <div className="cw-hero-copy">
            <h1 id="cw-hero-title">
              <span>{copy.hero.titleBefore}</span>
              <em>{copy.hero.titleAccent}</em>
              <span>{copy.hero.titleAfter}</span>
            </h1>
            <p className="cw-hero-descriptor">{copy.hero.descriptor}</p>
            <div className="cw-actions">
              <a className="cw-button cw-button-accent" href="#mandato">
                {copy.hero.primary}<Arrow />
              </a>
              <a className="cw-button cw-button-outline" href={chamberHome} target="_blank" rel="noreferrer">
                {copy.hero.secondary}<Arrow />
              </a>
            </div>
          </div>

          <figure className="cw-hero-photo">
            <Image
              src="/images/nina-chairwoman-original.jpg"
              alt={copy.hero.alt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
          </figure>
        </section>

        <section className="cw-mandate" id="mandato" aria-labelledby="cw-mandate-title">
          <div className="cw-section-heading">
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

        <section className="cw-letters" id="cartas" aria-labelledby="cw-letters-title">
          <div className="cw-letters-heading">
            <div>
              <h2 id="cw-letters-title">{copy.letters.title}</h2>
            </div>
            <div className="cw-letters-intro">
              <p>{copy.letters.intro}</p>
              <a href={chamberHonours} target="_blank" rel="noreferrer">
                {copy.letters.archiveAction}<Arrow />
              </a>
            </div>
          </div>

          <ol className="cw-letter-list">
            {copy.letters.items.map((item, index) => (
              <li className={index === 1 ? "cw-letter-featured" : undefined} key={`${item.date}-${item.title}`}>
                <div className="cw-letter-meta">
                  <time>{item.date}</time>
                  <span>{item.category}</span>
                </div>
                <p className="cw-letter-issuer">{item.issuer}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${copy.letters.sourceAction}: ${item.title}`}>
                  {copy.letters.sourceAction}<Arrow />
                </a>
              </li>
            ))}
          </ol>

          <p className="cw-letters-disclaimer">{copy.letters.disclaimer}</p>
        </section>

        <section className="cw-protocol" id="criterio" aria-labelledby="cw-protocol-title">
          <div className="cw-protocol-heading">
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
          <h2 id="cw-chamber-title">{copy.chamber.title}</h2>
          <p>{copy.chamber.body}</p>
          <div className="cw-actions">
            <a className="cw-button cw-button-accent" href={chamberHome} target="_blank" rel="noreferrer">
              {copy.chamber.primary}<Arrow />
            </a>
            <a className="cw-button cw-button-outline" href={chamberProfile} target="_blank" rel="noreferrer">
              {copy.chamber.secondary}<Arrow />
            </a>
          </div>
        </section>
      </main>

      <NinaFooter language={language} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
  );
}
