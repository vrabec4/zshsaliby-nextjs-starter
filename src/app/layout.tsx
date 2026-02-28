import type { Metadata } from "next";
import Script from "next/script";

import "@fontsource-variable/space-grotesk";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import { contactDetails, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ZS Dolne Saliby - Redesign",
    template: "%s | ZS Dolne Saliby",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZS Dolne Saliby - Redesign",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZS Dolne Saliby - Redesign",
    description: siteConfig.description,
  },
  applicationName: siteConfig.name,
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.street,
      addressLocality: "Dolne Saliby",
      postalCode: "92502",
      addressCountry: "SK",
    },
  };

  return (
    <html lang="sk">
      <body className="antialiased">
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
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
