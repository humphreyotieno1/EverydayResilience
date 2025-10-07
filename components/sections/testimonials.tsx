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
  const total = testimonials.length;

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goTo = (index: number) => {
    resetTimer();
    setCurrent((index + total) % total);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);

    return resetTimer;
  }, [current, total]);

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
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] sm:justify-center sm:overflow-visible">
            {testimonials.map((testimonial, idx) => (
              <article
                key={testimonial.name}
                className={cn(
                  "flex min-w-[18rem] snap-start flex-col gap-4 rounded-3xl border border-slate-100 bg-white px-6 py-8 text-left shadow-sm transition-all duration-300 sm:min-w-[20rem] md:min-w-[22rem]",
                  idx === current ? "shadow-lg" : "opacity-90"
                )}
              >
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
                <p className="text-sm leading-relaxed text-slate-600">{testimonial.quote}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
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
        </div>
      </div>
    </section>
  );
}

