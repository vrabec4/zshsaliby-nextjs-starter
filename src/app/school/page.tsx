import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "O skole",
  description: sectionContent.school.lead,
};

export default function SchoolPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.school} />
    </SiteShell>
  );
}
