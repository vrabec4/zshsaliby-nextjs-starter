import { ArrowRight, CircleCheckBig, Globe, ShieldCheck, Sparkles } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { getLatestAnnouncements } from "@/lib/content";

const navItems = [
  { label: "School", href: "/school" },
  { label: "Students", href: "/students" },
  { label: "Parents", href: "/parents" },
  { label: "Cafeteria", href: "/cafeteria" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "#contact" },
];

const pillars = [
  {
    title: "Fast content publishing",
    detail: "Sanity CMS model for announcements, events, menus, and official documents.",
    icon: Sparkles,
  },
  {
    title: "Accessibility by default",
    detail: "Semantic templates with lint, Playwright, and axe checks in the pipeline.",
    icon: ShieldCheck,
  },
  {
    title: "Performance and SEO",
    detail: "Hybrid rendering, optimized media, and Lighthouse checks for releases.",
    icon: Globe,
  },
];

export default async function Home() {
  const announcements = await getLatestAnnouncements();

  return (
    <div className="relative overflow-x-clip bg-[var(--color-page)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-[18rem] -z-10 h-72 w-72 rounded-full bg-[var(--color-ocean)]/35 blur-3xl" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-sm">
          ZS Horne Saliby
        </span>
        <nav aria-label="Primary">
          <ul className="hidden gap-5 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a className="hover:text-[var(--color-ocean)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-4 md:gap-20 md:pb-28">
        <section className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ocean)]">
              Next.js Starter
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Modern school web foundation built for clarity, speed, and trust.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
              This starter wires your planned architecture: Next.js App Router,
              TypeScript, Tailwind, Sanity integration, accessibility testing,
              and production quality gates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">
                  Start implementation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#architecture">Review architecture</a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white/90 p-5 shadow-xl shadow-[var(--color-shadow)] backdrop-blur">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Starter includes
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Sanity client and content loader",
                "Sentry + Plausible integration points",
                "React Hook Form + Zod validation",
                "Playwright + axe accessibility testing",
                "Lighthouse CI config and CI workflow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="architecture" className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
            >
              <pillar.icon className="mb-3 h-6 w-6 text-[var(--color-ocean)]" />
              <h2 className="mb-2 text-xl font-semibold">{pillar.title}</h2>
              <p className="text-sm leading-7 text-[var(--color-muted)]">{pillar.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-white p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="mb-3 text-2xl font-semibold">CMS preview slot</h2>
            <p className="mb-4 text-sm leading-7 text-[var(--color-muted)]">
              When Sanity credentials are provided, latest announcements can
              render here from structured content.
            </p>
            {announcements.length > 0 ? (
              <ul className="space-y-2 text-sm">
                {announcements.map((item) => (
                  <li key={item._id} className="rounded-xl bg-[var(--color-surface)] p-3">
                    <p className="font-semibold">{item.title}</p>
                    {item.excerpt ? (
                      <p className="text-[var(--color-muted)]">{item.excerpt}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-xl bg-[var(--color-surface)] p-3 text-sm">
                No CMS data yet. Configure `.env.local` with Sanity project values.
              </p>
            )}
          </div>

          <div id="contact">
            <h2 className="mb-3 text-2xl font-semibold">Contact form starter</h2>
            <p className="mb-4 text-sm leading-7 text-[var(--color-muted)]">
              Client-side validation is ready. Connect submit handling to
              `src/app/api/contact/route.ts` when you add your backend flow.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
