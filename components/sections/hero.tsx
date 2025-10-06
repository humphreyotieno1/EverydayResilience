import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroStats } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(64,147,122,0.2),_transparent_60%)]" />
      <div className="container mx-auto grid gap-12 px-4 py-24 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge className="rounded-full bg-secondary text-secondary-foreground">
            Compassionate counselling in Kenya
          </Badge>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Helping you cultivate everyday resilience for a thriving life.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everyday Resilience Counselling provides trauma-informed, faith-sensitive guidance for individuals, families, and organizations. We meet you where you are, offering compassionate care, psychoeducation, and intentional support on your healing journey.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Book a counselling session</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-secondary text-secondary">
              <Link href="/services">Explore our services</Link>
            </Button>
          </div>
          <div className="grid gap-6 pt-6 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-muted/50 bg-background p-4 text-center shadow-sm"
              >
                <p className="font-heading text-2xl font-semibold text-primary">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-muted/50 bg-muted/40">
            <Image
              src="/hero-illustration.svg"
              alt="Counsellor supporting a client during a session"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-background bg-primary/90 shadow-lg" />
        </div>
      </div>
    </section>
  );
}

