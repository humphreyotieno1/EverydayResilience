import Image from "next/image";
import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactDetails, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Everyday Resilience",
  description:
    "Reach out to schedule counselling, request workshops, or discuss partnership opportunities with Everyday Resilience Counselling.",
};

const inquiryTypes = [
  { label: "Counselling", description: "Book an individual, family, or group session with our counsellors." },
  { label: "Training", description: "Request a workshop, debrief, or wellbeing programme for your team." },
  { label: "Partnership", description: "Explore collaboration, sponsorship, or content co-creation." },
];

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" aria-hidden />
        <div className="container relative z-10 mx-auto space-y-8 px-4">
          <Breadcrumb>
            <BreadcrumbList className="text-white/70">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">We’d love to hear from you</p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Start a counselling conversation or partner with our team
            </h1>
            <p className="text-base text-white/80">
              Complete the form to book a session, request a workshop, or explore collaboration. Our coordination team responds within 24 hours (Monday–Saturday).
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">WhatsApp & phone</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Virtual & in-person</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Confidential</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-16 px-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {inquiryTypes.map((item) => (
            <Card key={item.label} className="border-muted/30 bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{item.label}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-muted/40 bg-background shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground">Send us a message</CardTitle>
              <CardDescription>Share a few details so we can match you with the right counsellor or facilitator.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-muted/40 bg-muted/20 shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Email: {contactDetails.email}</p>
                <p>Phone (Kenya): {contactDetails.phoneKe}</p>
                <p>Phone (USA): {contactDetails.phoneUs}</p>
                <p>Location: {contactDetails.location}</p>
                <p>Hours: {contactDetails.officeHours}</p>
                <p>Mail: {contactDetails.mailingAddress}</p>
              </CardContent>
            </Card>
            <Card className="border-muted/40 bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">Connect with us online</CardTitle>
                <CardDescription>Follow Everyday Resilience for wellbeing tips, workshop announcements, and stories of hope.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {socialLinks.map((link) => (
                  <p key={link.href}>
                    <a className="font-semibold text-primary transition-colors hover:text-primary/80" href={link.href}>
                      {link.label}
                    </a>
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-muted/40 bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">Visit our Nairobi office</CardTitle>
                <CardDescription>Sessions by appointment only. Secure parking available on-site.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-muted/30">
                  <Image src="/map-placeholder.jpg" alt="Nairobi office map" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Everyday Resilience Counselling, Thika Road Mall, Nairobi, Kenya. We also offer virtual sessions across East Africa and internationally.
                </p>
                <Button asChild variant="outline" className="w-full rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto rounded-3xl border border-muted/30 bg-background p-8 shadow-sm">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground">How soon will we reply?</h2>
          <p className="text-base text-muted-foreground">
            You’ll receive an acknowledgement immediately and a tailored response within one business day. Urgent requests are prioritised, and a counsellor-on-call is available for partner organisations.
          </p>
          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            <Card className="border-muted/30 bg-muted/20 shadow-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base text-foreground">Response window</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Weekdays 8am–7pm EAT, Saturdays 9am–3pm.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-muted/30 bg-muted/20 shadow-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base text-foreground">Emergency support</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">For immediate crisis support, call {contactDetails.phoneKe} or your local emergency line.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-muted/30 bg-muted/20 shadow-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base text-foreground">Accessibility</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">We offer sessions in English, Kiswahili, and with translators upon request.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

