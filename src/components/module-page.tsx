import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { EduPageModule } from "@/lib/edupage-pages";
import type { LocalModuleContent } from "@/lib/local-content";

type ModulePageProps = {
  module: EduPageModule;
  content: LocalModuleContent;
};

export function ModulePage({ module, content }: ModulePageProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Navigácia">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ocean"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Späť na hlavnú stránku
        </Link>
      </nav>

      {/* Page header */}
      <header className="mb-8 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-light px-3 py-1 text-xs font-semibold text-ocean uppercase tracking-wider">
          {module.navLabel}
        </div>
        <h1 className="mb-3 font-serif text-3xl leading-tight font-bold md:text-4xl">
          {module.title}
        </h1>
        <p className="max-w-3xl leading-relaxed text-muted">
          {module.description}
        </p>
        {module.requiresLogin && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-sm text-amber-800">
            <AlertCircle className="h-4 w-4" />
            Pôvodný modul mohol vyžadovať prihlásenie. Tu je dostupný lokálny obsahový export.
          </p>
        )}
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 font-serif text-xl font-semibold">
              Obsah sekcie
            </h2>
            <div className="edupage-content space-y-2 text-sm leading-7 text-ink">
              {content.lines.map((line, index) => (
                <p key={`${module.slug}-${index}`}>{line}</p>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-serif text-lg font-semibold">Kľúčové body</h2>
            <ul className="space-y-2">
              {module.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg bg-surface px-3 py-2.5 text-sm text-muted"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-ocean-light p-6">
            <h3 className="mb-2 font-serif text-base font-semibold text-ocean">
              Informácie
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Obsah tejto sekcie je uložený lokálne. Stránka funguje bez
              embedovania alebo presmerovania na pôvodný web.
            </p>
            <p className="mt-2 text-xs text-muted">
              Počet riadkov obsahu: {content.line_count}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
