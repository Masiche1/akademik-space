import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";

export const unit9: Unit = {
  id: "ciam-u9",
  code: "9",
  title: "Permutations and Combinations",
  description: "Permutations of distinct and repeated items, combinations, and counting principles.",
  lessons: [lesson91, lesson92],
};
