import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryComputing: Course = {
  id: "edx-primary-computing",
  title: "Edexcel Primary Computing",
  shortTitle: "Primary Computing",
  grade: "Years 1-6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Digital literacy, coding basics, data and information handling, and online safety for Years 1-6: algorithms, programming concepts, networks, e-safety and responsible technology use.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "computing", year: 1 },
};
