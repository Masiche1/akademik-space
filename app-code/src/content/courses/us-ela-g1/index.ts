import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usElaG1: Course = {
  id: "us-ela-g1",
  title: "Grade 1 English Language Arts",
  shortTitle: "ELA G1",
  grade: "Grade 1",
  framework: "Common Core State Standards for English Language Arts",
  description: "Ask and answer questions, identify key details, retell stories, compare characters and texts, write opinion/narrative/informational pieces, and build conventions and vocabulary.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "ela", grade: 1 },
};
