type NinaLogoProps = {
  href?: string;
  className?: string;
};

export function NinaLogo({ href = "/", className = "" }: NinaLogoProps) {
  const classes = ["nina-logo", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} aria-label="Nina Quisinski — Home">
      <span className="nina-logo-monogram" aria-hidden="true">
        <span className="nina-logo-letter nina-logo-letter-n">N</span>
        <span className="nina-logo-letter nina-logo-letter-q">Q</span>
      </span>
      <span className="nina-logo-lockup" aria-hidden="true">
        <span className="nina-logo-script">Nina</span>
        <strong>QUISINSKI</strong>
      </span>
    </a>
  );
}
