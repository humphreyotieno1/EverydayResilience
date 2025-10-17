import { NextResponse } from "next/server";

import { sendContactEmails } from "@/lib/email/contact";
import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);

    await sendContactEmails({
      ...parsed,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Thanks for reaching out! Expect a follow-up within one business day.",
    });
  } catch (error) {
    console.error("Contact form submission error", error);
    return NextResponse.json(
      { error: "We couldn’t send your message. Please try again or contact us directly." },
      { status: 400 }
    );
  }
}

