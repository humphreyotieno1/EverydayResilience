import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Everyday Resilience Counselling collects, uses, and protects personal information shared through counselling and this website.",
};

export default function PrivacyPolicyPage() {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-semibold text-foreground">Privacy Policy</h1>
          <p className="text-base text-muted-foreground">
            Updated {new Date().getFullYear()} • Everyday Resilience Counselling (“we”, “our”, “us”)
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">1. Information We Collect</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We collect personal information provided voluntarily when you book counselling sessions, subscribe to updates, or submit forms on this website. This may include your name, contact details, demographic information relevant to counselling, and any messages shared with our team.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">2. How We Use Your Information</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Information is used to provide counselling services, respond to inquiries, manage scheduling, deliver resources, and maintain supportive relationships with our partners and donors. With your consent, we may send emails about upcoming programmes or opportunities to get involved.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">3. Confidentiality & Safeguarding</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Counselling sessions are confidential and handled in accordance with Kenyan counselling ethics and applicable privacy laws. We may disclose information if required by law or to prevent serious harm, and we will inform you whenever possible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">4. Data Storage & Security</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Client files are stored securely with limited access by authorised counsellors and administrators. We implement administrative, technical, and physical safeguards to protect against unauthorised access, alteration, or disclosure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">5. Your Rights</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You may request access to your personal information, ask for corrections, or withdraw consent for non-essential communications at any time. To do so, contact us using the details on our Contact page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">6. Cookies & Website Analytics</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Our website may use cookies or analytics tools to understand engagement and improve user experience. You can adjust your browser settings to decline cookies if preferred.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-foreground">7. Contact Us</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          For privacy-related questions or requests, please email privacy@everydayresilience.org or call +254 711 000 000.
        </p>
      </section>
    </div>
  );
}

