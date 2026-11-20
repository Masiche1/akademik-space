import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const edxIasMaths: Course = {
  id: "edx-ias-maths",
  title: "Edexcel IAS Mathematics",
  shortTitle: "IAS Maths",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The Edexcel International Advanced Subsidiary (IAS) in Mathematics: Pure Mathematics units P1 and P2 plus one applied unit from Mechanics (M1), Statistics (S1) or Decision Mathematics (D1). This course covers P1, P2 and all three applied units' core pathways.",
  units: [unit1, unit2, unit3, unit4, unit5],
  edexcel: { stage: "ias", subject: "maths", year: 1 },
};
