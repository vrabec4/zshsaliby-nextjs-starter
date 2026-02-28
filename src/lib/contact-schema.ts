import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Meno musi mat aspon 2 znaky."),
  email: z.email("Zadajte platny email."),
  message: z.string().min(20, "Sprava musi mat aspon 20 znakov."),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
