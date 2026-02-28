import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

import { getNewsItems } from "@/lib/school-data";

export function NewsSection() {
  const items = getNewsItems();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-ocean uppercase">
            Aktuality
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Novinky zo školy
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-hover group rounded-2xl border border-border bg-page p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-light text-ocean">
                <Newspaper className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-ocean transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
          >
            Všetky novinky
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
