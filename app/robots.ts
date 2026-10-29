import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const u = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yashhirudkar.dev";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${u}/sitemap.xml` };
}
