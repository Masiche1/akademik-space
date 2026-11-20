import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";
import { exam91 } from "./lesson-9-x1.ts";

export const unit9: Unit = {
  id: "cilm-u9",
  code: "9",
  title: "Problem Solving and Review",
  description:
    "Multi-step problems, ratio and percentages, financial maths, sequences and geometry — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson91, lesson92, lesson93, exam91],
};
