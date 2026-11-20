import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIalBiology: Course = {
  id: "edx-ial-biology",
  title: "Edexcel IAL Biology",
  shortTitle: "IAL Biology",
  grade: "International Advanced Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International A Level in Biology: WBI11–WBI12 core biology, WBI13 Practical Skills in Biology I, WBI14 Energy, Environment, Microbiology and Immunity, WBI15 Respiration, Internal Environment, Coordination and Gene Technology, and WBI16 Practical Skills in Biology II.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "ial", subject: "biology", year: 2 },
};
