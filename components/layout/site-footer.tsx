import Link from "next/link";

import { contactDetails, siteNavigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-muted/40 bg-muted/40">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Everyday Resilience Counselling
          </h3>
          <p className="max-w-lg text-sm text-muted-foreground">
            Compassionate guidance and evidence-based counselling for individuals, families, and organisations seeking healing and growth.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {siteNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Connect
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: {contactDetails.email}</li>
            <li>Phone (KE): {contactDetails.phoneKe}</li>
            <li>Phone (US): {contactDetails.phoneUs}</li>
            <li>{contactDetails.location}</li>
            <li>{contactDetails.officeHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-muted/40 bg-background/80 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Everyday Resilience Counselling. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-primary" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-primary" href="/terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

