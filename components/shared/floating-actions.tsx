"use client";

import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp, PhoneCall, MessageCircle } from "lucide-react";

const ACTIONS = [
  {
    label: "Call Us",
    href: "tel:+254712302318",
    icon: PhoneCall,
    className: "bg-slate-900 hover:bg-slate-800 text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+254712302318",
    icon: MessageCircle,
    className: "bg-[#25D366] hover:bg-[#1EB357] text-white",
  },
];

export function FloatingActions() {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
      {ACTIONS.map(({ label, href, icon: Icon, className }) => (
        <Button
          asChild
          key={label}
          size="icon"
          className={cn(
            "pointer-events-auto h-12 w-12 rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            className
          )}
        >
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        </Button>
      ))}
      <Button
        type="button"
        onClick={handleScrollTop}
        size="icon"
        className="pointer-events-auto h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </Button>
    </div>
  );
}

