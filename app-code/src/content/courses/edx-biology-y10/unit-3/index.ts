import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ebi10-u3",
  code: "3",
  title: "Respiration, Gas Exchange and Excretion",
  description: "Study aerobic and anaerobic respiration and how it is measured, gas exchange in humans and plants, and how the kidney excretes urea and regulates water balance.",
  lessons: [lesson31, lesson32, lesson33],
};
