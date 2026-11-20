import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypPspe: Course = {
  id: "pyp-pspe",
  title: "PYP PSPE",
  shortTitle: "PYP PSPE",
  grade: "PYP",
  framework: "IB Primary Years Programme — PSPE",
  description: "An inquiry into personal wellbeing, relationships and intercultural understanding, healthy living, physical activity, safety and learning to learn across ages 3-12.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "pspe" },
};
