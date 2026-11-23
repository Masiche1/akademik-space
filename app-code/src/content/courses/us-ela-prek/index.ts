import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usElaPreK: Course = {
  id: "us-ela-prek",
  title: "Pre-K English Language Arts",
  shortTitle: "ELA Pre-K",
  grade: "Pre-K",
  framework: "Head Start Early Learning Outcomes Framework (ELOF)",
  description: "Build early literacy: print awareness, phonological awareness, alphabet knowledge, vocabulary, listening and speaking, emergent reading and writing.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "ela", grade: -1 },
};
