import Link from "next/link";
import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

import { footerNav } from "@/lib/navigation";
import { contactDetails, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-ink text-white/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* School info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ocean text-sm font-bold text-white">
                ZŠ
              </div>
              <span className="font-serif text-lg font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>Riaditeľka: {contactDetails.principal}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">
              Rýchle odkazy
            </h3>
            <ul className="space-y-2">
              {footerNav.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education + Activities */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">
              Vzdelávanie
            </h3>
            <ul className="space-y-2">
              {footerNav.education.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 font-serif text-base font-semibold text-white">
              Aktivity
            </h3>
            <ul className="space-y-2">
              {footerNav.activities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold text-white">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {contactDetails.street}
                  <br />
                  {contactDetails.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.mobile.replaceAll(" ", "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  {contactDetails.mobile}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-white/50 md:flex-row">
          <p>&copy; {year} {siteConfig.name}. Všetky práva vyhradené.</p>
          <p>{contactDetails.schoolName}, {contactDetails.street}</p>
        </div>
      </div>
    </footer>
  );
}
