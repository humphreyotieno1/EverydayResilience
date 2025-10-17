import type { Attachment } from "nodemailer/lib/mailer";

import { contactDetails } from "@/content/site";
import { FROM_EMAIL, FROM_NAME, transporter } from "@/lib/email/mailer";
import {
  LOGO_CID,
  formatParagraph,
  formatSecondaryText,
  renderDetailsText,
  renderEmailLayout,
  renderTextLayout,
} from "@/lib/email/templates";

type NewsletterEmailOptions = {
  email: string;
  source: "resources" | "footer";
};

const logoAttachment: Attachment = {
  filename: "logo.png",
  path: `${process.cwd()}/public/logo.jpeg`,
  cid: LOGO_CID,
};

function sourceLabel(source: "resources" | "footer"): string {
  return source === "resources" ? "Resources page" : "Site footer";
}

export async function sendNewsletterConfirmation({ email, source }: NewsletterEmailOptions) {
  const previewText = "Thanks for joining the Everyday Resilience newsletter.";

  const orgHtml = [
    formatParagraph("A new person has joined the resilience newsletter."),
    formatSecondaryText(`Subscriber email: <a href="mailto:${email}" style="color:#134e42;text-decoration:none;">${email}</a>`),
    formatSecondaryText(`Source: ${sourceLabel(source)}`),
  ].join("");

  const orgText = renderTextLayout({
    heading: "New newsletter subscriber",
    previewText,
    contentLines: renderDetailsText([
      { label: "Subscriber email", value: email },
      { label: "Source", value: sourceLabel(source) },
    ]),
  });

  await transporter.sendMail({
    to: contactDetails.email,
    from: {
      name: FROM_NAME,
      address: FROM_EMAIL,
    },
    replyTo: email,
    subject: `New newsletter subscriber – ${email}`,
    html: renderEmailLayout({
      heading: "New newsletter subscriber",
      previewText,
      contentHtml: orgHtml,
    }),
    text: orgText,
    attachments: [logoAttachment],
  });

  const userHtml = [
    formatParagraph("Thanks for subscribing to Everyday Resilience Counselling updates."),
    formatParagraph(
      "Expect one email each month with grounding practices, counselling insights, and invitations to upcoming workshops."
    ),
    formatSecondaryText("You can unsubscribe at any time using the link in our emails."),
  ].join("");

  const userText = renderTextLayout({
    heading: "You’re subscribed to Everyday Resilience",
    previewText,
    contentLines: [
      "Thanks for subscribing to Everyday Resilience Counselling updates.",
      "Expect one email each month with grounding practices, counselling insights, and invitations to upcoming workshops.",
      "You can unsubscribe at any time using the link in our emails.",
    ],
    footerLines: ["You received this email because you opted in on our website."],
  });

  await transporter.sendMail({
    to: email,
    from: {
      name: FROM_NAME,
      address: FROM_EMAIL,
    },
    subject: "You’re subscribed to Everyday Resilience",
    html: renderEmailLayout({
      heading: "Welcome to Everyday Resilience",
      previewText,
      contentHtml: `${userHtml}${formatSecondaryText(
        "If this wasn’t you, reply to let us know and we’ll remove your email."
      )}`,
      footerNote: "You received this email because you opted in on our website.",
    }),
    text: userText,
    attachments: [logoAttachment],
  });
}

