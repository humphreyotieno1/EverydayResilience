import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { contactDetails } from "@/content/site";
import { cn } from "@/lib/utils";

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
    image: "/partnerships/sponsor.jpg",
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
    image: "/partnerships/collaboration.jpg",
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
    image: "/partnerships/resource.jpg",
  },
];

export const metadata: Metadata = {
  title: "Partnerships & Giving",
  description:
    "Partner with Everyday Resilience Counselling to expand access to mental health support across Kenya and beyond.",
};

const highlightStats = [
  { label: "Counselling hours sponsored", value: "2,450+" },
  { label: "Caregivers trained", value: "780" },
  { label: "Schools & NGOs served", value: "35" },
];

export default function PartnershipsPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background1.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Partnerships</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Partner with us</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Together we can widen access to healing and resilience
            </h1>
            <p className="text-base text-white/80">
              Your support fuels counselling for underserved children, equips caregivers with trauma-informed tools, and keeps frontline teams emotionally healthy across Kenya.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">Give financially</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Collaborate</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Co-create resources</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-16 px-4">
        {partnershipOptions.map((option, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={option.title}
              className={cn("grid items-center gap-12", isEven ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]")}
            >
              <div className={cn("space-y-5", !isEven && "lg:order-2 lg:pl-12")}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Option 0{index + 1}</span>
                <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{option.title}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{option.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {option.steps.map((step) => (
                    <div key={step} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-800">
                  <a href="#donate">Start a conversation</a>
                </Button>
              </div>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[36px] border border-muted/30 bg-muted/30 shadow-xl",
                  !isEven && "lg:order-1"
                )}
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/20 sm:h-80 lg:h-[22rem]">
                  <Image src={option.image} alt={option.title} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          );
        })}
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlightStats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center lg:text-left">
              <p className="font-heading text-4xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="donate" className="container mx-auto grid gap-10 rounded-3xl border border-muted/30 bg-background p-8 shadow-sm lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Donate securely</h2>
          <p className="text-base text-muted-foreground">
            We accept direct bank transfers, M-Pesa, and US-based donations through our fiscal sponsor. Please note “Everyday Resilience Counselling” in your transfer reference to ensure accurate allocation.
          </p>
          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <Card className="border-muted/40 bg-muted/20 shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg text-foreground">Bank details (KE)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p>Account Name: ERC</p>
                <p>Bank: Bank of Kenya</p>
                <p>Branch: Kakamega</p>
                <p>Account Number: 123456789</p>
                <p>Swift Code: KCOOKENA</p>
              </CardContent>
            </Card>
            <Card className="border-muted/40 bg-muted/20 shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg text-foreground">M-Pesa PayBill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p>Business Number: 1234</p>
                <p>Account: EVERYDAY</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="border-muted/40 bg-background shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-foreground">Questions?</CardTitle>
            <CardDescription>Our partnerships team will respond within one business day.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Email: partnerships@everydayresilience.org</p>
            <p>Phone: {contactDetails.phoneKe}</p>
            <p>Mailing address: {contactDetails.mailingAddress}</p>
            <Button asChild variant="outline" className="w-full rounded-full border-slate-300 text-xs font-semibold uppercase tracking-[0.2em]">
              <a href="/contact">Contact the team</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Impact reporting & stewardship</h2>
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

