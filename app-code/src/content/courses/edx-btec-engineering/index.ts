import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxBtecEngineering: Course = {
  id: "edx-btec-engineering",
  title: "BTEC National Engineering",
  shortTitle: "BTEC Engineering",
  grade: "Level 3",
  framework: "Pearson BTEC Level 3 National (AAQ) Extended Certificate",
  description:
    "Applied engineering study aligned to the Pearson BTEC National in Engineering (Extended Certificate): engineering principles and data, modern engineering applications and materials, CAD-based design, and the engineering project lifecycle.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "btec", subject: "engineering", year: 12 },
};
