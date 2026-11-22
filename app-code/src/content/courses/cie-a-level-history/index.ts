import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieALevelHistory: Course = {
  id: "cie-a-level-history",
  title: "Cambridge A Level History 9489",
  shortTitle: "A Level History",
  grade: "a-level",
  framework: "Cambridge International Examinations",
  description:
    "Cambridge A Level History covering the Cold War, decolonisation, global conflicts and historical skills.",
  cie: {
    qualification: "a-level",
    subject: "History 9489",
  },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
