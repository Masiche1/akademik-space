import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edias-maths-u5",
  code: "5",
  title: "Decision Mathematics 1",
  description:
    "WDM11 D1: algorithms, networks (shortest path, spanning trees, max flow), critical path analysis, linear programming and simulation.",
  lessons: [lesson51, lesson52, lesson53],
};
