import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

import { contactDetails } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-ocean py-16 text-white md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* CTA text */}
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Máte otázky? Ozvite sa nám
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/80">
              Radi vám poskytneme informácie o zápise, vyučovaní alebo
              mimoškolských aktivitách. Kontaktujte nás telefonicky, emailom
              alebo cez kontaktný formulár.
            </p>
            <Button asChild>
              <Link href="/contact">
                Kontaktný formulár
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact info cards */}
          <div className="space-y-4">
            <a
              href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
              className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/70">Telefón</div>
                <div className="font-semibold">{contactDetails.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/70">Email</div>
                <div className="font-semibold">{contactDetails.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-ink">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/70">Adresa</div>
                <div className="font-semibold">
                  {contactDetails.street}, {contactDetails.city}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
