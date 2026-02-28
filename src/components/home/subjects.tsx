import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

import { getSubjects } from "@/lib/school-data";

export function SubjectsSection() {
  const subjects = getSubjects();

  return (
    <section className="bg-ocean-light py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-ocean uppercase">
            Vzdelávací program
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Vyučované predmety
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="mx-auto max-w-2xl text-muted">
            Ponúkame pestrý vzdelávací program prispôsobený potrebám
            našich žiakov.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="card-hover flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
            >
              <BookOpen className="h-5 w-5 shrink-0 text-ocean" />
              <div>
                <span className="text-sm font-medium">{subject.name}</span>
                {subject.abbreviation && (
                  <span className="ml-2 text-xs text-muted">
                    ({subject.abbreviation})
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-ocean-dark"
          >
            Všetky predmety
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/timetable"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-ocean-dark"
          >
            Rozvrh hodín
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
