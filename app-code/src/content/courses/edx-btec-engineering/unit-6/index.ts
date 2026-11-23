import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edxbteceng-u6",
  code: "6",
  number: 6,
  title: "Unit 6: Electronic and Control Principles",
  description:
    "Digital and analogue electronics for engineering systems: logic gates and truth tables, binary and hexadecimal, semiconductors, sensors and signal conditioning, and closed-loop control with PLCs.",
  lessons: [lesson61, lesson62, lesson63],
};
