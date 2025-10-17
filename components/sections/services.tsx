import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "General Counselling",
    description:
      "Explore how individual counselling can help you regulate emotions, process trauma, and rebuild hope. We create a safe, supportive space to explore your story, build resilience, and develop practical coping strategies for everyday challenges.",
    image: "/services/general.jpg",
    href: "/services/general",
  },
  {
    title: "Family Counselling",
    description:
      "Strengthen family relationships through structured therapy sessions that enhance communication, improve conflict management, and build stronger, more supportive relationships in a safe, supportive environment.",
    image: "/services/family.jpg",
    href: "/services/family",
  },
  {
    title: "Anxiety Treatment",
    description:
      "Discover how individual counselling can help you understand the root causes of anxiety, manage overwhelming thoughts, and develop practical coping strategies for a calmer, more balanced life",
    image: "/services/anxiety.jpg",
    href: "/services/anxiety",
  },
  {
    title: "Depression Therapy",
    description:
      "Learn how counselling sessions can support you in navigating feelings of sadness or hopelessness, identifying triggers, and building resilience to regain motivation, joy and emotional wellbeing.",
    image: "/services/depression.jpg",
    href: "/services/depression",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-white" />
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-wide text-primary">What we offer</p>
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Comprehensive support for every stage of healing
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Discover how compassionate counselling promotes emotional wellbeing, mental health, and lasting personal growth.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl bg-slate-900/90 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={420}
                height={420}
                className="h-64 w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" aria-hidden />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-white">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-white/75">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild className="rounded-full bg-slate-900 px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow hover:bg-slate-400">
            <Link href="/services">Explore our services</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 hover:text-slate-900 hover:bg-slate-100"
          >
            <Link href="/about">Learn more about us</Link>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-[url('/wave-border.svg')] bg-cover bg-top bg-repeat-x" aria-hidden />
    </section>
  );
}
