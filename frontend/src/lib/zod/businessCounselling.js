import { z } from "zod";

export const businessCounsellingSchema = z.object({
  environment: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "You need to select an environment.",
  }),
  investment: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select an investment range.",
  }),
  time: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select the time you can dedicate.",
  }),
  managing_level: z.enum(["1", "2", "3", "4"], {
    required_error:
      "You need to select your skill level in managing a business.",
  }),
  risk_tolerance: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select your risk tolerance.",
  }),
  interest: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], {
    required_error: "You need to select your area of interest.",
  }),
  prefer_working: z.enum(["1", "2", "3"], {
    required_error:
      "You need to select your preference for working alone or with a team.",
  }),
  work_life_balance: z.enum(["1", "2", "3"], {
    required_error:
      "You need to select the work-life balance you are looking for.",
  }),
  market: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select the market you are targeting.",
  }),
  business_start: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select when you want to start your business.",
  }),
  education: z.enum(["1", "2", "3", "4", "5", "6"], {
    required_error: "You need to select your highest level of education.",
  }),
  location: z.enum(["1", "2", "3", "4"], {
    required_error: "You need to select your location.",
  }),
});
