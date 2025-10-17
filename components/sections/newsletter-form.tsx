"use client";

import { useId, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { NewsletterFormValues, newsletterSchema } from "@/lib/validation/newsletter";

type NewsletterFormProps = {
  className?: string;
  source: "resources" | "footer";
  variant?: "dark" | "light";
};

export function NewsletterForm({ className, source, variant = "light" }: NewsletterFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    reset,
    watch,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    mode: "onChange",
  });

  const emailValue = watch("email");
  const tooltipId = useId();

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      setStatus("idle");
      setMessage(null);

      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, source }),
        });

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        const result = (await response.json()) as { message?: string };
        setStatus("success");
        setMessage(result.message ?? "Thanks for subscribing! Look out for a welcome email in the next few minutes.");
        trackEvent("newsletter_signup", {
          source,
        });
        reset();
      } catch (error) {
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "We couldn’t process your subscription. Try again or reach out to us.");
      }
    });
  });

  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={300}>
      <form
        onSubmit={onSubmit}
        className={cn("space-y-3", className)}
        aria-describedby={message ? `${tooltipId}-status` : undefined}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor={`${tooltipId}-email`} className={variant === "dark" ? "text-xs font-semibold uppercase tracking-[0.2em] text-white/80" : "text-sm text-muted-foreground"}>
              Email address
            </Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label="Newsletter tips"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs opacity-80 transition hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Info className="h-3.5 w-3.5" aria-hidden />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" align="end">
                We’ll send one monthly email with new resources. Unsubscribe anytime.
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id={`${tooltipId}-email`}
            type="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${tooltipId}-error` : undefined}
            autoComplete="email"
            disabled={isPending}
            className={cn("text-sm", variant === "dark" ? "border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white" : "text-muted-foreground")}
            {...register("email")}
          />
          {errors.email && (touchedFields.email || emailValue) ? (
            <p id={`${tooltipId}-error`} className="text-sm text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <Button
          type="submit"
          disabled={isPending || !isValid}
          className={cn(
            "w-full rounded-full text-xs font-semibold uppercase tracking-[0.2em]",
            variant === "dark" ? "bg-white text-slate-900 hover:bg-white/90" : undefined
          )}
          aria-live="polite"
          aria-busy={isPending}
        >
          {isPending ? "Subscribing…" : "Subscribe"}
        </Button>

        {message ? (
          <div
            id={`${tooltipId}-status`}
            className={cn(
              "rounded-xl border px-3 py-2 text-sm",
              status === "success"
                ? variant === "dark"
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-destructive/50 bg-destructive/10 text-destructive"
            )}
            role={status === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {message}
          </div>
        ) : null}

        <p
          className={cn("text-xs leading-relaxed", variant === "dark" ? "text-white/70" : "text-muted-foreground")}
        >
          We respect your privacy. Read our <a href="/privacy" className="underline underline-offset-4">Privacy Policy</a> for how we protect your information.
        </p>
      </form>
    </TooltipProvider>
  );
}

