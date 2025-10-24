"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Peninah W.",
    role: "Client",
    shortQuote: "When my relationship ended, I felt like my world had fallen apart. Counselling gave me a safe space to express my pain and rediscover who I am beyond the relationship. I've learned to love myself again, make independent decisions, and focus on my and child's well-being. I'm finally at peace with my past.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Wang'ombe",
    role: "Client",
    shortQuote: "My counsellor helped me see how unhealthy my work environment had become. I had been holding on out of fear and self-doubt. Through therapy, I gained clarity and courage and finally left the toxic workplace, took time to heal, and now I'm working in a place where I'm respected and valued.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Amina K.",
    role: "Client",
    shortQuote: "I did not understand how growing up in a chaotic family had affected my life until I looked around and realized that I did not have any stable relationships. Counselling has taught me how to set healthy boundaries and give people a chance to prove themselves instead of projecting my desires unto them. The result has been stronger, calmer relationships that I can rely on.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Ochieng K.",
    role: "Client",
    shortQuote: "Before counselling, social situations used to terrify me. I would replay encounters in my mind days after and cringe at all the things that I figured I had done wrong. I missed out on networking events and social activities that I might have enjoyed. My therapist helped me challenge the voice in my head and accept that I cannot be perfect in every situation. She also encouraged me to expose myself to more social encounters, which to my relief has helped a lot and helped in building my social network.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Wambui",
    role: "Client",
    shortQuote: "I sought counselling after a really bad breakup thinking that I just had to get over it. However, my counsellor helped me understand my patterns in love, my fear about being alone, and helped me understand what a healthy connection looks like. Learning this has improved my dating life tremendously. Now, I can walk away in the early stages instead of setting myself up for a world of pain.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
  {
    name: "Winnie",
    role: "Client",
    shortQuote: "After losing my dad, I was consumed by grief for such a long time. Talking through my grief with a professional has helped me navigate my pain and face it instead of burying it. While I'm not over it, and don't think I will be for a long time, I have learnt to live with the loss without letting it consume me.",
    avatar: "/profile.png",
    hasFullStory: false,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const total = testimonials.length;
  
  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3; // Default for SSR
  };
  
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
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

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return; // Don't auto-advance when hovered
    
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
  }, [current, total, maxIndex, isHovered, itemsPerView]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto space-y-12 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Stories of healing</p>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 sm:text-4xl">
            Real stories from our clients
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Discover how trauma-informed counselling has helped individuals overcome challenges, heal from past experiences, and build resilience for a brighter future.
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="flex w-full flex-col gap-3 px-2 py-4 text-left sm:gap-4 sm:px-3 sm:py-6 md:px-4 md:px-5"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="flex h-full flex-col rounded-[24px] border border-slate-100 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10 sm:h-12 sm:w-12">
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
                    <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {testimonial.shortQuote}
                      </p>
                    </div>
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

