import type { MetadataRoute } from "next";

const site = "https://chairwoman.ninaquisinski.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pt/", "/en/"].map((path) => ({
    url: `${site}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
    alternates: {
      languages: {
        "es-PA": `${site}/`,
        "pt-BR": `${site}/pt/`,
        "en-US": `${site}/en/`,
      },
    },
  }));
}
