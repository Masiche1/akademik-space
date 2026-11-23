import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edxpc-u2",
  code: "2",
  title: "Coding Basics",
  description:
    "Y1-Y6: Algorithms, sequencing instructions, loops and repetition, decisions, debugging and testing.",
  lessons: [lesson21, lesson22, lesson23, exam21, exam22, exam23, exam24, exam25],
};
