import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stories = [
  {
    title: "“Our teen found her voice again”",
    description:
      "After months of silence, counseling sessions provided a safe space for Amina to process loss and reconnect with her passions.",
    impact:
      "With weekly sessions and caregiver involvement, family communication improved and anxiety decreased significantly.",
  },
  {
    title: "“Teachers now understand trauma triggers”",
    description:
      "A partner school engaged our trauma-informed series, equipping teachers to respond with empathy and consistency.",
    impact:
      "Disciplinary incidents dropped by 40% and learners requested ongoing support groups.",
  },
  {
    title: "“Frontline caregivers feel supported”",
    description:
      "NGO staff receive monthly debriefs and wellbeing check-ins, reducing burnout and compassion fatigue.",
    impact:
      "Teams report renewed purpose and practice daily grounding routines together.",
  },
];

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Real stories of healing, growth, and resilience from the individuals and organisations we walk with.",
};

export default function StoriesPage() {
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
              <BreadcrumbPage>Stories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">Impact stories</p>
          <h1 className="font-heading text-4xl font-semibold text-foreground">
            Hope is possible—here’s what healing looks like
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            We honour the brave individuals and partners who allow us to witness their transformation. Names and identifying details are adapted to protect privacy, but the stories remain true to the resilience we see every day.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <Card key={story.title} className="h-full border-muted/40 bg-background shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground">
                {story.title}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {story.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-muted/30 bg-muted/20 p-4 text-sm text-muted-foreground">
                {story.impact}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="rounded-3xl border border-muted/40 bg-muted/20 p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Share your story or partnership idea
          </h2>
          <p className="text-base text-muted-foreground">
            If Everyday Resilience has impacted you or your organisation, we would love to hear from you. Your story encourages others to seek help and helps us ensure our services remain responsive to community needs.
          </p>
          <p className="text-sm text-muted-foreground">
            Email us at <span className="font-semibold text-foreground">stories@everydayresilience.org</span> or include a note in the contact form.
          </p>
        </div>
      </section>
    </div>
  );
}

