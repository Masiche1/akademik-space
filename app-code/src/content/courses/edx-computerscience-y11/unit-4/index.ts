import type { Unit } from "../../../types.ts";
import { lesson301 } from "./lesson-4-1.ts";
import { lesson302 } from "./lesson-4-2.ts";
import { lesson303 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ecs11-u4",
  code: "4",
  title: "Systems and Hardware",
  description:
    "Memory types, storage technologies, CPU architecture, I/O devices and embedded systems.",
  lessons: [lesson301, lesson302, lesson303],
};
