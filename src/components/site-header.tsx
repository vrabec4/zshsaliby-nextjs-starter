import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

import { MobileNav } from "@/components/mobile-nav";
import { primaryNav } from "@/lib/navigation";
import { contactDetails, siteConfig } from "@/lib/site";

function TopBar() {
  return (
    <div className="top-bar hidden border-b border-white/10 md:block">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            {contactDetails.email}
          </a>
          <a
            href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            {contactDetails.phone}
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-white/80">
          <MapPin className="h-3.5 w-3.5" />
          <span>{contactDetails.street}, {contactDetails.city}</span>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Hlavná navigácia" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => (
          <li key={item.href} className={item.children ? "nav-dropdown" : ""}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-ocean/5 hover:text-ocean"
            >
              {item.label}
              {item.children && <ChevronDown className="h-3.5 w-3.5" />}
            </Link>
            {item.children && (
              <div className="nav-dropdown-menu">
                <ul>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface hover:text-ocean"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30">
      <TopBar />
      <div className="border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean text-sm font-bold text-white">
              ZŠ
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg leading-tight font-semibold text-ink">
                {siteConfig.name}
              </div>
              <div className="text-xs text-muted">Dolné Saliby</div>
            </div>
          </Link>

          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
