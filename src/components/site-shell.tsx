import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  includeFooter = true,
}: {
  children: React.ReactNode;
  includeFooter?: boolean;
}) {
  return (
    <div className="relative overflow-x-clip bg-[var(--color-page)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-[18rem] -z-10 h-72 w-72 rounded-full bg-[var(--color-ocean)]/30 blur-3xl" />
      <SiteHeader />
      {children}
      {includeFooter ? <SiteFooter /> : null}
    </div>
  );
}
