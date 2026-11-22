import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieLsGlobalPerspectives: Course = {
  id: "cie-ls-global-perspectives",
  title: "Cambridge Lower Secondary Global Perspectives 1129",
  shortTitle: "LS Global Perspectives",
  grade: "Cambridge Lower Secondary",
  framework: "Cambridge International Examinations — Global Perspectives 1129",
  description:
    "Cambridge Lower Secondary Global Perspectives 1129 covering research, analysis, evaluation, reflection, collaboration and communication applied to global issues across Stages 7-9.",
  units: [unit1, unit2, unit3, unit4],
  cie: {
    qualification: "lower-secondary",
    subject: "global-perspectives-1129",
  },
};
