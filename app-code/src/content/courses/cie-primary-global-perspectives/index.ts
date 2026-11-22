import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ciePrimaryGlobalPerspectives: Course = {
  id: "cie-primary-global-perspectives",
  title: "Cambridge Primary Global Perspectives 0838",
  shortTitle: "Primary Global Perspectives",
  grade: "Cambridge Primary Stages 1-6",
  framework: "Cambridge International Examinations — Global Perspectives 0838",
  description:
    "Cambridge Primary Global Perspectives 0838 covering research, analysis, evaluation, reflection, collaboration and communication across Stages 1-6.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "primary", subject: "global-perspectives-0838" },
};
