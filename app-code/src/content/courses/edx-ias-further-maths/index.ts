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

export const edxIasFurtherMaths: Course = {
  id: "edx-ias-further-maths",
  title: "Edexcel IAS Further Mathematics",
  shortTitle: "IAS Further Maths",
  grade: "International AS",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Further Mathematics: compulsory FP1 plus all available further and applied units FP2, FP3, M1–M3, S1–S3 and D1 (IAS candidates choose two optional units in the specification; this course covers the complete unit catalogue).",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  edexcel: { stage: "ias", subject: "further-maths", year: 1 },
};
