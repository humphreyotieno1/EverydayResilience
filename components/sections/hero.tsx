"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Heart, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

const carouselImages = ["/bg1.jpg", "/background2.jpg", "/background1.jpg"];

const heroStats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "10+", label: "Years Experience" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = carouselImages.length;

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index: number) => {
    clearTimer();
    setCurrent((index + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    goToSlide(current + 1);
  };

  const handlePrev = () => {
    goToSlide(current - 1);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return clearTimer;
  }, [current, totalSlides]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {carouselImages.map((src, idx) => (
          <div key={src} className="absolute inset-0">
            <Image
              src={src}
              alt="Counselling background"
              fill
              priority={idx === 0}
              className={cn(
                "object-cover transition-opacity duration-1000 ease-in-out",
                idx === current ? "opacity-70" : "opacity-0"
              )}
            />
          </div>
        ))}
        <div className="absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[32rem] flex-col px-6 py-20 sm:min-h-[36rem] lg:min-h-[44rem]">
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-left sm:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              <Heart className="h-4 w-4" aria-hidden />
              Compassionate counselling in Kenya
            </div>

            <div className="space-y-5">
              <h1 className="font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                We always provide
                <span className="relative ml-3 inline-block">
                  best service
                  <span className="absolute -bottom-2 left-0 h-2 w-full rounded bg-orange-300/80" aria-hidden />
                </span>
              </h1>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Everyday Resilience Counselling provides trauma-informed, faith-sensitive guidance for individuals, families, and organizations. We meet you where you are on your healing journey.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="w-full rounded-full bg-slate-900 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-colors duration-300 hover:bg-slate-400 sm:w-auto"
              >
                Make an appointment
              </Link>
            </div>

            <div className="grid gap-4 pt-6 xs:grid-cols-2 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/70 bg-white/85 p-4 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-lg sm:block">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border border-orange-200 bg-orange-100/60" aria-hidden>
              <Image
                  src="/backgroundhero.jpg"
                  alt="Counselling session"
                  fill
                  priority
                  className="rounded-full object-cover shadow-lg w-100 h-60"
                  style={{ border: "4px solidrgb(104, 97, 82)", background: "#fff7ed" }}
                />
              </div>

              <div className="absolute top-10 -left-8 w-44 rounded-2xl border border-white/70 bg-white p-4 shadow-xl">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                    <TrendingUp className="h-5 w-5 text-orange-500" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Client growth</p>
                    <p className="text-lg font-bold text-orange-600">55</p>
                  </div>
                </div>
                <div className="flex h-16 items-end gap-1">
                  {[40, 60, 45, 70, 55, 65, 50].map((height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-sm bg-gradient-to-t from-orange-400 to-orange-300"
                      style={{ height: `${height}%` }}
                      aria-hidden
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[0.65rem] text-slate-500">
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                </div>
              </div>

              <div className="absolute top-32 right-3 hidden gap-2 rounded-full bg-white p-1 shadow-lg sm:flex">
                {[
                  { label: "Daily", active: false },
                  { label: "Week", active: true },
                  { label: "Month", active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                      item.active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:flex"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              idx === current ? "scale-125 bg-orange-500" : "bg-white/70 hover:bg-white"
            )}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}