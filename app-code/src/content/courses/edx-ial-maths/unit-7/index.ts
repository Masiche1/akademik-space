import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "edial-maths-u7",
  code: "7",
  title: "Decision Mathematics 1",
  description:
    "WDM11 D1: algorithms, networks (shortest path, spanning trees, max flow), critical path analysis, linear programming and simulation.",
  lessons: [lesson71, lesson72, lesson73],
};
