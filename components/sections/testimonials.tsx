"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Michelle Meyer, RD",
    role: "Clinical Registered Dietitian",
    quote:
      "“As a dietitian, real food is ideal. Everyday Resilience helps caregivers identify nourishing routines that ground families during healing.”",
    avatar: "/profile.png",
  },
  {
    name: "Sharon Palmer, Registered Dietitian",
    role: "“The Plant-Powered Dietitian”",
    quote:
      "“Decades of research show how consistent support boosts resilience and wellbeing. Everyday Resilience pairs compassionate counselling with practical routines.”",
    avatar: "/profile.png",
  },
  {
    name: "Tavis Piattoly, MS, RD, LDN",
    role: "Registered Dietitian",
    quote:
      "“Versatility matters—this team flexes with each family’s pace, offering gentle structure while celebrating progress and rest.”",
    avatar: "/profile.png",
  },
  {
    name: "Parent, Nairobi",
    role: "Caregiver",
    quote:
      "“Our family finally feels equipped to support our child. The counsellor created a safe space and gave us practical tools we use every day.”",
    avatar: "/profile.png",
  },
  {
    name: "Student, Nairobi",
    role: "Student",
    quote:
      "“The counsellor created a safe space and gave us practical tools we use every day.”",
    avatar: "/profile.png",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const total = testimonials.length;
  const itemsPerView = 3;
  const maxIndex = Math.max(total - itemsPerView, 0);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goTo = (index: number) => {
    resetTimer();
    if (itemsPerView >= total) {
      setCurrent(0);
      return;
    }

    const boundedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrent(boundedIndex);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => {
        if (itemsPerView >= total) {
          return 0;
        }

        const next = prev + 1;
        if (next > maxIndex) {
          return 0;
        }
        return next;
      });
    }, 6000);

    return resetTimer;
  }, [current, total, maxIndex]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stories of hope</p>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 sm:text-4xl">
            Voices from the families and partners we serve
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Gentle, consistent counselling changes lives. Hear how caregivers, teachers, and partners experience Everyday Resilience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex w-full flex-col gap-4 px-3 py-6 text-left sm:px-4 md:px-5"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="flex h-full flex-col rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{testimonial.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Previous testimonial"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: itemsPerView >= total ? 1 : maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 hover:bg-slate-400",
                    idx === current && "scale-125 bg-primary"
                  )}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">Swipe or use the controls to view more stories.</p>
      </div>
    </section>
  );
}

