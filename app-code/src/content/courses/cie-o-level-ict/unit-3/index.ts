import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olict-u3",
  code: "3",
  title: "Networks",
  description:
    "Network types, hardware components and protocols — Cambridge O Level ICT 7014 topic 4.",
  lessons: [lesson31, lesson32, lesson33],
};
