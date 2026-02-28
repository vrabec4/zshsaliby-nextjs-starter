import type { MetadataRoute } from "next";

import { primaryNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const navUrls = primaryNav.map((item) => ({
    url: `${siteConfig.siteUrl}${item.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${siteConfig.siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...navUrls,
  ];
}
