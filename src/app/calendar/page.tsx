import type { Metadata } from "next";

import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kalendar",
  description: sectionContent.calendar.lead,
};

export default function CalendarPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.calendar} />
    </SiteShell>
  );
}
