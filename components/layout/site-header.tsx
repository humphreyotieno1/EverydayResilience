"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { siteNavigation } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-muted/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
            <Image
              src="/logo.svg"
              alt="Everyday Resilience logo"
              fill
              priority
              sizes="48px"
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-semibold text-foreground">
              Everyday Resilience
            </span>
            <span className="text-sm text-muted-foreground">Counselling</span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {siteNavigation.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild size="sm" variant="default" className="rounded-full">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-transform",
                  isMenuOpen && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-foreground transition-transform",
                  isMenuOpen && "-translate-y-1.5 -rotate-45"
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-muted/40 bg-background md:hidden">
          <div className="container mx-auto space-y-2 px-4 py-6">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Book a Session
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

