import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usBiologyG10: Course = {
  id: "us-biology-g10",
  title: "Grade 10 Biology",
  shortTitle: "Biology G10",
  grade: "Grade 10",
  framework: "Next Generation Science Standards (High School Life Science)",
  description:
    "Cell structure and function, DNA and heredity, photosynthesis and cellular respiration, homeostasis, and evolution with ecology.",
  units: [unit1, unit2, unit3, unit4],
  us: { subject: "biology", grade: 10 },
};
