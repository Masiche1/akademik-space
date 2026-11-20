import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypms5-u1",
  code: "1",
  title: "Number and Algebra Foundations",
  description: "Manipulate surds including conjugates, apply all index laws, solve compound and absolute value inequalities, calculate in standard form, and classify rational and irrational numbers.",
  lessons: [lesson11, lesson12, lesson13],
};
