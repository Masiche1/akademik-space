import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieALevelPsychology: Course = {
  id: "cie-a-level-psychology",
  title: "Cambridge A Level Psychology 9699",
  shortTitle: "A Level Psychology",
  grade: "a-level",
  framework: "Cambridge International Examinations",
  description: "Cambridge A Level Psychology covering social influence, memory, attachment, approaches, psychopathology, treatment, development and research methods.",
  cie: {
    qualification: "a-level",
    subject: "Psychology 9699",
  },
  units: [unit1, unit2, unit3, unit4],
};
