import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getTeachers } from "@/lib/school-data";

const bgColors = [
  "bg-ocean",
  "bg-accent",
  "bg-ocean-dark",
  "bg-emerald-600",
  "bg-rose-500",
  "bg-indigo-600",
];

export function TeachersSection() {
  const teachers = getTeachers();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-ocean uppercase">
          Náš tím
        </p>
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
          Naši učitelia
        </h2>
        <div className="section-divider mx-auto mb-4" />
        <p className="mx-auto max-w-2xl text-muted">
          Skúsený a starostlivý pedagogický kolektív, ktorý vytvára
          pozitívne a podnetné vzdelávacie prostredie.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher, i) => (
          <div
            key={teacher.initials}
            className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${bgColors[i % bgColors.length]}`}
            >
              {teacher.initials}
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold">{teacher.name}</h3>
              <p className="text-sm text-muted">Pedagóg</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/teachers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-ocean-dark"
        >
          Celý pedagogický zbor
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
