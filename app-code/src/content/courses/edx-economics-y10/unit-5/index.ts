import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ecn10-u5",
  code: "5",
  title: "Poverty, Inequality and Redistribution",
  description:
    "Measuring poverty and inequality, causes and consequences of poverty, and redistribution policies.",
  lessons: [lesson51, lesson52, lesson53],
};
