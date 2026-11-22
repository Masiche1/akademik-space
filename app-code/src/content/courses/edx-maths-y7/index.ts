import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxMathsY7: Course = {
  id: "edx-maths-y7",
  title: "Year 7 Maths",
  shortTitle: "Maths Y7",
  grade: "Year 7",
  framework: "Pearson Edexcel Lower Secondary (Key Stage 3)",
  description:
    "Bridge year between primary and Key Stage 3: integers and number, fractions decimals and percentages, early algebra and ratio, and geometry, measure and statistics.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "lower-secondary", subject: "maths", year: 7 },
};
