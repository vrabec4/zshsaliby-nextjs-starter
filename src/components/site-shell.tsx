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
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      {includeFooter ? <SiteFooter /> : null}
    </div>
  );
}
