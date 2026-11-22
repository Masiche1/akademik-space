import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxScienceY10: Course = {
  id: "edx-science-y10",
  title: "Year 10 Combined Science",
  shortTitle: "Combined Science Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE (4SC0)",
  description:
    "IGCSE Combined Science covering Biology, Chemistry and Physics: cell biology, biological molecules and enzymes, photosynthesis and respiration, atomic structure and bonding, chemical reactions and rates, acids and metals, reversible reactions, motion and energy, light and electricity, radioactivity, pressure and moments.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "science", year: 10 },
};
