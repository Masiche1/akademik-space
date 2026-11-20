import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";
import { exam101 } from "./lesson-10-x1.ts";

export const unit10: Unit = {
  id: "cilm-u10",
  code: "10",
  title: "Checkpoint Practice",
  description:
    "Stage 7, 8 and 9 Cambridge Lower Secondary Checkpoint practice in number, algebra, graphs, geometry, measure and statistics.",
  lessons: [lesson101, lesson102, lesson103, exam101],
};
