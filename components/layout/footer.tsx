import Link from "next/link";

import { contactDetails, siteNavigation } from "@/content/site";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerSocials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-800 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-slate-900/90 to-slate-950" aria-hidden />
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
              Everyday Resilience Counselling
            </p>
            <h3 className="font-heading text-lg font-semibold text-white">Healing, education, community</h3>
          </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              Trauma-informed counselling, caregiver coaching, and community programmes that foster everyday resilience across Kenya and beyond.
            </p>
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Explore</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors hover:text-primary" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Connect</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: {contactDetails.email}</li>
              <li>Phone (KE): {contactDetails.phoneKe}</li>
              <li>{contactDetails.location}</li>
              <li>{contactDetails.officeHours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-800 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Everyday Resilience Counselling. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-white" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-white" href="/terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

