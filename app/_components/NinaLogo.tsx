type NinaLogoProps = {
  href?: string;
  className?: string;
  variant?: "wordmark" | "signature";
};

export function NinaLogo({
  href = "/",
  className = "",
  variant = "wordmark",
}: NinaLogoProps) {
  const classes = ["nina-logo", `nina-logo--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} aria-label="Nina Quisinski">
      {variant === "wordmark" && (
        <span className="nina-logo__wordmark" aria-hidden="true">
          <span>NINA</span>
          <strong>QUISINSKI</strong>
        </span>
      )}
      {variant === "signature" && (
        <span className="nina-logo__signature" aria-hidden="true">
          Nina Quisinski
        </span>
      )}
    </a>
  );
}
