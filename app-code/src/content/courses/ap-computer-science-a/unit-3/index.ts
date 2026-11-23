import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { lesson34 } from "./lesson-3-4.ts";
import { lesson35 } from "./lesson-3-5.ts";
import { lesson36 } from "./lesson-3-6.ts";

export const unit3: Unit = {
  id: "apcsa-u3",
  code: "3",
  title: "Data Structures",
  description: "Arrays, ArrayLists, 2D arrays, and searching/sorting algorithms in Java.",
  lessons: [lesson31, lesson32, lesson33, lesson34, lesson35, lesson36],
};
