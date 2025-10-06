import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { serviceHighlights } from "@/content/site";

export const metadata: Metadata = {
  title: "About Everyday Resilience",
  description:
    "Learn about our mission, story, and counselling approach at Everyday Resilience Counselling.",
};

export default function AboutPage() {
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
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-primary">Our Story</p>
            <h1 className="font-heading text-4xl font-semibold text-foreground">
              Walking alongside individuals and communities through seasons of change
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              Everyday Resilience Counselling was founded by Zelipa Njoki Murage to bridge the gap in accessible, faith-sensitive counselling services across Kenya. With over a decade of experience supporting children, families, and caregivers, our team offers trauma-informed care rooted in empathy, dignity, and practical resilience.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We believe healing is a journey nurtured through compassionate support, community collaboration, and evidence-based interventions. From Nairobi to rural counties, our counsellors and trainers partner with organisations, schools, churches, and frontline teams to ensure safe, sustainable care.
            </p>
          </div>
          <div className="rounded-3xl border border-muted/40 bg-muted/20 p-8 shadow-lg">
            <h2 className="font-heading text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-4 text-base text-muted-foreground">
              To provide holistic counselling and psychoeducation that empowers individuals, strengthens families, and equips community caregivers to foster long-term emotional wellbeing.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>• Trauma-informed, culturally attuned counselling</li>
              <li>• Capacity building for caregivers and educators</li>
              <li>• Faith-sensitive support that honours every story</li>
              <li>• Partnerships that expand access for vulnerable children</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="grid gap-8 rounded-3xl border border-muted/30 bg-background p-8 shadow-sm md:grid-cols-3">
        {serviceHighlights.map((value) => (
          <div key={value.title} className="space-y-3">
            <h3 className="font-heading text-xl text-foreground">{value.title}</h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-muted/40 bg-muted/20 p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Meet our counsellors and facilitators
            </h2>
            <p className="text-base text-muted-foreground">
              Our multidisciplinary team blends psychological expertise, pastoral care experience, and lived cultural insight. Every counsellor commits to continuous supervision, ethical practice, and gentle presence. We bring together voices from education, social work, and trauma-informed care to offer holistic support.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-muted-foreground">
            <div className="rounded-xl border border-muted/40 bg-background p-4 shadow-sm">
              <p className="font-semibold text-foreground">Core Strengths</p>
              <p className="mt-2">
                EMDR-informed interventions, attachment-based therapy, play therapy, grief counselling, and caregiver coaching across diverse contexts.
              </p>
            </div>
            <div className="rounded-xl border border-muted/40 bg-background p-4 shadow-sm">
              <p className="font-semibold text-foreground">Partnership Model</p>
              <p className="mt-2">
                We embed with partner organisations to offer ongoing staff support, regular debriefs, and tailored capacity-building programmes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

