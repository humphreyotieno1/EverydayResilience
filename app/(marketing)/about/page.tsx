import Script from "next/script";
import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { serviceHighlights } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { CalendarClock, HeartHandshake, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Everyday Resilience Counselling Kenya | Trauma-Informed Team",
  description:
    "Meet the Everyday Resilience Counselling Kenya team providing trauma-informed, faith-sensitive counselling and wellbeing programmes for individuals, families, and organisations.",
  openGraph: {
    title: "About Everyday Resilience Counselling Kenya",
    description:
      "Discover the story, mission, and trauma-informed counsellors behind Everyday Resilience Counselling Kenya.",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who leads Everyday Resilience Counselling Kenya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Everyday Resilience Counselling Kenya is led by founder Zelipa Njoki Murage and a multidisciplinary team of trauma-informed counsellors, facilitators, and wellness practitioners.",
                },
              },
              {
                "@type": "Question",
                name: "What is the counselling approach at Everyday Resilience?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We combine evidence-based therapy, cultural humility, and faith-sensitive practices to create trauma-informed care plans tailored to Kenyan individuals, families, and organisations.",
                },
              },
              {
                "@type": "Question",
                name: "How does Everyday Resilience support organisations and communities?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We partner with schools, NGOs, churches, and frontline teams to deliver embedded counsellors, reflective practice groups, staff wellness workshops, and trauma-informed policy support across Kenya.",
                },
              },
            ],
          }),
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background1.jpg')] bg-cover bg-center opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/30" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Our story</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Trauma-informed counsellors supporting Kenya&apos;s individuals, families, and communities
            </h1>
            <p className="text-base text-white/80">
              Everyday Resilience Counselling was founded by Njoki Murage to bridge the gap in accessible, faith-sensitive counselling services across Kenya. With over a decade of experience supporting children, families, caregivers, and frontline teams, our counsellors offer trauma-informed care rooted in empathy, dignity, and practical resilience.
            </p>
            <p className="text-base text-white/80">
              From individual therapy and caregiver coaching to organisational w  ellbeing programmes, our multidisciplinary team integrates cultural insight, spiritual care, and evidence-based interventions to walk with you through every season of change.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <CalendarClock className="h-4 w-4" aria-hidden />
                Est. 2015
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <HeartHandshake className="h-4 w-4" aria-hidden />
                Trauma-informed & faith-sensitive
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <Users className="h-4 w-4" aria-hidden />
                500+ lives supported
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-16 px-4">
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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-wide text-primary/80">Why we exist</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Creating safe spaces where resilience grows every day
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Healing is a journey nurtured through compassionate support, community collaboration, and evidence-based interventions. Our counsellors and trainers partner with organisations, schools, churches, and frontline teams to ensure safe, sustainable care.
            </p>
            <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-3xl border border-muted/30 bg-background p-5 shadow-sm">
                <p className="font-semibold text-foreground">Our mission</p>
                <p className="mt-2">
                  To provide holistic counselling and psychoeducation that empowers individuals, strengthens families, and equips community caregivers to foster long-term emotional wellbeing.
                </p>
              </div>
              <div className="rounded-3xl border border-muted/30 bg-background p-5 shadow-sm">
                <p className="font-semibold text-foreground">Our approach</p>
                <p className="mt-2">
                  We listen deeply, honour stories, and craft trauma-sensitive care plans that respect cultural identities and faith perspectives.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-muted/30 bg-muted/30">
            <Image
              src="/background2.jpg"
              alt="Counsellors facilitating a session"
              width={920}
              height={680}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 space-y-2 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Evidence-based care</p>
              <p className="font-heading text-lg">Trauma-informed counselling, caregiver coaching, and community programmes grounded in hope.</p>
            </div>
          </div>
        </div>

        <section className="rounded-3xl bg-white py-10 shadow-xl">
          <div className="grid gap-6 px-6 md:grid-cols-3">
            {serviceHighlights.map((value) => (
              <div key={value.title} className="space-y-3 border-l border-slate-200 pl-6 first:border-l-0 first:pl-0">
                <h3 className="font-heading text-xl text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-muted/30 bg-muted/20 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Meet our counsellors and facilitators
              </h2>
              <p className="text-base text-muted-foreground">
                Our multidisciplinary team blends psychological expertise and lived cultural insight. Every counsellor commits to continuous supervision, ethical practice, and gentle presence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book a discovery call
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-muted/30 bg-background p-5 shadow-sm">
                <p className="font-semibold text-foreground">Core Strengths</p>
                <p className="mt-2">
                  EMDR-informed interventions, attachment-based therapy, play therapy, grief counselling, and caregiver coaching across diverse contexts.
                </p>
              </div>
              <div className="rounded-2xl border border-muted/30 bg-background p-5 shadow-sm">
                <p className="font-semibold text-foreground">Partnership Model</p>
                <p className="mt-2">
                  Embedded counsellors, regular debriefs, and tailored capacity-building programmes that leave communities stronger.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-muted/30 bg-background p-8 shadow-sm" aria-labelledby="about-faq-heading">
          <div className="space-y-6">
            <h2 id="about-faq-heading" className="font-heading text-3xl font-semibold text-foreground">
              Frequently asked questions about Everyday Resilience Counselling Kenya
            </h2>
            <div className="space-y-5 text-base text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Who leads Everyday Resilience Counselling Kenya?</h3>
                <p className="mt-2">
                  Everyday Resilience Counselling Kenya is led by founder Zelipa Njoki Murage alongside trauma-informed counsellors, facilitators, and wellness practitioners committed to ethical, culturally responsive care.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">What is your counselling philosophy?</h3>
                <p className="mt-2">
                  We integrate evidence-based therapy, cultural humility, spiritual sensitivity, and collaborative planning to create safety for Kenyan individuals, families, and communities seeking support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How do you support organisations and communities?</h3>
                <p className="mt-2">
                  Our team partners with schools, NGOs, churches, and frontline teams to offer embedded counsellors, reflective practice groups, caregiver coaching, and trauma-informed policy support tailored to local contexts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

