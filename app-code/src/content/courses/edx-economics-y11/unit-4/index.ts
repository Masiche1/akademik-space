import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-4-1.ts";
import { lesson102 } from "./lesson-4-2.ts";
import { lesson103 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ecn11-u4",
  code: "4",
  title: "Macroeconomics",
  description:
    "National income, aggregate demand and supply, macroeconomic objectives, policy conflicts and evaluation.",
  lessons: [lesson101, lesson102, lesson103],
};
