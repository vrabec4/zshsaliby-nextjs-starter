import Link from "next/link";

import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
        <section className="rounded-3xl border border-[var(--color-border)] bg-white p-8 text-center md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ocean)]">
            404
          </p>
          <h1 className="mb-4 font-serif text-4xl">Stranka nebola najdena</h1>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            Pozadovana adresa na tomto redizajnovom prototype neexistuje.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold"
          >
            Spat na hlavnu stranku
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
