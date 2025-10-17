"use client";

import { useId, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ContactFormValues, contactSchema } from "@/lib/validation/contact";

const topicOptions = [
  { value: "book-session", label: "Book a counselling session" },
  { value: "workshop", label: "Request a workshop or training" },
  { value: "partnership", label: "Explore partnership / sponsorship" },
  { value: "other", label: "Other inquiry" },
] satisfies { value: ContactFormValues["topic"]; label: string }[];

const defaultContactValues = {
  topic: "book-session",
} as const satisfies Partial<ContactFormValues>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusLevel, setStatusLevel] = useState<"success" | "error" | "info">("info");
  const tooltipId = useId();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) as Resolver<ContactFormValues>,
    defaultValues: defaultContactValues,
    mode: "onChange",
    criteriaMode: "all",
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const phoneValue = watch("phone");
  const organisationValue = watch("organisation");
  const messageValue = watch("message");

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      setStatusLevel("info");
      setStatusMessage(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("We couldn’t send your message. Please try again.");
        }

        const result = (await response.json()) as { message?: string };
        toast.success(result.message ?? "Thanks for reaching out! We’ll reply within one business day.");
        setStatusLevel("success");
        setStatusMessage(
          result.message ?? "Thanks for reaching out! Expect a follow-up from our coordination team within one business day."
        );
        reset({
          name: "",
          email: "",
          phone: "",
          organisation: "",
          topic: "book-session",
          message: "",
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
        toast.error(errorMessage);
        setStatusLevel("error");
        setStatusMessage(errorMessage);
      }
    });
  });

  const renderTooltipTrigger = (label: string, message: string) => (
    <div className="flex items-center justify-between gap-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-muted/40 text-[10px] text-muted-foreground transition hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${label} info`}
          >
            <Info className="h-3.5 w-3.5" aria-hidden />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" align="end">
          {message}
        </TooltipContent>
      </Tooltip>
    </div>
  );

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={300}>
      <form onSubmit={onSubmit} className="space-y-5" aria-describedby={statusMessage ? `${tooltipId}-status` : undefined}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            {renderTooltipTrigger("Name", "Tell us how you’d like us to address you.")}
            <Input
              id="name"
              placeholder="Your full name"
              className="text-sm text-muted-foreground"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${tooltipId}-name-error` : undefined}
              {...register("name")}
            />
            {errors.name && (touchedFields.name || nameValue) ? (
              <p id={`${tooltipId}-name-error`} className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {renderTooltipTrigger("Email", "We’ll contact you at this address—double-check spelling.")}
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="text-sm text-muted-foreground"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${tooltipId}-email-error` : undefined}
              autoComplete="email"
              {...register("email")}
            />
            {errors.email && (touchedFields.email || emailValue) ? (
              <p id={`${tooltipId}-email-error`} className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 text-sm text-muted-foreground">
            {renderTooltipTrigger("Phone (optional)", "Optional. Include if you prefer calls or WhatsApp.")}
            <Input
              id="phone"
              placeholder="WhatsApp or phone number"
              className="text-sm text-muted-foreground"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${tooltipId}-phone-error` : undefined}
              inputMode="tel"
              {...register("phone")}
            />
            {errors.phone && (touchedFields.phone || phoneValue) ? (
              <p id={`${tooltipId}-phone-error`} className="text-sm text-destructive" role="alert">
                {errors.phone.message}
              </p>
            ) : null}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {renderTooltipTrigger("Organisation (optional)", "Optional. Mention your school, church, NGO, etc.")}
            <Input
              id="organisation"
              placeholder="School, church, NGO, etc."
              className="text-sm text-muted-foreground"
              aria-invalid={Boolean(errors.organisation)}
              aria-describedby={errors.organisation ? `${tooltipId}-organisation-error` : undefined}
              {...register("organisation")}
            />
            {errors.organisation && (touchedFields.organisation || organisationValue) ? (
              <p id={`${tooltipId}-organisation-error`} className="text-sm text-destructive" role="alert">
                {errors.organisation.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          {renderTooltipTrigger("Inquiry type", "Choose the option closest to your reason for contacting us.")}
          <div className="grid gap-2 sm:grid-cols-2">
            {topicOptions.map((option) => (
              <label
                key={option.value}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-ring",
                  "border-muted/40 bg-muted/20 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                )}
              >
                <input
                  type="radio"
                  value={option.value}
                  className="h-4 w-4"
                  {...register("topic")}
                  aria-describedby={errors.topic ? `${tooltipId}-topic-error` : undefined}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          {errors.topic ? (
            <p id={`${tooltipId}-topic-error`} className="text-sm text-destructive" role="alert">
              {errors.topic.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          {renderTooltipTrigger("How can we support you?", "Share context so we can connect you with the right support.")}
          <Textarea
            id="message"
            rows={5}
            placeholder="Share a brief overview of your needs, preferred schedule, or any questions."
            className="text-sm text-muted-foreground"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${tooltipId}-message-error` : undefined}
            {...register("message")}
          />
          {errors.message && (touchedFields.message || messageValue) ? (
            <p id={`${tooltipId}-message-error`} className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        {statusMessage ? (
          <div
            id={`${tooltipId}-status`}
            role={statusLevel === "error" ? "alert" : "status"}
            aria-live="polite"
            className={cn(
              "rounded-xl border px-4 py-3 text-sm",
              statusLevel === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : statusLevel === "error"
                  ? "border-destructive/50 bg-destructive/10 text-destructive"
                  : "border-muted/40 bg-muted/20 text-muted-foreground"
            )}
          >
            {statusMessage}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            By submitting this form you consent to us contacting you regarding your inquiry. Read our <a className="underline underline-offset-4" href="/privacy">Privacy Policy</a> for details.
          </p>
          <Button
            type="submit"
            disabled={isPending || !isValid}
            className="rounded-full text-sm font-semibold uppercase tracking-[0.2em]"
            aria-busy={isPending}
          >
            {isPending ? "Sending…" : "Send message"}
          </Button>
        </div>
      </form>
    </TooltipProvider>
  );
}

