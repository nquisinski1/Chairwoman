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
  variant: "home" | "chairwoman";
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
  variant,
}: NinaHeaderProps) {
  const isHome = variant === "home";
  const headerClass = isHome ? "nq-header" : "cw-header";
  const brandClass = isHome ? "nq-brand" : "cw-wordmark";
  const desktopClass = isHome ? "nq-nav" : "cw-desktop-nav";
  const languagesClass = isHome ? "language-switcher" : "cw-languages";
  const mobileClass = isHome ? "nq-mobile-menu" : "cw-mobile-menu";

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
      className={`${languagesClass}${compact && isHome ? " language-switcher-compact" : ""}`}
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
    <header className={headerClass}>
      <NinaLogo className={brandClass} href={brandHref} variant="wordmark" />

      <nav className={desktopClass} aria-label={menuLabel}>
        {renderNavigationLinks()}
      </nav>

      {languageLinks()}

      <details className={mobileClass}>
        <summary>{menuLabel}<span aria-hidden="true">＋</span></summary>
        <div>
          <nav aria-label={menuLabel}>{renderNavigationLinks()}</nav>
          {languageLinks(true)}
        </div>
      </details>
    </header>
  );
}
