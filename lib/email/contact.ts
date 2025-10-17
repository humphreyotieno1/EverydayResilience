import type { Attachment } from "nodemailer/lib/mailer";

import { contactDetails } from "@/content/site";
import { FROM_EMAIL, FROM_NAME, transporter } from "@/lib/email/mailer";
import {
  LOGO_CID,
  formatMultilineHtml,
  formatParagraph,
  formatSecondaryText,
  renderDetailsTable,
  renderDetailsText,
  renderEmailLayout,
  renderTextLayout,
} from "@/lib/email/templates";
import type { ContactFormValues } from "@/lib/validation/contact";

const logoAttachment: Attachment = {
  filename: "logo.png",
  path: `${process.cwd()}/public/logo.jpeg`,
  cid: LOGO_CID,
};

const topicLabels: Record<ContactFormValues["topic"], string> = {
  "book-session": "Book a counselling session",
  workshop: "Request a workshop or training",
  partnership: "Explore partnership / sponsorship",
  other: "Other inquiry",
};

export type ContactEmailPayload = ContactFormValues & {
  submittedAt: string;
};

export async function sendContactEmails(payload: ContactEmailPayload) {
  const previewText = `${payload.name} submitted a ${topicLabels[payload.topic]} inquiry.`;

  const orgHtml = [
    formatParagraph("A new contact request has been submitted on the website."),
    renderDetailsTable([
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Organisation", value: payload.organisation },
      { label: "Inquiry type", value: topicLabels[payload.topic] },
      { label: "Submitted", value: payload.submittedAt },
    ]),
    formatParagraph("Message"),
    `<div style="padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;color:#0f172a;font-size:15px;line-height:1.7;">${formatMultilineHtml(payload.message)}</div>`,
  ].join("");

  const orgText = renderTextLayout({
    heading: "New contact request",
    previewText,
    contentLines: [
      ...renderDetailsText([
        { label: "Name", value: payload.name },
        { label: "Email", value: payload.email },
        { label: "Phone", value: payload.phone },
        { label: "Organisation", value: payload.organisation },
        { label: "Inquiry type", value: topicLabels[payload.topic] },
        { label: "Submitted", value: payload.submittedAt },
      ]),
      "",
      "Message:",
      payload.message,
    ],
  });

  await transporter.sendMail({
    to: contactDetails.email,
    from: {
      name: FROM_NAME,
      address: FROM_EMAIL,
    },
    replyTo: payload.email,
    subject: `New contact request: ${topicLabels[payload.topic]} – ${payload.name}`,
    html: renderEmailLayout({
      heading: "New contact request",
      previewText,
      contentHtml: orgHtml,
    }),
    text: orgText,
    attachments: [logoAttachment],
  });

  const userHtml = [
    formatParagraph(`Hi ${payload.name.split(" ")[0]},`),
    formatParagraph(
      "Thanks for reaching out to Everyday Resilience Counselling. Our coordination team will review your message and respond within one business day (Monday–Saturday)."
    ),
    formatParagraph(
      "If you have additional information to share in the meantime, reply directly to this email and it will reach our team."
    ),
    formatSecondaryText("For urgent requests, call or WhatsApp us at +254 712 302 318."),
  ].join("");

  const userText = renderTextLayout({
    heading: "Thanks for contacting Everyday Resilience",
    previewText: "We’ll reply within one business day.",
    contentLines: [
      `Hi ${payload.name.split(" ")[0]},`,
      "Thanks for reaching out to Everyday Resilience Counselling.",
      "Our coordination team will review your message and respond within one business day (Monday–Saturday).",
      "If you have additional information to share in the meantime, reply directly to this email and it will reach our team.",
      "",
      "For urgent requests, call or WhatsApp us at +254 712 302 318.",
    ],
    footerLines: ["You’re receiving this email because you contacted us via everydayresiliencecounsellingkenya.org."],
  });

  await transporter.sendMail({
    to: payload.email,
    from: {
      name: FROM_NAME,
      address: FROM_EMAIL,
    },
    subject: "Thanks for contacting Everyday Resilience",
    html: renderEmailLayout({
      heading: "We’ve received your message",
      previewText: "We’ll reply within one business day.",
      contentHtml: `${userHtml}${formatSecondaryText(
        "This automated acknowledgement ensures your message reached us successfully."
      )}`,
      footerNote: "You’re receiving this email because you contacted us via everydayresiliencecounsellingkenya.org.",
    }),
    text: userText,
    attachments: [logoAttachment],
  });
}

