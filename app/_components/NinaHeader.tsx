import type { Language } from "../_content/landing";
import { NinaLogo } from "./NinaLogo";

export type HeaderNavigationItem = {
  label: string;
  href: string;
  external?: boolean;
  key?: "chairwoman" | "stepup" | "insights" | "lifestyle" | "press";
};

type NinaHeaderProps = {
  language: Language;
  languagePaths: Record<Language, string>;
  brandHref: string;
  menuLabel: string;
  navigation: HeaderNavigationItem[];
};

const languages = ["es", "pt", "en"] as const;
const homePaths: Record<Language, string> = { es: "/", pt: "/pt/", en: "/en/" };
const chairwomanPaths: Record<Language, string> = {
  es: "/chairwoman/",
  pt: "/pt/chairwoman/",
  en: "/en/chairwoman/",
};
const pressLabels: Record<Language, string> = {
  es: "Prensa",
  pt: "Imprensa",
  en: "Press",
};

export function getPrimaryNavigation(language: Language): HeaderNavigationItem[] {
  const home = homePaths[language];

  return [
    { key: "chairwoman", label: "Chairwoman", href: chairwomanPaths[language] },
    { key: "stepup", label: "StepUp & Co", href: `${home}#stepup` },
    { key: "insights", label: "Insights & Newsletter", href: `${home}#ideas` },
    { key: "lifestyle", label: "Lifestyle", href: `${home}#lifestyle` },
    { key: "press", label: pressLabels[language], href: `${home}#prensa` },
  ];
}

export function NinaHeader({
  language,
  languagePaths,
  brandHref,
  menuLabel,
  navigation,
}: NinaHeaderProps) {
  const renderNavigationLinks = () => navigation.map((item) => (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      key={`${item.href}-${item.label}`}
    >
      {item.label}
    </a>
  ));

  const languageLinks = (compact = false) => (
    <nav
      className={`language-switcher${compact ? " language-switcher-compact" : ""}`}
      aria-label="Language"
    >
      {languages.map((item) => (
        <a
          href={languagePaths[item]}
          hrefLang={item}
          aria-current={language === item ? "page" : undefined}
          key={item}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="nq-header">
      <NinaLogo className="nq-brand" href={brandHref} variant="wordmark" />

      <nav className="nq-nav" aria-label={menuLabel}>
        {renderNavigationLinks()}
      </nav>

      {languageLinks()}

      <details className="nq-mobile-menu">
        <summary>{menuLabel}<span aria-hidden="true">＋</span></summary>
        <div>
          <nav aria-label={menuLabel}>{renderNavigationLinks()}</nav>
          {languageLinks(true)}
        </div>
      </details>
    </header>
  );
}
