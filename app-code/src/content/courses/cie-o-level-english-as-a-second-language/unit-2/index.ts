import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "oles-u2",
  code: "2",
  title: "Summary Writing",
  description:
    "Condensing texts into accurate summaries — selecting key points, organising ideas and writing within strict word limits — Cambridge O Level ESL 1120.",
  lessons: [lesson21, lesson22, lesson23],
};
