import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edm9-u1",
  code: "1",
  title: "Number",
  description: "Use index laws and standard form, round and estimate with confidence, find error intervals, and solve percentage and finance problems including reverse percentages, interest and depreciation.",
  lessons: [lesson11, lesson12, lesson13],
};
