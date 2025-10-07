import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Counselling Services",
  description:
    "Explore the counselling, training, and organisational support services offered by Everyday Resilience Counselling.",
};

export default function ServicesPage() {
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
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Services</p>
          <h1 className="font-heading text-4xl font-semibold text-foreground">
            Trauma-informed counselling, crafted for individuals and communities
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            We partner with you to design care that honours your story. Whether you are seeking personal therapy, guidance for your family, or a holistic wellness strategy for your organisation, Everyday Resilience Counselling offers an integrated approach rooted in safety, empathy, and professional excellence.
          </p>
        </div>
      </div>

      <Tabs defaultValue={serviceCategories[0]?.slug ?? "individual"} className="w-full">
        <TabsList className="flex flex-wrap gap-2 bg-muted/60 p-2">
          {serviceCategories.map((category) => (
            <TabsTrigger key={category.slug} value={category.slug} className="rounded-full px-4 py-2 text-sm">
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {serviceCategories.map((category) => (
          <TabsContent key={category.slug} value={category.slug} className="mt-6 space-y-6">
            <Card className="border-muted/40 shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {category.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.features.map((item) => (
                    <div key={item} className="rounded-xl border border-muted/30 bg-background p-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <section className="grid gap-6 rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Counselling pathways tailored to your needs
          </h2>
          <p className="text-base text-muted-foreground">
            Sessions are available virtually or in-person (Nairobi). We begin with an intake consultation to co-create a care plan, establish goals, and choose modalities that fit your season. Subsidised options can be arranged through sponsorships and partner organisations.
          </p>
          <p className="text-sm text-muted-foreground">
            We also offer clinical supervision, reflective practice groups, and staff wellness programmes for counsellors and caregivers working in high-impact environments.
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
            <p>4. Begin sessions with ongoing reviews every 6-8 weeks.</p>
            <Link href="/contact" className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary/80">
              Book a consultation →
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

