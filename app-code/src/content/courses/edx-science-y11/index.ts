import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxScienceY11: Course = {
  id: "edx-science-y11",
  title: "Year 11 Combined Science",
  shortTitle: "Combined Science Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE (4SC0)",
  description:
    "IGCSE Combined Science second year covering advanced Biology, Chemistry and Physics: coordination and response, reproduction, inheritance and ecology, microorganisms and biotechnology, quantitative chemistry and organic chemistry, rates and enzymes, power and circuits, electromagnetism, nuclear physics and space, waves and pressure.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "science", year: 11 },
};
