import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Counselling & Therapy Services in Kenya | Everyday Resilience",
  description:
    "Explore individual, couples, family, and organisational counselling services across Kenya. Trauma-informed, faith-sensitive support from Everyday Resilience Counselling.",
  openGraph: {
    title: "Counselling & Therapy Services in Kenya",
    description:
      "Comprehensive trauma-informed counselling, workshops, and wellbeing programmes for individuals, families, and organisations across Kenya.",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-16">
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What counselling services does Everyday Resilience Counselling Kenya provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We provide trauma-informed individual, couples, family, caregiver, and organisational counselling services across Kenya, available virtually and in-person in Kakamega.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer virtual counselling sessions in Kenya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We deliver secure virtual counselling sessions alongside in-person appointments, making it easier for clients across Kenya and the diaspora to access support.",
                },
              },
              {
                "@type": "Question",
                name: "How can organisations partner with Everyday Resilience Counselling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Organisations can book reflective practice groups, staff wellness workshops, embedded counsellors, and trauma-informed policy support by contacting our coordination team.",
                },
              },
            ],
          }),
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">What we do</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Trauma-informed counselling in Kenya for individuals, families, and communities
            </h1>
            <p className="text-base text-white/80">
              We partner with you to design care that honours your story—whether you&apos;re seeking personal therapy, guidance for your family, or holistic wellness programmes for your organisation.
            </p>
            <p className="text-base text-white/80">
              Everyday Resilience Counselling provides evidence-based counselling services across Kenya, combining local expertise with faith-sensitive support to help you navigate trauma, stress, and life transitions.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">Virtual & in-person</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Subsidised pathways</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Faith-sensitive</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-20 px-4">
        {serviceCategories.map((category, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={category.slug}
              className={cn(
                "grid items-center gap-12",
                isEven ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              )}
            >
              <div className={cn("space-y-5", !isEven && "lg:order-2 lg:pl-12")}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  0{index + 1}
                </p>
                <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                  {category.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">{category.summary}</p>
                <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                  {category.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-muted/30 bg-background p-5 shadow-sm">
                      {feature}
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900/40">
                  <Link href={`/contact`}>Learn more</Link>
                </Button>
              </div>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[36px] border border-muted/30 bg-muted/30 shadow-xl",
                  !isEven && "lg:order-1"
                )}
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/20 sm:h-80 lg:h-[24rem]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 600px, 100vw"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          );
        })}
      </section>

      <section className="container mx-auto grid gap-8 rounded-3xl border border-muted/30 bg-background p-8 shadow-sm md:grid-cols-3">
        <div className="space-y-3 md:col-span-3">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Why choose Everyday Resilience Counselling Kenya?
          </h2>
          <p className="text-base text-muted-foreground">
            We blend evidence-based therapy with deep cultural and faith sensitivity, ensuring every client feels seen, heard, and respected. Our team is committed to ongoing professional development and ethical, trauma-informed care across Kenya.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Trauma-informed clinicians</h3>
          <p className="text-sm text-muted-foreground">
            Our counsellors draw from trauma-informed modalities, somatic practices, and reflective supervision to deliver safe, regulated support in every session.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Community-centred partnerships</h3>
          <p className="text-sm text-muted-foreground">
            We partner with schools, churches, and organisations to build sustainable support systems, strengthening families, empowering caregivers, and fostering resilience across communities.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Accessible & flexible care</h3>
          <p className="text-sm text-muted-foreground">
            Sessions are available virtually and in-person (Kakamega), with subsidised counselling pathways and sponsorship options to make support accessible wherever you are in Kenya.
          </p>
        </div>
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm" aria-labelledby="services-faq-heading">
        <div className="space-y-6">
          <h2 id="services-faq-heading" className="font-heading text-3xl font-semibold text-foreground">
            Frequently asked questions about our counselling services
          </h2>
          <div className="space-y-5 text-base text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground">What counselling services does Everyday Resilience Counselling Kenya provide?</h3>
              <p className="mt-2">
                We offer trauma-informed individual counselling, couples therapy, caregiver coaching, family sessions, and organisational wellbeing programmes tailored to schools, NGOs, churches, and workplaces across Kenya.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Do you provide virtual counselling sessions in Kenya?</h3>
              <p className="mt-2">
                Yes. Our counsellors deliver secure virtual sessions alongside in-person appointments in Kakamega so that clients across Kenya and the diaspora can access support conveniently.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">How can organisations partner with Everyday Resilience Counselling?</h3>
              <p className="mt-2">
                Organisations can request reflective practice groups, staff debriefs, embedded counsellors, trauma-informed trainings, and policy support by contacting our coordination team for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Counselling pathways tailored to your needs
          </h2>
          <p className="text-base text-muted-foreground">
            Sessions are available virtually or in-person (Kakamega). We begin with an intake consultation to co-create a care plan, establish goals, and choose modalities that fit your season. Subsidised options can be arranged through sponsorships and partner organisations.
          </p>
          <p className="text-base text-muted-foreground">
            We also offer reflective practice groups and staff wellness programmes for counsellors and caregivers working in high-impact environments.
          </p>
        </div>
        <Card className="border-muted/40 bg-background shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-foreground">
              Booking & Availability
            </CardTitle>
            <CardDescription>
              Steps for individuals, families, and organisations to engage our services
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>1. Submit an inquiry through the contact form or call our support line.</p>
            <p>2. Receive a response within 24 hours with scheduling options.</p>
            <p>3. Complete the intake process and agree on session frequency.</p>
            <p>4. Begin sessions with ongoing progress reviews.</p>
            <Link
              href="/contact"
              className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/80 hover:bg-primary/10"
            >
              Book a consultation →
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

