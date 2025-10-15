"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const impactSlides = [
  {
    title: "Counselling Access",
    description:
      "Over 200 children, teens, and caregivers supported with subsidised therapy across Kenya.",
    href: "/stories",
    image: "/impact/impact1.jpg",
  },
  {
    title: "Trauma-Informed Training",
    description:
      "Caregivers and teachers equipped each year with trauma-competent care, attachment tools, and crisis response skills.",
    href: "/services/workshops",
    image: "/impact/impact2.jpg",
  },
  {
    title: "Community Outreach",
    description:
      "Partnerships with faith communities and NGOs bringing psychoeducation circles, group counselling, and debriefs to underserved estates.",
    href: "/partnerships",
    image: "/impact/impact3.jpg",
  },
];

export function ImpactSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = impactSlides.length;

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index: number) => {
    resetTimer();
    setCurrent((index + totalSlides) % totalSlides);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return resetTimer;
  }, [current, totalSlides]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {impactSlides.map((slide, idx) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt="City skyline"
            fill
            priority={idx === 0}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              idx === current ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
      </div>

      <div className="container relative z-10 mx-auto space-y-12 px-4 py-24 text-white">
        <div className="max-w-4xl space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            High-impact ventures. Economic development. Social change.
          </div>
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
            Counselling that accelerates transformation
          </h2>
          <p className="max-w-2xl text-base text-white/80">
            We collaborate with communities, innovators, and grassroots leaders to design courageous interventions that heal, educate, and empower.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur">
          <div className="grid gap-0 sm:grid-cols-3">
            {impactSlides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(idx)}
                className={cn(
                  "flex flex-col gap-3 border-white/10 px-5 py-6 text-left transition-colors",
                  idx !== totalSlides - 1 ? "border-b sm:border-b-0 sm:border-r" : "",
                  idx === current ? "bg-white/10" : "hover:bg-white/5"
                )}
              >
                <h3 className="text-lg font-semibold text-white">{slide.title}</h3>
                <p className="text-sm text-white/70">{slide.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8">
        <button
          type="button"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-transform duration-200 hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:flex"
          onClick={() => goToSlide(current - 1)}
          aria-label="Previous impact story"
        >
          ‹
        </button>
        <button
          type="button"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-transform duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:flex"
          onClick={() => goToSlide(current + 1)}
          aria-label="Next impact story"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {impactSlides.map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-2 w-6 rounded-full bg-white/40 transition-all",
              idx === current ? "bg-white" : "opacity-70"
            )}
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}

