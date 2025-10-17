import type { Metadata } from "next";
import Script from "next/script";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloatingActions } from "@/components/shared/floating-actions";
import { Toaster } from "@/components/ui/sonner";
import { heading, sans } from "@/lib/fonts";
import { GA_MEASUREMENT_ID, GA_TRACKING_ENABLED } from "@/lib/ga";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday Resilience Counselling Kenya | Trauma-Informed Therapy",
  description:
    "Trauma-informed counselling and wellness services in Kenya for individuals, couples, families, and organizations. Book compassionate, evidence-based support today.",
  metadataBase: new URL("https://www.everydayresiliencecounsellingkenya.org"),
  openGraph: {
    title: "Everyday Resilience Counselling Kenya",
    description:
      "Holistic, faith-sensitive counselling services for individuals, families, and communities across Kenya.",
    url: "https://www.everydayresiliencecounsellingkenya.org",
    siteName: "Everyday Resilience Counselling Kenya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyday Resilience Counselling Kenya",
    description:
      "Compassionate counselling, workshops, and psychoeducation resources for Kenyan communities.",
  },
  alternates: {
    canonical: "https://www.everydayresiliencecounsellingkenya.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${heading.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {GA_TRACKING_ENABLED ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                });
              `}
            </Script>
          </>
        ) : null}
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <FloatingActions />
        <Toaster />
      </body>
    </html>
  );
}
