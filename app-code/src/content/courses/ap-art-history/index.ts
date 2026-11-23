import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apArtHistory: Course = {
  id: "ap-art-history",
  title: "AP Art History",
  shortTitle: "AP Art Hist",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Global art history from prehistory to contemporary — visual analysis, cultural context, and art historical interpretation.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "art-history" },
};
