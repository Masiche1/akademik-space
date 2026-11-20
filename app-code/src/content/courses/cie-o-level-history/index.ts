import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const cieOLevelHistory: Course = {
  id: "cie-o-level-history",
  title: "Cambridge O Level History 2130",
  shortTitle: "O Level History",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — History 2130",
  description:
    "Cambridge O Level History 2130/2147 covering the Cold War, post-Cold War international relations, international organisations, global issues, the interwar period (1919–39), World War II, the First World War and Russia 1905–41, plus historical skills.",
  units: [unit1, unit2, unit3, unit4, unit5],
  cie: { qualification: "o-level", subject: "history-2130" },
};
