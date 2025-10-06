import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Understand the terms governing the use of Everyday Resilience Counselling’s website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto space-y-10 px-4 py-16">
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms of Service</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-semibold text-foreground">Terms of Service</h1>
          <p className="text-base text-muted-foreground">
            Updated {new Date().getFullYear()} • Everyday Resilience Counselling (“we”, “our”, “us”)
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">1. Scope of Services</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We provide counselling, training, and wellbeing programmes to individuals, families, and organisations. Services may be delivered in-person or online. Sessions are subject to availability and suitability determined by our counselling team.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">2. Booking & Cancellation</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Appointments require at least 24 hours’ notice for cancellation or rescheduling. Missed sessions without notice may be charged. Repeated late cancellations may result in a review of service continuity.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">3. Fees & Payments</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Session fees are communicated during intake. Payment can be made via bank transfer, M-Pesa, or approved donor sponsorship. Outstanding balances may delay future bookings until cleared.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">4. Client Responsibilities</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Clients agree to provide accurate information, participate respectfully in sessions, and follow agreed safety plans. Parents or guardians must provide consent for minors and are encouraged to participate in family sessions as recommended.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">5. Limitations of Service</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Everyday Resilience Counselling is not an emergency service. In crisis situations please contact your local emergency numbers or trusted medical providers immediately. Counsellors may refer clients to external specialists when needs extend beyond our scope.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">6. Intellectual Property</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Workshop materials, guides, and resources shared by our team remain our intellectual property and may not be redistributed without written consent. Partners may receive licensing rights as specified in agreements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">7. Changes to These Terms</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We may update these terms periodically. Continued use of our website or services after updates constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">8. Contact</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Questions about these terms can be directed to admin@everydayresilience.org or +254 711 000 000.
        </p>
      </section>
    </div>
  );
}

