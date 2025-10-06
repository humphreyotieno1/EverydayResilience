# Everyday Resilience Counselling Website

A modern marketing presence for Everyday Resilience Counselling, built with Next.js App Router, Tailwind CSS, and shadcn/ui. The experience reflects the organisation’s calming brand—supporting service discovery, lead generation, and partnership outreach.

## Tech Stack

- Next.js (App Router)
- Bun package manager
- Tailwind CSS (v4)
- shadcn/ui component system
- Zustand for lightweight state management
- React Hook Form + Zod for form flows
- Framer Motion for subtle animations

## Local Development

```bash
bun install
bun run dev
```

The app runs at `http://localhost:3000`. Update typography, colours, and layout primitives in `app/globals.css`, `lib/fonts.ts`, and the shared components under `components/`.

## Project Structure

```
app/
  layout.tsx         # Global layout with header & footer
  page.tsx           # Home screen composition
components/
  layout/            # Header, footer, navigation
  sections/          # Homepage sections (hero, services, impact, CTA)
  shared/            # Reusable building blocks
  ui/                # shadcn/ui primitives
lib/
  fonts.ts           # Google font registrations
  utils.ts           # Tailwind class helpers
public/
  logo.svg           # Brand mark (temp vector)
```

## Design Tokens & Styling

- Base palette configured in `app/globals.css` using CSS custom properties
- `Inter` (body) and `Playfair Display` (headings) registered in `lib/fonts.ts`
- shadcn components respect Tailwind tokens declared in `components.json`

## Linting & Formatting

```bash
bun run lint   # ESLint (Next.js + TypeScript rules)
```

Prettier with the Tailwind plugin keeps class ordering consistent.

## Next Steps

- Flesh out dynamic pages (Services, About, Resources, Partnerships, Contact)
- Connect forms to email/CRM provider (e.g., Resend, Formspree, or custom API)
- Source brand photography and finalise typographic rhythm
- Add CMS or MDX content pipeline once copy is ready
