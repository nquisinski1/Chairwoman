import { EditorialHeader } from "./ChairwomanLanding";
import type { Language } from "../_content/chairwoman";
import { stepUpCopy } from "../_content/stepup";

const stepUpHome = "https://stepupandco.com/";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function StepUpLanding({ language }: { language: Language }) {
  const copy = stepUpCopy[language];
  const locale = language === "es" ? "es-PA" : language === "pt" ? "pt-BR" : "en-US";

  return (
    <div className="ne-site su-site" lang={locale}>
      <a className="skip-link" href="#conteudo">{language === "es" ? "Ir al contenido" : language === "pt" ? "Ir para o conteúdo" : "Skip to content"}</a>
      <div className="ne-frame">
        <EditorialHeader language={language} area="stepup" />

        <main id="conteudo">
          <section className="ne-hero su-hero" aria-labelledby="su-hero-title">
            <div className="ne-hero-title-row">
              <p className="su-role">{copy.role}</p>
              <h1 id="su-hero-title"><em>StepUp &amp; Company</em></h1>
              <p className="su-thesis">{copy.thesis}</p>
            </div>
          </section>

          <section className="ne-story su-perspective" id="perspectiva" aria-labelledby="su-perspective-title">
            <div className="ne-story-copy">
              <h2 id="su-perspective-title">{copy.perspective.title}<em>{copy.perspective.accent}</em></h2>
              <div className="ne-story-body">
                <p className="ne-kicker">{copy.perspective.kicker}</p>
                {copy.perspective.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <blockquote>{copy.perspective.statement}</blockquote>
          </section>

          <section className="ne-record su-record" id="relaciones" aria-labelledby="su-relations-title">
            <div className="ne-record-head">
              <p className="ne-kicker">{copy.relations.kicker}</p>
              <h2 id="su-relations-title">{copy.relations.title}</h2>
              <p>{copy.relations.intro}</p>
            </div>
            <ol>
              {copy.relations.items.map((item) => (
                <li key={item.label}>
                  <time>{item.label}</time>
                  <div><small>{copy.relations.kicker}</small><h3>{item.title}</h3><p>{item.body}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="ne-letters su-expansion" id="expansion" aria-labelledby="su-expansion-title">
            <div className="ne-letters-head">
              <p className="ne-kicker">{copy.expansion.kicker}</p>
              <h2 id="su-expansion-title">{copy.expansion.title}</h2>
              <p>{copy.expansion.intro}</p>
            </div>
            <ol>
              {copy.expansion.items.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span><small>{copy.expansion.kicker}</small>
                  <h3>{item.title}</h3><p>{item.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="ne-press su-partner" id="socia" aria-labelledby="su-partner-title">
            <div>
              <p className="ne-kicker">{copy.partner.kicker}</p>
              <h2 id="su-partner-title">{copy.partner.title}</h2>
              <p>{copy.partner.body}</p>
              <p className="su-boundary">{copy.partner.boundary}</p>
              <a href={stepUpHome} target="_blank" rel="noreferrer">{copy.partner.action}<Arrow /></a>
            </div>
          </section>
        </main>

        <footer className="ne-footer">
          <div className="ne-footer-mark" aria-hidden="true">NQ</div>
          <div><p>{copy.footer}</p><small>StepUp &amp; Company</small></div>
        </footer>
      </div>
    </div>
  );
}
