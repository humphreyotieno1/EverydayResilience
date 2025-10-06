import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resourceData = {
  guides: [
    {
      title: "Understanding Trauma Responses",
      description: "Learn how the nervous system reacts to stress and practical steps for grounding." ,
      href: "#",
    },
    {
      title: "Caregiver Self-Care Toolkit",
      description: "Daily routines and reflective exercises to sustain your own wellbeing while supporting others.",
      href: "#",
    },
  ],
  articles: [
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
  downloads: [
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
};

export const metadata: Metadata = {
  title: "Resources & Psychoeducation",
  description:
    "Articles, guides, and downloads to support mental health awareness and everyday resilience.",
};

export default function ResourcesPage() {
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
              <BreadcrumbPage>Resources</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Psychoeducation</p>
          <h1 className="font-heading text-4xl font-semibold text-foreground">
            Tools to build understanding and nurture resilience every day
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            We curate guides, articles, and downloads to help you care for your mental health, support loved ones, and create safer spaces in your community. Explore resources for caregivers, educators, churches, and organisational leaders.
          </p>
        </div>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="flex flex-wrap gap-2 bg-muted/60 p-2">
          <TabsTrigger value="guides" className="rounded-full px-4 py-2 text-sm">
            Guides
          </TabsTrigger>
          <TabsTrigger value="articles" className="rounded-full px-4 py-2 text-sm">
            Articles
          </TabsTrigger>
          <TabsTrigger value="downloads" className="rounded-full px-4 py-2 text-sm">
            Downloads
          </TabsTrigger>
        </TabsList>
        {Object.entries(resourceData).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-6 space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((item) => (
                <Card key={item.title} className="h-full border-muted/40 bg-background shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80" href={item.href}>
                      Read more →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="rounded-3xl border border-muted/30 bg-muted/20 p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Resource partnerships & training
            </h2>
            <p className="text-base text-muted-foreground">
              We collaborate with organisations to co-create resource libraries, develop trauma-informed policies, and provide ongoing staff training. Let us know if your school, church, or NGO needs bespoke content or workshops.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-muted/30 bg-background p-4">
              <p className="font-semibold text-foreground">Newsletter</p>
              <p className="mt-2">
                Sign up to receive monthly updates with new articles, wellbeing tips, and upcoming workshops.
              </p>
            </div>
            <div className="rounded-xl border border-muted/30 bg-background p-4">
              <p className="font-semibold text-foreground">Custom Programmes</p>
              <p className="mt-2">
                Request co-branded resources or partner training for your staff and volunteers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
