import { z } from "zod";

export const addCategoryFormSchema = z.object({
  category: z.string().min(3).max(64),
});

export const editCategoryFormSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(3).max(64),
});
