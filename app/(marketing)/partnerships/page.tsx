import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { contactDetails } from "@/content/site";

const partnershipOptions = [
  {
    title: "Sponsor Counselling Sessions",
    description:
      "Help subsidise counselling for children, teens, and families who would otherwise go without support.",
    steps: [
      "Choose a monthly or one-off contribution",
      "Receive quarterly impact updates",
      "Option to underwrite specific schools or community centres",
    ],
  },
  {
    title: "Corporate & Faith Partnerships",
    description:
      "Co-create wellbeing programmes for your teams, congregations, or beneficiaries with ongoing counsellor support.",
    steps: [
      "Initial discovery and needs assessment",
      "Customised programme design (workshops, debriefs, policies)",
      "Regular review meetings and impact reports",
    ],
  },
  {
    title: "Resource Collaborations",
    description:
      "Develop trauma-informed toolkits, caregiver guides, and training content tailored to your context.",
    steps: [
      "Define objectives and audience",
      "Co-author or review content drafts",
      "Launch with facilitated training or webinars",
    ],
  },
];

export const metadata: Metadata = {
  title: "Partnerships & Giving",
  description:
    "Partner with Everyday Resilience Counselling to expand access to mental health support across Kenya and beyond.",
};

export default function PartnershipsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-16">
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Partnerships</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Partner with us</p>
          <h1 className="font-heading text-4xl font-semibold text-foreground">
            Together we can widen access to healing and resilience
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Your support fuels counselling for underserved children, equips caregivers with trauma-informed tools, and keeps frontline teams emotionally healthy. Explore ways to give, collaborate, and sustain long-term impact across Kenya.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {partnershipOptions.map((option) => (
          <Card key={option.title} className="h-full border-muted/40 bg-background shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground">
                {option.title}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {option.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {option.steps.map((step) => (
                <p key={step}>• {step}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <section id="donate" className="rounded-3xl border border-muted/40 bg-muted/20 p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Donate securely
            </h2>
            <p className="text-base text-muted-foreground">
              We accept direct bank transfers, M-Pesa, and US-based donations through our fiscal sponsor. Please note “Everyday Resilience Counselling” in your transfer reference to ensure accurate allocation.
            </p>
            <div className="rounded-xl border border-muted/40 bg-background p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Bank Details (KE)</p>
              <p>Account Name: Everyday Resilience Counselling</p>
              <p>Bank: Cooperative Bank of Kenya</p>
              <p>Branch: Thika Road Mall</p>
              <p>Account Number: 123456789</p>
              <p>Swift Code: KCOOKENA</p>
            </div>
            <div className="rounded-xl border border-muted/40 bg-background p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">M-Pesa PayBill</p>
              <p>Business Number: 501234</p>
              <p>Account: EVERYDAY</p>
            </div>
          </div>
          <Card className="border-muted/40 bg-background shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground">
                Questions?
              </CardTitle>
              <CardDescription>
                Our partnerships team will respond within one business day.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Email: partnerships@everydayresilience.org</p>
              <p>Phone: {contactDetails.phoneKe}</p>
              <p>Mailing address: {contactDetails.mailingAddress}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Impact reporting & stewardship
          </h2>
          <p className="text-base text-muted-foreground">
            Every contribution is managed with transparency. We provide impact briefs twice per year outlining counselling hours delivered, communities reached, and emerging needs. Partners are invited to join quarterly prayer and reflection calls with our counsellors.
          </p>
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">
            Request our latest annual report or schedule a partnership discovery call by emailing partnerships@everydayresilience.org.
          </p>
        </div>
      </section>
    </div>
  );
}

