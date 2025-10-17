import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stories = [
  {
    title: "“Our teen found her voice again”",
    description:
      "After months of silence, counseling sessions provided a safe space for Amina to process loss and reconnect with her passions.",
    impact:
      "With weekly sessions and caregiver involvement, family communication improved and anxiety decreased significantly.",
    image: "/stories/teens.jpg",
  },
  {
    title: "“Teachers now understand trauma triggers”",
    description:
      "A partner school engaged our trauma-informed series, equipping teachers to respond with empathy and consistency.",
    impact:
      "Disciplinary incidents dropped by 40% and learners requested ongoing support groups.",
    image: "/stories/teachers.jpg",
  },
  {
    title: "“Frontline caregivers feel supported”",
    description:
      "NGO staff receive monthly debriefs and wellbeing check-ins, reducing burnout and compassion fatigue.",
    impact:
      "Teams report renewed purpose and practice daily grounding routines together.",
    image: "/stories/caregivers.jpg",
  },
];

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Real stories of healing, growth, and resilience from the individuals and organisations we walk with.",
};

export default function StoriesPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Stories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Impact stories</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Hope is possible—here’s what healing looks like
            </h1>
            <p className="text-base text-white/80">
              We honour the brave individuals and partners who allow us to witness their transformation. Names and identifying details are adapted to protect privacy, but the stories remain true to the resilience we see every day.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-16 px-4">
        {stories.map((story, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={story.title}
              className={cn("grid items-center gap-12", isEven ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]")}
            >
              <div className={cn("space-y-5", !isEven && "lg:order-2 lg:pl-10")}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Story 0{index + 1}</span>
                <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{story.title}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{story.description}</p>
                <Card className="border-muted/40 bg-muted/20 shadow-sm">
                  <CardContent className="p-6 text-sm text-muted-foreground">{story.impact}</CardContent>
                </Card>
              </div>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[36px] border border-muted/30 bg-muted/30 shadow-xl",
                  !isEven && "lg:order-1"
                )}
              >
                <div className="relative h-72 w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/20 sm:h-80 lg:h-[22rem]">
                  <Image src={story.image} alt={story.title} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          );
        })}
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Share your story or partnership idea</h2>
          <p className="text-base text-muted-foreground">
            If Everyday Resilience has impacted you or your organisation, we would love to hear from you. Your story encourages others to seek help and helps us ensure our services remain responsive to community needs.
          </p>
          <p className="text-sm text-muted-foreground">
            Email us at <span className="font-semibold text-foreground">info@everydayresiliencekenya.org</span> or include a note in the contact form.
          </p>
        </div>
      </section>
    </div>
  );
}

