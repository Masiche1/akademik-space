import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const edxIalFurtherMaths: Course = {
  id: "edx-ial-further-maths",
  title: "Edexcel IAL Further Mathematics",
  shortTitle: "IAL Further Maths",
  grade: "International A Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International A Level in Further Mathematics: compulsory FP1, at least one of FP2/FP3, plus three further eligible units from M1–M3, S1–S3 and D1 (this course covers the complete unit catalogue).",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  edexcel: { stage: "ial", subject: "further-maths", year: 2 },
};
