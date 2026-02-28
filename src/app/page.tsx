import { SiteShell } from "@/components/site-shell";
import { HeroSection } from "@/components/home/hero";
import { IntroSection } from "@/components/home/intro";
import { NewsSection } from "@/components/home/news";
import { TeachersSection } from "@/components/home/teachers";
import { SubjectsSection } from "@/components/home/subjects";
import { ActivitiesSection } from "@/components/home/activities";
import { CtaSection } from "@/components/home/cta";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <IntroSection />
        <NewsSection />
        <TeachersSection />
        <SubjectsSection />
        <ActivitiesSection />
        <CtaSection />
      </main>
    </SiteShell>
  );
}
