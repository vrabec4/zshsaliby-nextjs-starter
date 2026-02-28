import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <section className="mx-auto max-w-lg text-center">
          <div className="mb-4 font-serif text-7xl font-bold text-ocean">
            404
          </div>
          <h1 className="mb-3 font-serif text-3xl font-bold">
            Stránka nebola nájdená
          </h1>
          <p className="mb-8 text-muted">
            Požadovaná stránka neexistuje. Skontrolujte adresu alebo sa vráťte
            na hlavnú stránku.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Späť na hlavnú stránku
            </Link>
          </Button>
        </section>
      </main>
    </SiteShell>
  );
}
