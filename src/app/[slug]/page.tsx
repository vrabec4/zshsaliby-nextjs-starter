import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { ModulePage } from "@/components/module-page";
import { SiteShell } from "@/components/site-shell";
import { edupageModules, getModuleBySlug } from "@/lib/edupage-pages";
import { getLocalModuleContent } from "@/lib/local-content";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return edupageModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageModule = getModuleBySlug(slug);

  if (!pageModule) {
    return {};
  }

  return {
    title: pageModule.title,
    description: pageModule.description,
  };
}

export default async function EduPageModuleRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const pageModule = getModuleBySlug(slug);

  if (!pageModule) {
    notFound();
  }

  const localContent = getLocalModuleContent(pageModule.slug);

  if (!localContent) {
    notFound();
  }

  return (
    <SiteShell>
      <ModulePage module={pageModule} content={localContent} />
      {pageModule.slug === "contact" && (
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <section className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-2 font-serif text-2xl font-semibold">
              Kontaktný formulár
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Napíšte nám správu a my sa vám čo najskôr ozveme.
            </p>
            <ContactForm />
          </section>
        </div>
      )}
    </SiteShell>
  );
}
