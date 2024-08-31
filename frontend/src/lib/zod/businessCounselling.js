import { z } from "zod";

export const businessCounsellingSchema = z.object({
  environment: z.coerce.number().int().min(1).max(10, {
    required_error: "You need to select an environment.",
  }),
  investment: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select an investment range.",
  }),
  time: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select the time you can dedicate.",
  }),
  managing_level: z.coerce.number().int().min(1).max(4, {
    required_error:
      "You need to select your skill level in managing a business.",
  }),
  risk_tolerance: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select your risk tolerance.",
  }),
  interest: z.coerce.number().int().min(1).max(10, {
    required_error: "You need to select your area of interest.",
  }),
  prefer_working: z.coerce.number().int().min(1).max(3, {
    required_error:
      "You need to select your preference for working alone or with a team.",
  }),
  work_life_balance: z.coerce.number().int().min(1).max(3, {
    required_error:
      "You need to select the work-life balance you are looking for.",
  }),
  market: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select the market you are targeting.",
  }),
  business_start: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select when you want to start your business.",
  }),
  education: z.coerce.number().int().min(1).max(6, {
    required_error: "You need to select your highest level of education.",
  }),
  location: z.coerce.number().int().min(1).max(4, {
    required_error: "You need to select your location.",
  }),
});
