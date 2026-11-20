import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieOLevelEconomics: Course = {
  id: "cie-o-level-economics",
  title: "Cambridge O Level Economics 2281",
  shortTitle: "O Level Economics",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Economics 2281",
  description:
    "Cambridge O Level Economics 2281 covering the economic problem, demand and supply, production, market structures, macroeconomics and international trade.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "o-level", subject: "economics-2281" },
};
