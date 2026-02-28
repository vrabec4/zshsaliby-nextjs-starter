import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Rozvrh a suplovanie",
  description: sectionContent.timetable.lead,
};

export default function TimetablePage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.timetable} />
    </SiteShell>
  );
}
