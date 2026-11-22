import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const edxIasPsychology: Course = {
  id: "edx-ias-psychology",
  title: "Edexcel IAS Psychology",
  shortTitle: "IAS Psychology",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Psychology: social influence, memory, attachment, psychopathology and research methods.",
  units: [unit1, unit2, unit3, unit4, unit5],
  edexcel: { stage: "ias", subject: "psychology", year: 1 },
};
