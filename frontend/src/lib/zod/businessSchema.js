import { z } from "zod";

export const addBusinessFormSchema = z.object({
  title: z.string().min(3).max(75),
  category: z.any(),
  description: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(200, {
      message: "Bio must not be longer than 30 characters.",
    }),
});
