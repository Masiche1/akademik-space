import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-2-1.ts";
import { lesson52 } from "./lesson-2-2.ts";
import { lesson53 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edpe2-u2",
  code: "2",
  title: "Reading Comprehension",
  description:
    "Inference and evidence, non-fiction features and comparing texts, summarising and answering different question types.",
  lessons: [lesson51, lesson52, lesson53, exam21, exam22, exam23, exam24, exam25],
};
