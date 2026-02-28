import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "ZS Dolne Saliby",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f2",
    theme_color: "#0e4d64",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
