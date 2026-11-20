import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";

export const edxIalMaths: Course = {
  id: "edx-ial-maths",
  title: "Edexcel IAL Mathematics",
  shortTitle: "IAL Maths",
  grade: "International Advanced Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International Advanced Level (IAL) in Mathematics: pure units P1–P4 plus applied units from Mechanics (M1), Statistics (S1) and Decision Mathematics (D1). Candidates choose two applied units to complete the A Level.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
  edexcel: { stage: "ial", subject: "maths", year: 2 },
};
