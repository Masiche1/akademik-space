import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-2-1.ts";
import { lesson112 } from "./lesson-2-2.ts";
import { lesson113 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edps2-u2",
  code: "2",
  title: "Materials and Matter",
  description:
    "Material properties and testing, choosing materials for purpose, grouping by source and properties, states of matter and dissolving.",
  lessons: [lesson111, lesson112, lesson113, exam21, exam22, exam23, exam24, exam25],
};
