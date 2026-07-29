import type { MetadataRoute } from "next";

const site = "https://chairwoman.ninaquisinski.com";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

  return {
    rules: indexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
