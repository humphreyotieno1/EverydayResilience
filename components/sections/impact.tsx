import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Healing",
    description:
      "We centre safety, empathy, and evidence-based interventions to nurture long-term emotional wellbeing.",
  },
  {
    title: "Education",
    description:
      "Workshops and resources equip caregivers, teachers, and leaders with trauma-informed tools.",
  },
  {
    title: "Community",
    description:
      "Partnerships with schools, faith communities, and NGOs extend our support to those most in need.",
  },
];

export function ImpactSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-wide text-primary">Our impact</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Rooted in compassion, growing resilient communities
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everyday Resilience Counselling was founded to ensure every child, caregiver, and community has access to the support they need to heal, flourish, and hope again.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-none bg-background/90 shadow-lg shadow-primary/10">
              <CardContent className="space-y-3 p-6">
                <h3 className="font-heading text-2xl text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

