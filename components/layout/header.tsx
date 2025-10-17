"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ctaLinks, siteNavigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const desktopCtas = [
  {
    label: ctaLinks.bookSession.label,
    href: ctaLinks.bookSession.href,
    className:
      "bg-[#1ba7a6] text-white hover:bg-[#158b8a] focus-visible:outline-[#1ba7a6]",
  },
  {
    label: ctaLinks.supportMission.label,
    href: ctaLinks.supportMission.href,
    className:
      "bg-[#c8792e] text-white hover:bg-[#a8611f] focus-visible:outline-[#c8792e]",
  },
];

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link relative px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
        isActive && "text-primary"
      )}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-1/4 -bottom-1 h-[2px] rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover/link:opacity-100",
          isActive && "opacity-100"
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      
      
      <div className="border-b border-muted/30 bg-background/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center px-4 sm:h-24 sm:px-6">
        <Link
          href="/"
          className="mr-auto mr-10 flex items-center gap-3"
          aria-label="Everyday Resilience home"
        >
          <span className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/logo.jpeg"
              alt="Everyday Resilience logo"
              fill
              priority
              sizes="48px"
            />
          </span>
          <div className="leading-tight sm:flex sm:flex-col">
            <span className="font-heading text-md font-semibold text-foreground">
              EVERYDAY 
            </span>
            <span className="font-heading text-md font-semibold text-foreground">
              RESILIENCE
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          <nav className="flex items-center gap-1 xl:gap-3">
            {siteNavigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </nav>

          <div className="ml-3 flex items-center gap-2 xl:ml-5 xl:gap-3">
            {desktopCtas.map((cta) => (
              <Button
                key={cta.href}
                asChild
                size="sm"
                className={cn(
                  "rounded-full px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] shadow-sm transition-transform hover:-translate-y-0.5 xl:px-5 xl:text-[0.7rem]",
                  cta.className
                )}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <div className="flex items-center justify-end lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="inline-flex text-black"
                  aria-label="Open navigation menu"
                >
                  {open ? (
                    <X className="h-5 w-5 text-black" aria-hidden />
                  ) : (
                    <Menu className="h-5 w-5 text-black" aria-hidden />
                  )}
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] bg-background/95 backdrop-blur">
              <SheetHeader className="items-start border-b pb-4">
                <SheetTitle className="flex items-center gap-3 text-left">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                    <Image src="/logo.jpeg" alt="Everyday Resilience logo" fill sizes="40px" />
                  </span>
                  <span className="font-heading text-lg text-foreground">EVERYDAY RESILIENCE</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-4">
                {siteNavigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border border-transparent px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
                        pathname === item.href && "border-primary/40 bg-primary/10 text-primary"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                {desktopCtas.map((cta) => (
                  <SheetClose asChild key={cta.href}>
                    <Link
                      href={cta.href}
                      className={cn(
                        "flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm",
                        cta.className
                      )}
                    >
                      {cta.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

