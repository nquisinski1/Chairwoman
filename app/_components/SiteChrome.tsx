import type { ReactNode } from "react";

const navigation = [
  { label: "Home", href: "/", key: "home" },
  { label: "My Story", href: "/my-story", key: "story" },
  { label: "Chairwoman", href: "/chairwoman", key: "chairwoman" },
  { label: "A Sócia", href: "/la-socia", key: "partner" },
  { label: "Lifestyle", href: "/lifestyle", key: "lifestyle" },
  { label: "My Newsletter", href: "/newsletter", key: "newsletter" },
  { label: "My Book", href: "/my-book", key: "book" },
  { label: "Press", href: "/press", key: "press" },
] as const;

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Nina Quisinski — Inicio">
        <span className="brand-script">Nina</span>
        <span className="brand-name">Quisinski</span>
        <span className="brand-subline">Leadership · Business · Lifestyle</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a
            className={active === item.key ? "active" : undefined}
            href={item.href}
            key={item.key}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <details className="mobile-nav">
        <summary aria-label="Abrir menú"><span>Menú</span><i aria-hidden="true">＋</i></summary>
        <nav aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a
              className={active === item.key ? "active" : undefined}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-statement">
        <span className="section-kicker">Nina Quisinski</span>
        <p>Capital relacional · Diplomacia empresarial · Expansión</p>
      </div>
      <div className="footer-links" aria-label="Canales oficiales">
        <a href="https://www.linkedin.com/in/ninaquisinski/?locale=es" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/ninaquisinski/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://ccibrasilpanama.org/" target="_blank" rel="noreferrer">
          CCI Brasil–Panamá
        </a>
        <a href="https://site.stepup10x.com/" target="_blank" rel="noreferrer">
          StepUp & Company
        </a>
      </div>
      <div className="footer-meta">
        <span>Panamá · Brasil · América Latina</span>
        <span>© 2026 Nina Quisinski</span>
      </div>
    </footer>
  );
}

export function PageShell({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function EditorialHero({
  edition,
  kicker,
  title,
  intro,
  image,
  imageAlt,
  imagePosition,
}: {
  edition: string;
  kicker: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}) {
  return (
    <section className="editorial-hero">
      <div className="editorial-copy">
        <div className="edition-line">
          <span>{edition}</span>
          <span>Archivo oficial</span>
        </div>
        <p className="section-kicker">{kicker}</p>
        <span className="editorial-script" aria-hidden="true">Nina</span>
        <h1>{title}</h1>
        <p className="editorial-intro">{intro}</p>
      </div>
      <figure className="editorial-visual">
        <img
          src={image}
          alt={imageAlt}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </figure>
    </section>
  );
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function StatusTag({ children }: { children: ReactNode }) {
  return <span className="status-tag">{children}</span>;
}
