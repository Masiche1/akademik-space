import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const edxIasComputerScience: Course = {
  id: "edx-ias-computerscience",
  title: "Edexcel IAS Computer Science",
  shortTitle: "IAS Computer Science",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Computer Science: computer systems, algorithms, programming, data representation and programming practice.",
  units: [unit1, unit2, unit3, unit4, unit5],
  edexcel: { stage: "ias", subject: "computer-science", year: 1 },
};
