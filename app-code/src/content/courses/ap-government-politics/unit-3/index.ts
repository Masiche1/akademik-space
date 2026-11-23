import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "apgov-u3",
  code: "3",
  title: "Political Institutions and Policy",
  description: "Congress, presidency, bureaucracy, and policymaking processes.",
  lessons: [lesson31, lesson32],
};
