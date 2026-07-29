import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninaquisinski.com"),
  title: {
    default: "Nina Quisinski",
    template: "%s | Nina Quisinski",
  },
  description:
    "Liderazgo institucional, relaciones estratégicas y expansión empresarial entre Brasil, Panamá y América Latina.",
  robots: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true"
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
  openGraph: {
    type: "website",
    locale: "es_PA",
    siteName: "Nina Quisinski",
    title: "Nina Quisinski | Capital, relaciones y expansión",
    description:
      "Liderazgo institucional y visión empresarial entre Brasil, Panamá y América Latina.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PA" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,ital,wght@6..96,400;6..96,500;6..96,600;6..96,700;6..96,400&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600&family=Noto+Serif+Display:ital,wght@0,400;0,500;0,600;1,400&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: "(()=>{const p=location.pathname;document.documentElement.lang=p.startsWith('/pt')?'pt-BR':p.startsWith('/en')?'en-US':'es-PA'})()" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
