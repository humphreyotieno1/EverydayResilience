import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Individual Counselling",
    description:
      "Personalized sessions supporting adults, teens, and children through anxiety, grief, trauma, and life transitions.",
    tags: ["Trauma-informed", "Evidence-based"],
    href: "/services/individual",
  },
  {
    title: "Family & Parenting Support",
    description:
      "Guidance for caregivers navigating behavioural challenges, attachment needs, and parenting after trauma.",
    tags: ["Parent coaching", "Attachment"],
    href: "/services/parenting",
  },
  {
    title: "Group Therapy & Workshops",
    description:
      "Facilitated healing spaces and psychoeducation for schools, churches, and community organizations.",
    tags: ["Group sessions", "Psychoeducation"],
    href: "/services/workshops",
  },
  {
    title: "Crisis Intervention & Debriefing",
    description:
      "Rapid response and emotional first aid for organizations after critical incidents or collective trauma.",
    tags: ["Response", "Stabilization"],
    href: "/services/crisis",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-wide text-primary">What we offer</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Comprehensive support for every stage of healing
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From one-on-one sessions to community-based programmes, our counsellors bring compassionate expertise to help you build resilience day by day.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col justify-between border-muted/40 shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
