import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apPsychology: Course = {
  id: "ap-psychology",
  title: "AP Psychology",
  shortTitle: "AP Psychology",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Scientific study of mind and behavior — neuroscience, development, cognition, motivation, personality, disorders, and treatment.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "psychology" },
};
