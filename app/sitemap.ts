import type { MetadataRoute } from "next";

const SITE = "https://www.insidestlc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/consulting", priority: 0.9, changeFrequency: "monthly" },
    { path: "/automation-capability", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ai-for-qa", priority: 0.9, changeFrequency: "monthly" },
    { path: "/academy", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clients", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
