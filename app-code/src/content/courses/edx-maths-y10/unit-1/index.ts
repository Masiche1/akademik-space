import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edm10-u1",
  code: "1",
  title: "Numbers and the Number System",
  description: "Prime factors, HCF and LCM, recurring decimals and surds; percentages, ratio and compound change; standard form and upper and lower bounds.",
  lessons: [lesson11, lesson12, lesson13],
};
