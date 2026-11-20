import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypSocialStudies: Course = {
  id: "pyp-social-studies",
  title: "PYP Social Studies",
  shortTitle: "PYP Social Studies",
  grade: "PYP",
  framework: "IB Primary Years Programme — Social Studies",
  description: "An inquiry into people and their identities, communities and cultures, places and environments, and past-present-future change across ages 3-12.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "social-studies" },
};
