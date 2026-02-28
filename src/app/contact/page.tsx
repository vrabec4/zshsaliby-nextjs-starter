import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionPage } from "@/components/section-page";
import { SiteShell } from "@/components/site-shell";
import { sectionContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: sectionContent.contact.lead,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <SectionPage content={sectionContent.contact} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-14">
        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-8">
          <h2 className="mb-3 text-2xl font-semibold">Kontaktovy formular</h2>
          <p className="mb-4 text-sm leading-7 text-[var(--color-muted)]">
            Produkcny endpoint je pripraveny na napojenie emailovej alebo helpdesk integracie.
          </p>
          <ContactForm />
        </section>
      </main>
    </SiteShell>
  );
}
