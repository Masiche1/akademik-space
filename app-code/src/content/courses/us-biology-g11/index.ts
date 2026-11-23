import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usBiologyG11: Course = {
  id: "us-biology-g11",
  title: "Grade 11 Biology",
  shortTitle: "Biology G11",
  grade: "Grade 11",
  framework: "Next Generation Science Standards (NGSS)",
  description: "Explore cell structure and function, genetics and heredity, evolution, and ecology.",
  units: [unit1, unit2, unit3],
  us: { subject: "biology", grade: 11 },
};
