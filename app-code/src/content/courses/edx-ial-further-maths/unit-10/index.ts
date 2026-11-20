import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "edialfm-u10",
  code: "10",
  title: "Decision Mathematics 1",
  description:
    "WDM11 D1: algorithms, networks (shortest path, spanning trees, max flow), critical path analysis, linear programming and simulation.",
  lessons: [lesson101, lesson102, lesson103],
};
