import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Use a valid email address, like name@example.com." }),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

