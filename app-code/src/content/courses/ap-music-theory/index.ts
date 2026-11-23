import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apMusicTheory: Course = {
  id: "ap-music-theory",
  title: "AP Music Theory",
  shortTitle: "AP Music Theory",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Notation, scales, harmony, analysis, and composition for college-level musicianship.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "music-theory" },
};
