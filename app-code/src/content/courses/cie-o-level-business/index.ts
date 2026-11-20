import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieOLevelBusiness: Course = {
  id: "cie-o-level-business",
  title: "Cambridge O Level Business Studies 7100",
  shortTitle: "O Level Business",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Business 7100",
  description:
    "Cambridge O Level Business Studies 7100 covering business activity and enterprise, marketing, operations management, people in business, business finance and external influences on business.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "o-level", subject: "business-7100" },
};
