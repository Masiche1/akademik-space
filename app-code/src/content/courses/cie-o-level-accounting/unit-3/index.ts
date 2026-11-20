import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olacc-u3",
  code: "3",
  title: "Financial Statements",
  description:
    "Income statements and balance sheets — Cambridge O Level Accounting 7706 topic 3.",
  lessons: [lesson31, lesson32, lesson33],
};
