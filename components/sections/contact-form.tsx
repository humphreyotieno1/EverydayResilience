"use client";

import { useMemo, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter at least 2 characters." })
    .max(120),
  email: z.string().email({ message: "Please provide a valid email address." }),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  topic: z.enum([
    "book-session",
    "workshop",
    "partnership",
    "other",
  ]),
  message: z
    .string()
    .min(10, { message: "Tell us a little more so we can assist you." })
    .max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topic: "book-session",
    },
  });

  const topicOptions = useMemo(() => (
    [
      { value: "book-session", label: "Book a counselling session" },
      { value: "workshop", label: "Request a workshop or training" },
      { value: "partnership", label: "Explore partnership / sponsorship" },
      { value: "other", label: "Other inquiry" },
    ] satisfies { value: ContactFormValues["topic"]; label: string }[]
  ), []);

  const onSubmit = handleSubmit(() => {
    startTransition(async () => {
      // Placeholder submission logic; replace with server action or API call.
      await new Promise((resolve) => setTimeout(resolve, 600));
      toast.success("Thanks for reaching out! We will respond within 24 hours.");
      reset({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        topic: "book-session",
        message: "",
      });
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-muted-foreground">Name</Label>
          <Input
            id="name"
            placeholder="Your full name"
            className="text-sm text-muted-foreground"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="text-sm text-muted-foreground"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 text-sm text-muted-foreground">
          <Label htmlFor="phone" className="text-sm text-muted-foreground">Phone (optional)</Label>
          <Input
            id="phone"
            placeholder="WhatsApp or phone number"
            className="text-sm text-muted-foreground"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Label htmlFor="organisation" className="text-sm text-muted-foreground">Organisation (optional)</Label>
          <Input
            id="organisation"
            placeholder="School, church, NGO, etc."
            className="text-sm text-muted-foreground"
            aria-invalid={Boolean(errors.organisation)}
            {...register("organisation")}
          />
          {errors.organisation ? (
            <p className="text-sm text-destructive">{errors.organisation.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic" className="text-sm text-muted-foreground">Inquiry type</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {topicOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-muted/40 bg-muted/20 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <input
                type="radio"
                value={option.value}
                className="h-4 w-4"
                {...register("topic")}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {errors.topic ? (
          <p className="text-sm text-destructive">{errors.topic.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-muted-foreground">How can we support you?</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Share a brief overview of your needs, preferred schedule, or any questions."
          className="text-sm text-muted-foreground"
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          By submitting this form you consent to us contacting you regarding your inquiry. Read our privacy policy for details.
        </p>
        <Button type="submit" disabled={isPending} className="rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
          {isPending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

