import { SiteShell } from "@/components/site-shell";
import { contactDetails, siteConfig } from "@/lib/site";

const sectionLinks = [
  {
    title: "O skole",
    text: "Zakladne institucionalne informacie zo stranky O skole.",
    href: "/school",
  },
  {
    title: "Novinky",
    text: "Obsahova vrstva pre oznamy, smernice a skolske informacie.",
    href: "/news",
  },
  {
    title: "Kalendar",
    text: "Terminova vrstva skoly pre podujatia a organizaciu roka.",
    href: "/calendar",
  },
  {
    title: "Rozvrh a suplovanie",
    text: "Kriticky modul pre kazdodennu prevadzku ziakov a ucitelov.",
    href: "/timetable",
  },
  {
    title: "Ucitelia a triedy",
    text: "Datovy model pre ucitelov, triedy, predmety a ucebne.",
    href: "/teachers",
  },
  {
    title: "Kruzky",
    text: "Mimo-vyucovacie aktivity a ich strukturovane publikovanie.",
    href: "/kruzky",
  },
  {
    title: "Kontakt",
    text: "Overene kontaktne udaje a produkcny kontaktovy formular.",
    href: "/contact",
  },
] as const;

export default function Home() {
  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 md:gap-12 md:pb-24">
        <section className="space-y-5 rounded-3xl border border-[var(--color-border)] bg-white p-6 md:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ocean)]">
            Produkcny redesign baseline
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            Tento projekt je pripraveny ako produkcny zaklad pre kompletny redesign
            webu s obsahom mapovanym vylucne zo zdroja EduPage.
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            Zdroj: <a className="underline decoration-dotted" href={siteConfig.sourceUrl}>{siteConfig.sourceUrl}</a>
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sectionLinks.map((item) => (
            <article
              key={item.href}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
            >
              <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
              <p className="mb-4 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
              <a className="text-sm font-semibold text-[var(--color-ocean)]" href={item.href}>
                Otvorit sekciu
              </a>
            </article>
          ))}
        </section>

        <section className="grid gap-4 rounded-3xl border border-[var(--color-border)] bg-white p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Kontaktne udaje</h2>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li>{contactDetails.schoolName}</li>
              <li>{contactDetails.street}</li>
              <li>{contactDetails.city}</li>
              <li>{contactDetails.email}</li>
              <li>{contactDetails.phone}</li>
              <li>{contactDetails.mobile}</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold">Pre produkciu</h2>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li>Pripraveny SEO zaklad: metadata, sitemap, robots, manifest.</li>
              <li>Pripraveny bezpecnostny zaklad: security headers v Next.js.</li>
              <li>Pripraveny kontaktovy endpoint s validaciou vstupov.</li>
              <li>Obsahove sekcie su modulove a pripravene na napojenie CMS.</li>
            </ul>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
