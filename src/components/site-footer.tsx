import { contactDetails, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl px-6 pb-10 text-sm text-[var(--color-muted)]">
      <div className="grid gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 md:grid-cols-2">
        <div>
          <p className="font-semibold text-[var(--color-ink)]">{siteConfig.name}</p>
          <p>{contactDetails.street}</p>
          <p>{contactDetails.city}</p>
          <p>{contactDetails.phone}</p>
          <p>{contactDetails.email}</p>
        </div>

        <div className="md:text-right">
          <p className="font-semibold text-[var(--color-ink)]">Zdroj obsahu</p>
          <a
            className="underline decoration-dotted underline-offset-4"
            href={siteConfig.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.sourceUrl}
          </a>
          <p className="mt-2 text-xs">
            Produkcny redesign baseline: SEO, bezpecnost, dostupnost a modularna IA.
          </p>
        </div>
      </div>
    </footer>
  );
}
