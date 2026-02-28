import { CircleCheckBig } from "lucide-react";

import type { SectionContent } from "@/lib/site-content";

export function SectionPage({ content }: { content: SectionContent }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-10 md:gap-10">
      <section className="space-y-4">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {content.title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">
          {content.lead}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {content.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
          >
            <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
            <p className="text-sm leading-7 text-[var(--color-muted)]">{card.text}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-white p-6 md:grid-cols-2 md:p-8">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Rychly prehlad</h2>
          <ul className="space-y-3 text-sm">
            {content.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CircleCheckBig className="mt-0.5 h-4 w-4 text-emerald-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Produkcia a migracia</h2>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            {content.notices.map((item) => (
              <li key={item} className="rounded-xl bg-[var(--color-surface)] p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-semibold">Zdrojove stranky</h2>
        <ul className="space-y-2 text-sm text-[var(--color-muted)]">
          {content.sources.map((source) => (
            <li key={source.url}>
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-[var(--color-ocean)]"
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
