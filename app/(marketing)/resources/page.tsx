import { BookOpen, Download, FileText } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resourceData = {
  guides: {
    label: "Guides",
    icon: BookOpen,
    items: [
      {
        title: "Understanding Trauma Responses",
        description: "Learn how the nervous system reacts to stress and practical steps for grounding.",
        href: "#",
      },
      {
        title: "Caregiver Self-Care Toolkit",
        description: "Daily routines and reflective exercises to sustain your own wellbeing while supporting others.",
        href: "#",
      },
    ],
  },
  articles: {
    label: "Articles",
    icon: FileText,
    items: [
      {
        title: "Walking with Teens through Anxiety",
        description: "Communication tools for parents and mentors supporting adolescents through worry and overwhelm.",
        href: "#",
      },
      {
        title: "Creating Safer Classrooms",
        description: "Trauma-informed practices educators can embed in their daily routines.",
        href: "#",
      },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: Download,
    items: [
      {
        title: "Crisis Response Checklist",
        description: "A step-by-step guide for organisations responding to critical incidents.",
        href: "#",
      },
      {
        title: "Session Preparation Worksheet",
        description: "Questions to reflect on before counselling sessions to make the most of your time.",
        href: "#",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Resources & Psychoeducation",
  description:
    "Articles, guides, and downloads to support mental health awareness and everyday resilience.",
};

export default function ResourcesPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background2.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Psychoeducation</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Tools to build understanding and nurture resilience every day
            </h1>
            <p className="text-base text-white/80">
              We curate guides, articles, and downloads to help you care for your mental health, support loved ones, and create safer spaces in your community.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">For caregivers</span>
              <span className="rounded-full border border-white/30 px-4 py-2">For educators</span>
              <span className="rounded-full border border-white/30 px-4 py-2">For leaders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-12 px-4">
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="flex flex-wrap gap-2 rounded-full bg-muted/40 p-2">
            {Object.entries(resourceData).map(([key, value]) => {
              const Icon = value.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                  {value.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {Object.entries(resourceData).map(([key, value]) => (
            <TabsContent key={key} value={key} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {value.items.map((item) => (
                  <Card key={item.title} className="group h-full overflow-hidden border-muted/40 bg-background shadow-sm transition-transform duration-300 hover:-translate-y-2">
                    <CardHeader className="space-y-4">
                      <CardTitle className="font-heading text-2xl text-foreground">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        href={item.href}
                      >
                        Access resource →
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid gap-8 rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">Featured collections</h2>
            <p className="text-base text-muted-foreground">
              Download toolkits, view webinar replays, and share printable guides with your teams. These collections are updated quarterly with new material from our counsellors and partners.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-muted/40 bg-background shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Caregiver Companion Pack</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Reflection prompts, conversation starters, and pacing guides for families.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-muted/40 bg-background shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Trauma-Informed Classrooms</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Slides, policy templates, and regulation activities for school teams.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <Card className="border-muted/40 bg-background shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="font-heading text-xl text-foreground">Join the resilience newsletter</CardTitle>
              <CardDescription>
                Monthly insights, reflective practices, and upcoming event invitations straight to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>New to Everyday Resilience? Start with our core guide on grounding practices, then explore themed series each month.</p>
              <Button className="w-full rounded-full bg-slate-900 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-800">
                Subscribe for updates
              </Button>
              <p className="text-xs text-muted-foreground">
                We respect your inbox. Expect one email per month and the option to opt out anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">Resource partnerships & training</h2>
            <p className="text-base text-muted-foreground">
              We collaborate with organisations to co-create resource libraries, develop trauma-informed policies, and provide ongoing staff training.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-muted/30 bg-muted/20 p-4">
              <p className="font-semibold text-foreground">Custom programmes</p>
              <p className="mt-2">Request co-branded resources or partner workshops tailored to your audience.</p>
            </div>
            <div className="rounded-xl border border-muted/30 bg-muted/20 p-4">
              <p className="font-semibold text-foreground">Workplace wellbeing</p>
              <p className="mt-2">Equip teams with regulation breaks, peer support circles, and crisis response planning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
