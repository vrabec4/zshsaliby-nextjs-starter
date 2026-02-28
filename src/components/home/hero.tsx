import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-pattern relative overflow-hidden px-6 py-20 text-white md:py-28 lg:py-36">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <GraduationCap className="h-4 w-4" />
            Základná škola s materskou školou
          </div>

          <h1 className="mb-6 font-serif text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {siteConfig.tagline}. Poskytujeme kvalitné základné vzdelanie
            v priateľskom prostredí pre deti z Dolných Salíb a okolia.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">
                Kontaktujte nás
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/school" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20">
                O našej škole
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
