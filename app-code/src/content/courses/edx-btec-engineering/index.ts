import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBtecEngineering: Course = {
  id: "edx-btec-engineering",
  title: "BTEC National Engineering",
  shortTitle: "BTEC Engineering",
  grade: "Level 3",
  framework: "Pearson BTEC Level 3 National (AAQ) Extended Certificate",
  description:
    "Applied engineering study aligned to the Pearson BTEC National in Engineering (Extended Certificate): engineering principles and data, modern engineering applications and materials, CAD-based design, and the engineering project lifecycle.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "btec", subject: "engineering", year: 12 },
};
