import { z } from "zod";

export const addBusinessFormSchema = z.object({
  title: z.string().min(3).max(75),
  category: z.any(),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(500, {
      message: "Description must not be longer than 200 characters.",
    }),
});

export const bizMainImgFormSchema = z.object({
  id: z.string(),
  main: z.any(),
});

export const bizBlogSchema = z.object({
  id: z.string(),
  blog: z.string(),
});
