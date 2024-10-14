import { z } from "zod";

export const botMessageSchema = z.object({
  message: z.string().min(1).max(10000),
});
