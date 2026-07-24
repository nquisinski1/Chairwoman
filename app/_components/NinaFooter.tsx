import type { Language } from "../_content/landing";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type NinaFooterProps = {
  language: Language;
  evidence: string;
  rights: string;
  hideLegal?: boolean;
};

const homePaths: Record<Language, string> = { es: "/", pt: "/pt/", en: "/en/" };
const chairwomanPaths: Record<Language, string> = {
  es: "/chairwoman/",
  pt: "/pt/chairwoman/",
  en: "/en/chairwoman/",
};

const labels = {
  es: {
    explore: "Explorar",
    content: "Contenido",
    institutional: "Institucional",
    channels: "Canales",
    home: "Inicio",
    chairwoman: "Chairwoman",
    stepup: "StepUp & Company",
    ideas: "Ideas",
    press: "Prensa",
    newsletter: "Newsletter",
    chamber: "CCI Brasil–Panamá",
    profile: "Perfil institucional",
  },
  pt: {
    explore: "Explorar",
    content: "Conteúdo",
    institutional: "Institucional",
    channels: "Canais",
    home: "Início",
    chairwoman: "Chairwoman",
    stepup: "StepUp & Company",
    ideas: "Ideias",
    press: "Imprensa",
    newsletter: "Newsletter",
    chamber: "CCI Brasil–Panamá",
    profile: "Perfil institucional",
  },
  en: {
    explore: "Explore",
    content: "Content",
    institutional: "Institutional",
    channels: "Channels",
    home: "Home",
    chairwoman: "Chairwoman",
    stepup: "StepUp & Company",
    ideas: "Ideas",
    press: "Press",
    newsletter: "Newsletter",
    chamber: "CCI Brazil–Panama",
    profile: "Institutional profile",
  },
} as const;

export function NinaFooter({
  language,
  evidence,
  rights,
  hideLegal = false,
}: NinaFooterProps) {
  const copy = labels[language];
  const columns: Array<{ title: string; links: FooterLink[] }> = [
    {
      title: copy.explore,
      links: [
        { label: copy.home, href: homePaths[language] },
        { label: copy.chairwoman, href: chairwomanPaths[language] },
        { label: copy.stepup, href: `${homePaths[language]}#stepup` },
        { label: copy.ideas, href: `${homePaths[language]}#ideas` },
      ],
    },
    {
      title: copy.content,
      links: [
        { label: copy.press, href: `${homePaths[language]}#prensa` },
        {
          label: copy.newsletter,
          href: "https://www.linkedin.com/newsletters/7460722642883522560/",
          external: true,
        },
        { label: "YouTube", href: "https://www.youtube.com/@NinaQuisinski", external: true },
      ],
    },
    {
      title: copy.institutional,
      links: [
        { label: copy.chamber, href: "https://ccibrasilpanama.org/", external: true },
        {
          label: copy.profile,
          href: "https://ccibrasilpanama.org/2026-lid-nina/",
          external: true,
        },
        { label: copy.stepup, href: "https://site.stepup10x.com/", external: true },
      ],
    },
    {
      title: copy.channels,
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ninaquisinski/",
          external: true,
        },
        { label: "Instagram", href: "https://www.instagram.com/ninaquisinski/", external: true },
        { label: "YouTube", href: "https://www.youtube.com/@NinaQuisinski", external: true },
      ],
    },
  ];

  return (
    <footer className="nina-footer">
      <div className="nina-footer-grid">
        {columns.map((column) => (
          <nav aria-label={column.title} key={column.title}>
            <strong>{column.title}</strong>
            {column.links.map((link) => (
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                key={`${column.title}-${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>

      {!hideLegal && (
        <div className="nina-footer-legal">
          <span>© 2026 Nina Quisinski</span>
          <span>{evidence}</span>
          <span>{rights}</span>
        </div>
      )}
    </footer>
  );
}
