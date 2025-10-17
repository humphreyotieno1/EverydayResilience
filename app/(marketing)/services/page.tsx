import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Counselling Services",
  description:
    "Explore the counselling, training, and organisational support services offered by Everyday Resilience Counselling.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-16">
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
              Trauma-informed counselling for individuals, families, and communities
            </h1>
            <p className="text-base text-white/80">
              We partner with you to design care that honours your story—whether you&apos;re seeking personal therapy, guidance for your family, or holistic wellness programmes for your organisation.
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
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Why choose Everyday Resilience?</h3>
          <p className="text-sm text-muted-foreground">
            We blend evidence-based therapy with deep cultural and faith sensitivity, ensuring every client feels seen, heard, and respected. Our team is committed to ongoing professional development and ethical, trauma-informed care.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Community-centred approach</h3>
          <p className="text-sm text-muted-foreground">
            We partner with schools, churches, and organisations to build sustainable support systems. Our programmes are designed to strengthen families, empower caregivers, and foster resilience across communities.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl text-foreground">Accessible & flexible care</h3>
          <p className="text-sm text-muted-foreground">
            Sessions are available both virtually and in-person, with subsidised options for those in need. We tailor our services to fit your unique context, making support accessible wherever you are in your journey.
          </p>
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

