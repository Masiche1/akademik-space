import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { exam41 } from "./lesson-4-x1.ts";
import { exam42 } from "./lesson-4-x2.ts";
import { exam43 } from "./lesson-4-x3.ts";
import { exam44 } from "./lesson-4-x4.ts";
import { exam45 } from "./lesson-4-x5.ts";

export const unit4: Unit = {
  id: "edpe6-u4",
  code: "4",
  title: "Critical Analysis, Formal Writing and Advanced Narrative",
  description:
    "Year 6 extension: critical evaluation, purpose/audience and text structure; speeches and formal correspondence; advanced narrative craft and style editing.",
  lessons: [lesson41, lesson42, lesson43, exam41, exam42, exam43, exam44, exam45],
};
