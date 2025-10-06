import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { heading, sans } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Everyday Resilience Counselling",
  description:
    "Professional guidance and counselling services supporting healing and resilience.",
  metadataBase: new URL("https://everydayresilience.example"),
  openGraph: {
    title: "Everyday Resilience Counselling",
    description:
      "Holistic counselling services for individuals, families, and communities.",
    url: "https://everydayresilience.example",
    siteName: "Everyday Resilience Counselling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyday Resilience Counselling",
    description:
      "Compassionate counselling and psychoeducation resources in Kenya.",
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
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
