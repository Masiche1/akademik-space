import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";
import { lesson104 } from "./lesson-1-4.ts";
import { lesson105 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "ciegp-u1",
  code: "1",
  title: "Core GP Skills",
  description:
    "Research questions, sources, perspective analysis, evaluation and reflection — Cambridge IGCSE Global Perspectives 0457.",
  lessons: [lesson101, lesson102, lesson103, lesson104, lesson105],
};
