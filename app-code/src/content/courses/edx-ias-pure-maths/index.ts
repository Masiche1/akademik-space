import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxIasPureMaths: Course = {
  id: "edx-ias-pure-maths",
  title: "Edexcel IAS Pure Mathematics",
  shortTitle: "IAS Pure Maths",
  grade: "International AS",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Pure Mathematics: pure units P1, P2 and Further Pure Mathematics 1 (FP1), per Pearson specification WMA11, WMA12 and WFM01.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "ias", subject: "pure-maths", year: 1 },
};
