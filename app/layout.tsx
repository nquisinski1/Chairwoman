import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ninaquisinski.com"),
  title: {
    default: "Nina Quisinski",
    template: "%s | Nina Quisinski",
  },
  description:
    "Capital relacional, liderazgo institucional y expansión entre Brasil, Panamá y América Latina.",
  icons: {
    icon: "/images/nina-portrait.jpg",
    apple: "/images/nina-portrait.jpg",
  },
  robots: {
    index: false,
    follow: false,
  },
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
