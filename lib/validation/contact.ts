import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter at least 2 characters." })
    .max(120, { message: "Names must be 120 characters or fewer." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." })
    .max(160, { message: "Email addresses must be 160 characters or fewer." }),
  phone: z
    .string()
    .trim()
    .max(40, { message: "Phone numbers must be shorter than 40 characters." })
    .optional(),
  organisation: z
    .string()
    .trim()
    .max(120, { message: "Organisation names must be shorter than 120 characters." })
    .optional(),
  topic: z
    .enum(["book-session", "workshop", "partnership", "other"], {
      message: "Select an inquiry type.",
    })
    .default("book-session"),
  message: z
    .string()
    .trim()
    .min(10, { message: "Tell us a little more so we can assist you." })
    .max(1000, { message: "Messages must be 1,000 characters or fewer." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

