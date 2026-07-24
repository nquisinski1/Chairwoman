import type { ReactNode } from "react";
import { NinaLogo } from "./NinaLogo";
import { getPrimaryNavigation, NinaHeader } from "./NinaHeader";

const languagePaths = { es: "/", pt: "/pt/", en: "/en/" } as const;

export function SiteHeader() {
  const navigation = getPrimaryNavigation("es");

  return (
    <NinaHeader
      language="es"
      languagePaths={languagePaths}
      brandHref="/"
      menuLabel="Menú"
      navigation={navigation}
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <NinaLogo className="footer-logo nina-logo-large" variant="wordmark" />
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
        <a href="https://stepupandco.com/" target="_blank" rel="noreferrer">
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
      <SiteHeader />
      <main data-page={active}>{children}</main>
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
