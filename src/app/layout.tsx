import type { Metadata } from "next";
import Script from "next/script";

import "@fontsource-variable/space-grotesk";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZS Horne Saliby Starter",
    template: "%s | ZS Horne Saliby",
  },
  description:
    "Modern school website starter with Next.js, Sanity, accessibility checks, and CI quality gates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="sk">
      <body className="antialiased">
        {children}
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
