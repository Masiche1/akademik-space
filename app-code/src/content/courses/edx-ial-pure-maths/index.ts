import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";

export const edxIalPureMaths: Course = {
  id: "edx-ial-pure-maths",
  title: "Edexcel IAL Pure Mathematics",
  shortTitle: "IAL Pure Maths",
  grade: "International Advanced Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International A Level in Pure Mathematics: pure units P1–P4 plus Further Pure Mathematics units FP1, FP2 and FP3 (specification requires FP1 and one of FP2/FP3; this course covers the complete further-pure catalogue).",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
  edexcel: { stage: "ial", subject: "pure-maths", year: 2 },
};
