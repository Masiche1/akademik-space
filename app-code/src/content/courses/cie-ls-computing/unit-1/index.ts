import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";
import { lesson15 } from "./lesson-1-5.ts";
import { lesson16 } from "./lesson-1-6.ts";
import { lesson17 } from "./lesson-1-7.ts";
import { lesson18 } from "./lesson-1-8.ts";

export const unit1: Unit = {
  id: "cilc-u1",
  code: "1",
  title: "Computational Thinking and Programming",
  description:
    "Algorithms, decomposition, core constructs, variables, functions, debugging and text-based programming — Cambridge Lower Secondary Computing 0860 (Stages 7-9).",
  lessons: [lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, lesson18],
};
