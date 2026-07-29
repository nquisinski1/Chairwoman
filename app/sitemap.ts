import type { MetadataRoute } from "next";

const site = "https://chairwoman.ninaquisinski.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pt/", "/en/", "/stepup-company/", "/pt/stepup-company/", "/en/stepup-company/"].map((path) => ({
    url: `${site}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.includes("stepup-company") ? 0.7 : 0.8,
    alternates: {
      languages: {
        "es-PA": `${site}${path.includes("stepup-company") ? "/stepup-company/" : "/"}`,
        "pt-BR": `${site}${path.includes("stepup-company") ? "/pt/stepup-company/" : "/pt/"}`,
        "en-US": `${site}${path.includes("stepup-company") ? "/en/stepup-company/" : "/en/"}`,
      },
    },
  }));
}
