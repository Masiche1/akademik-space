import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieALevelEconomics: Course = {
  id: "cie-a-level-economics",
  title: "Cambridge A Level Economics 9708",
  shortTitle: "A Level Economics",
  grade: "a-level",
  framework: "Cambridge International Examinations",
  description: "Cambridge A Level Economics covering microeconomics, macroeconomics, international economics, and development economics.",
  cie: {
    qualification: "a-level",
    subject: "Economics 9708",
  },
  units: [unit1, unit2, unit3, unit4],
};
