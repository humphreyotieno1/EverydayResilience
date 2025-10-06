import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Parent, Nairobi",
    quote:
      "Our family finally feels equipped to support our child. The counsellor created a safe space and gave us practical tools we use every day.",
  },
  {
    name: "Teacher, Kiambu County",
    quote:
      "The trauma-informed workshops helped our staff understand behaviour as communication. We see students connecting and thriving again.",
  },
  {
    name: "NGO Partner",
    quote:
      "Everyday Resilience has been instrumental in debriefing our frontline teams. Their support keeps our caregivers grounded and hopeful.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-wide text-primary">Stories of hope</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Voices from the families and partners we serve
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Testimonials reflect the impact of patient, consistent counselling that honours the dignity of every individual.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full border-muted/40 bg-muted/10 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                  <Avatar className="h-10 w-10 bg-primary/20">
                    <AvatarFallback className="text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part.charAt(0))
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {testimonial.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  “{testimonial.quote}”
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

