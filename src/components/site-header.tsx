import { primaryNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold"
        >
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-5 text-sm font-medium">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-full px-2 py-1 transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ocean)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[var(--color-border)] px-3 py-2 text-sm font-semibold">
            Menu
          </summary>
          <nav className="absolute left-0 right-0 top-[68px] border-b border-[var(--color-border)] bg-white p-4 shadow-lg">
            <ul className="grid gap-2 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <a
                    className="block rounded-xl border border-[var(--color-border)] px-3 py-2"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
