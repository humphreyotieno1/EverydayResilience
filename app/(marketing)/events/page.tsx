import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Upcoming Events | Everyday Resilience Counselling Kenya",
  description:
    "Join our upcoming workshops, training sessions, and community events focused on mental health, trauma-informed care, and building resilience across Kenya.",
  openGraph: {
    title: "Upcoming Events | Everyday Resilience Counselling Kenya",
    description:
      "Discover our upcoming workshops, training sessions, and community events focused on mental health and resilience building.",
  },
};

export default function EventsPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background1.jpg')] bg-cover bg-center opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/30" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Events</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Coming soon</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Upcoming workshops and community events
            </h1>
            <p className="text-base text-white/80">
              We&apos;re preparing exciting workshops, training sessions, and community events focused on mental health, trauma-informed care, and building resilience. Stay tuned for announcements about our upcoming programs.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-8 h-32 w-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10" />
            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl mb-4">
            Events Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We&apos;re working hard to bring you valuable workshops and community events. 
            Check back soon for updates on our upcoming programs.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            <Card className="border-muted/30 bg-background shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Community Workshops</CardTitle>
                </div>
                <CardDescription>
                  Trauma-informed care workshops for caregivers, teachers, and community leaders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-muted/30 bg-background shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Training Sessions</CardTitle>
                </div>
                <CardDescription>
                  Professional development sessions for mental health practitioners and organizations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-muted/30 bg-background shadow-sm sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Community Events</CardTitle>
                </div>
                <CardDescription>
                  Public awareness events and mental health advocacy programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Stay Updated
            </h3>
            <p className="text-base text-muted-foreground">
              Be the first to know about our upcoming events. Follow us on social media or contact us to join our mailing list.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild className="rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow hover:bg-primary/90">
                <Link href="/contact">Get Notified</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-muted/30 bg-muted/20 p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Interested in hosting an event?
              </h2>
              <p className="text-base text-muted-foreground">
                We partner with organizations, schools, churches, and community groups to deliver tailored workshops and training programs. Let&apos;s discuss how we can support your community&apos;s mental health needs.
              </p>
              <Button asChild className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 shadow">
                <Link href="/partnerships">Explore Partnerships</Link>
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-muted/30">
              <Image
                src="/background2.jpg"
                alt="Community workshop in progress"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-2 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Community Impact</p>
                <p className="font-heading text-lg">Building resilience through education and support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
