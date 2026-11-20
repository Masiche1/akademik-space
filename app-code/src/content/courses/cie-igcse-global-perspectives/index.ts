import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseGlobalPerspectives: Course = {
  id: "cie-igcse-global-perspectives",
  title: "Cambridge IGCSE Global Perspectives 0457",
  shortTitle: "IGCSE GP",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Global Perspectives 0457",
  description:
    "Cambridge IGCSE Global Perspectives 0457 covering research, analysis, evaluation, reflection, collaboration and communication applied to global issues through coursework research projects.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "igcse", subject: "global-perspectives-0457" },
};
