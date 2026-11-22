import type { Unit } from "../../../types.ts";
import { lesson201 } from "./lesson-2-1.ts";
import { lesson202 } from "./lesson-2-2.ts";
import { lesson203 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edxbteceng-u2",
  code: "2",
  title: "Unit 2: Engineering Applications",
  description:
    "Advances in modern engineering technology (automation, CAD/CAM, Industry 4.0), engineering materials and manufacturing processes, and sustainable solutions to engineering problems.",
  lessons: [lesson201, lesson202, lesson203],
};
