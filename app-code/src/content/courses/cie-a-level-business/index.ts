import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const cieALevelBusiness: Course = {
  id: "cie-a-level-business",
  title: "Cambridge A Level Business 9707",
  shortTitle: "A Level Business",
  grade: "a-level",
  framework: "Cambridge International Examinations",
  description: "Cambridge A Level Business covering business activity, decisions, strategy, and global business decision-making.",
  cie: {
    qualification: "a-level",
    subject: "Business 9707",
  },
  units: [unit1, unit2, unit3, unit4],
};
