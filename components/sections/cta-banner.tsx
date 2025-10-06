import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-secondary/15 to-primary/15" />
      <div className="container mx-auto flex flex-col items-center gap-6 rounded-3xl border border-primary/20 bg-background/80 px-6 py-12 text-center shadow-xl">
        <h2 className="font-heading text-3xl font-semibold text-foreground">
          Ready to begin your healing journey?
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground">
          Our counsellors are here to walk alongside you with compassion, cultural sensitivity, and practical tools. Reach out today and let&apos;s design a care plan that fits your needs.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Schedule a consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-secondary text-secondary">
            <Link href="/partnerships">Support our mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

