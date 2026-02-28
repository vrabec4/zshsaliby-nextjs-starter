import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kruzky",
  description: sectionContent.kruzky.lead,
};

export default function KruzkyPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.kruzky} />
    </SiteShell>
  );
}
