import { contactDetails, socialLinks } from "@/content/site";

const baseFont = "'Inter', 'Segoe UI', Helvetica, Arial, sans-serif";

export const LOGO_CID = "erc-logo";

type DetailRow = {
  label: string;
  value?: string | null;
};

export type EmailTemplateParams = {
  heading: string;
  previewText?: string;
  contentHtml: string;
  footerNote?: string;
};

export type TextTemplateParams = {
  heading: string;
  previewText?: string;
  contentLines: string[];
  footerLines?: string[];
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function formatParagraph(text: string): string {
  return `<p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#1f2933;">${text}</p>`;
}

export function formatSecondaryText(text: string): string {
  return `<p style="margin:16px 0 0 0;font-size:14px;line-height:1.6;color:#4b5563;">${text}</p>`;
}

export function formatMultilineHtml(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export function renderDetailsTable(rows: DetailRow[]): string {
  const visibleRows = rows.filter((row) => Boolean(row.value));
  if (visibleRows.length === 0) {
    return "";
  }

  const cells = visibleRows
    .map(
      (row) =>
        `<tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;color:#111827;font-size:14px;width:40%;">${escapeHtml(row.label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#1f2933;font-size:14px;">${escapeHtml(row.value ?? "")}</td>
        </tr>`
    )
    .join("");

  return `<table role="presentation" style="border-collapse:collapse;margin:16px 0 24px 0;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">${cells}</table>`;
}

export function renderBulletedList(items: string[]): string {
  if (!items.length) return "";
  const listItems = items
    .map((item) => `<li style="margin:0 0 8px 0;padding:0;font-size:14px;line-height:1.6;color:#374151;">${item}</li>`)
    .join("");

  return `<ul style="margin:0 0 16px 20px;padding:0;">${listItems}</ul>`;
}

export function renderEmailLayout({ heading, previewText, contentHtml, footerNote }: EmailTemplateParams): string {
  const previewSnippet = previewText
    ? `<div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(previewText)}</div>`
    : "";

  const footerHtml = `
    <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">Email: <a href="mailto:${contactDetails.email}" style="color:#134e42;text-decoration:none;">${contactDetails.email}</a></p>
    <p style="margin:4px 0 0 0;font-size:12px;line-height:1.6;color:#6b7280;">Phone: ${contactDetails.phoneKe}</p>
    <p style="margin:4px 0 0 0;font-size:12px;line-height:1.6;color:#6b7280;">${contactDetails.location}</p>
    <p style="margin:4px 0 0 0;font-size:12px;line-height:1.6;color:#6b7280;">${contactDetails.officeHours}</p>
    ${footerNote ? `<p style="margin:12px 0 0 0;font-size:12px;line-height:1.6;color:#6b7280;">${footerNote}</p>` : ""}
    ${socialLinks
      .map(
        (link) =>
          `<a href="${link.href}" style="display:inline-block;margin:12px 8px 0 8px;font-size:12px;color:#134e42;text-decoration:none;">${link.label}</a>`
      )
      .join("")}
  `;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:${baseFont};">
    ${previewSnippet}
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f3f4f6;padding:24px 0;">
      <tr>
        <td align="center" style="padding:0 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;">
            <tr>
              <td style="text-align:center;padding-bottom:24px;">
                <img src="cid:${LOGO_CID}" alt="Everyday Resilience Counselling" style="height:72px;" />
              </td>
            </tr>
            <tr>
              <td style="background-color:#ffffff;border-radius:24px;padding:32px 32px 36px 32px;box-shadow:0 16px 40px rgba(15, 23, 42, 0.08);">
                <h1 style="margin:0 0 16px 0;font-size:24px;line-height:1.4;color:#0f172a;font-weight:700;">${escapeHtml(heading)}</h1>
                ${contentHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 0 0 0;text-align:center;">
                ${footerHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderTextLayout({ heading, previewText, contentLines, footerLines }: TextTemplateParams): string {
  const lines = [heading];
  if (previewText) {
    lines.push(previewText);
  }
  lines.push("", ...contentLines, "");

  const footer = [
    `Email: ${contactDetails.email}`,
    `Phone: ${contactDetails.phoneKe}`,
    `${contactDetails.location}`,
    `${contactDetails.officeHours}`,
  ];

  if (footerLines?.length) {
    footer.push("", ...footerLines);
  }

  return [...lines, ...footer].join("\n");
}

export function renderDetailsText(rows: DetailRow[]): string[] {
  return rows
    .filter((row) => Boolean(row.value))
    .map((row) => `${row.label}: ${row.value ?? ""}`);
}

