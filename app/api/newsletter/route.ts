import { NextResponse } from "next/server";
import { z } from "zod";

import { sendNewsletterConfirmation } from "@/lib/email/newsletter";
import { newsletterSchema } from "@/lib/validation/newsletter";

const newsletterRequestSchema = newsletterSchema.extend({
  source: z.enum(["resources", "footer"]).default("resources"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterRequestSchema.parse(body);

    await sendNewsletterConfirmation(parsed);

    return NextResponse.json({
      message: "Thanks for subscribing! Look out for a welcome email in the next few minutes.",
    });
  } catch (error) {
    console.error("Newsletter subscription error", error);
    return NextResponse.json(
      { error: "We couldn’t process your subscription. Try again or reach out to us." },
      { status: 400 }
    );
  }
}

