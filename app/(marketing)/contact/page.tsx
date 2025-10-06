import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactDetails, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Everyday Resilience",
  description:
    "Reach out to schedule counselling, request workshops, or discuss partnership opportunities with Everyday Resilience Counselling.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-16">
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary">We’d love to hear from you</p>
          <h1 className="font-heading text-4xl font-semibold text-foreground">
            Start a counselling conversation or partner with our team
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
            Complete the form to book a session, request a workshop, or explore collaboration. Our coordination team responds within 24 hours (Monday–Saturday).
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-muted/40 bg-background shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-foreground">
              Send us a message
            </CardTitle>
            <CardDescription>
              Share a few details so we can match you with the right counsellor or facilitator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-muted/40 bg-muted/20 shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground">
                Contact details
              </CardTitle>
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
              <CardTitle className="font-heading text-xl text-foreground">
                Connect with us online
              </CardTitle>
              <CardDescription>
                Follow Everyday Resilience for wellbeing tips, workshop announcements, and stories of hope.
              </CardDescription>
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
        </div>
      </div>
    </div>
  );
}

