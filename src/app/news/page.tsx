import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Novinky",
  description: sectionContent.news.lead,
};

export default function NewsPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.news} />
    </SiteShell>
  );
}
