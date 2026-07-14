import type { Metadata } from "next";
import { PageShell, SourceLink } from "./_components/SiteChrome";

export const metadata: Metadata = {
  title: "Nina Quisinski | Capital, relaciones y expansión",
  description:
    "Sitio oficial de Nina Quisinski: liderazgo institucional, capital relacional y expansión entre Brasil, Panamá y América Latina.",
};

const appearances = [
  {
    type: "Agenda institucional",
    title: "Panama Business & Investors’ Day 2025",
    detail: "Presidenta de la CCI · Panelista · Moderadora",
    href: "https://ccibrasilpanama.org/eventos/panama-business-investors-days-2025/",
  },
  {
    type: "Perspectiva editorial",
    title: "Panamá y Brasil construyen un puente estratégico global",
    detail: "Investor Lifestyle · 2025",
    href: "https://investor.com.pa/business/panama-y-brasil-construyen-un-puente-estrategico-global/",
  },
  {
    type: "Trayectoria empresarial",
    title: "COO & Co-founder de StepUp & Company",
    detail: "Perfil corporativo oficial",
    href: "https://site.stepup10x.com/",
  },
];

export default function Home() {
  return (
    <PageShell active="home">
      <section className="home-hero">
        <div className="hero-image" role="img" aria-label="Nina Quisinski atendiendo a la prensa" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-kicker">Capital · Relaciones · Expansión</p>
          <h1>Nina Quisinski</h1>
          <p className="hero-thesis">
            Las relaciones correctas no solo abren puertas.
            <span> Construyen mercados.</span>
          </p>
          <p className="hero-description">
            Liderazgo institucional y visión empresarial entre Brasil, Panamá y América Latina.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="/my-story">Conocer mi historia</a>
            <a className="button button-ghost" href="/press">Solicitudes de prensa</a>
          </div>
        </div>
        <div className="hero-roles" aria-label="Roles institucionales">
          <span>Presidenta · CCI Brasil–Panamá</span>
          <span>COO & Co-founder · StepUp & Company</span>
        </div>
      </section>

      <section className="source-ribbon" aria-label="Fuentes y apariciones documentadas">
        <span>Trayectoria documentada en</span>
        <SourceLink href="https://mici.gob.pa/2025/09/30/por-segundo-dia-consecutivo-mici-impulsa-la-proyeccion-internacional-de-panama-ante-inversionistas/">MICI Panamá</SourceLink>
        <SourceLink href="https://investor.com.pa/business/panama-y-brasil-construyen-un-puente-estrategico-global/">Investor Lifestyle</SourceLink>
        <SourceLink href="https://www.telemetro.com/nacionales/panama-y-brasil-anuncian-primer-foro-comercial-ingreso-al-mercosur-n6053628">Telemetro</SourceLink>
        <SourceLink href="https://quijano.com/business-investors-day-2025-organized-by-the-panama-brazil-chamber-of-commerce-and-industry/">Quijano & Associates</SourceLink>
      </section>

      <section className="manifesto-section content-grid">
        <div>
          <p className="section-index">01 / Visión</p>
          <p className="section-kicker">Una forma distinta de entender la influencia</p>
        </div>
        <div className="manifesto-copy">
          <h2>El capital no se mueve por contactos.</h2>
          <p className="serif-lead">Se mueve por confianza, criterio y contexto.</p>
          <p>
            Entrar a un mercado no empieza con una presentación. Empieza entendiendo el contexto,
            reconociendo quién construye confianza y creando una agenda en la que los intereses
            correctos puedan encontrarse.
          </p>
          <a className="text-link" href="/my-story">Leer la visión de Nina <span>↗</span></a>
        </div>
      </section>

      <section className="role-section">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / Roles</p>
            <p className="section-kicker">Tres dimensiones. Una misma convicción.</p>
          </div>
          <h2>Presidir. Construir. Conectar.</h2>
        </div>
        <div className="role-cards">
          <a className="role-card role-card-large" href="/chairwoman">
            <img src="/images/nina-chairwoman-podium.jpg" alt="Nina Quisinski durante una intervención institucional en Panamá" />
            <div className="role-overlay">
              <span>01 · Chairwoman</span>
              <h3>Una agenda empresarial entre Brasil y Panamá.</h3>
              <p>Explorar el mandato institucional</p>
            </div>
          </a>
          <a className="role-card" href="/la-socia">
            <img src="/images/nina-business-speaking.jpg" alt="Nina Quisinski participando en una conversación empresarial" />
            <div className="role-overlay">
              <span>02 · La Socia</span>
              <h3>Estrategia que convierte visión en crecimiento.</h3>
              <p>Conocer su rol en StepUp</p>
            </div>
          </a>
          <a className="role-card" href="/lifestyle">
            <img src="/images/nina-lifestyle-dinner.jpg" alt="Retrato editorial de Nina Quisinski" />
            <div className="role-overlay">
              <span>03 · Lifestyle</span>
              <h3>Presencia, cultura y colaboraciones con intención.</h3>
              <p>Entrar al journal</p>
            </div>
          </a>
        </div>
      </section>

      <section className="appearances-section">
        <div className="appearances-lead">
          <p className="section-index">03 / Archivo público</p>
          <p className="section-kicker">Agenda, ideas y roles que pueden verificarse</p>
          <h2>En contexto</h2>
        </div>
        <div className="appearance-list">
          {appearances.map((item, index) => (
            <a href={item.href} target="_blank" rel="noreferrer" className="appearance-item" key={item.title}>
              <span className="appearance-number">0{index + 1}</span>
              <span className="appearance-type">{item.type}</span>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="newsletter-feature">
        <div className="newsletter-photo">
          <img src="/images/nina-interview.jpg" alt="Nina Quisinski en un encuentro editorial" />
        </div>
        <div className="newsletter-copy">
          <p className="section-index">04 / Perspectivas</p>
          <p className="section-kicker">Newsletter de Nina</p>
          <h2>Ideas desde donde comienzan las conversaciones importantes.</h2>
          <p>
            Perspectivas sobre capital relacional, expansión empresarial, Brasil–Panamá y mujeres
            que abren mercados.
          </p>
          <a className="button button-dark" href="/newsletter">Explorar la newsletter</a>
        </div>
      </section>

      <section className="final-statement">
        <p className="section-kicker">Una idea para llevar</p>
        <blockquote>“La confianza no reemplaza la estrategia. La hace posible.”</blockquote>
        <a className="text-link text-link-light" href="/press">Invitar a Nina <span>↗</span></a>
      </section>
    </PageShell>
  );
}
