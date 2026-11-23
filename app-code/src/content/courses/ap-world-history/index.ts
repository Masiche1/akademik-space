import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apWorldHistory: Course = {
  id: "ap-world-history",
  title: "AP World History",
  shortTitle: "AP World History",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "A global survey from the Paleolithic era to the present — networks, empires, belief systems, and economic systems across all regions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "world-history" },
};
