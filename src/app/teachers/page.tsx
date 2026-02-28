import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Ucitelia",
  description: sectionContent.teachers.lead,
};

export default function TeachersPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.teachers} />
    </SiteShell>
  );
}
