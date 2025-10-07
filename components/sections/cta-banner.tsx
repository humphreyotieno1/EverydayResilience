import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 mb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/backgroundhero.jpg')] bg-cover bg-center" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/40" aria-hidden />
      </div>
      <div className="container mx-auto flex flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-white/5 px-8 py-16 text-center text-white shadow-[0_30px_80px_-40px_rgba(12,74,110,0.6)] backdrop-blur">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
          Everyday Resilience Counselling
        </div>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          Realise your potential for healing
        </h2>
        <p className="max-w-2xl text-base text-white/75">
          Take the next step toward calm, clarity, and connection. Our counsellors blend evidence-based care with compassion tailored to your story.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 shadow hover:bg-slate-100"
          >
            <Link href="/contact">Request a session</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
          >
            <Link href="/stories">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

