import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olcs-u3",
  code: "3",
  title: "Hardware",
  description:
    "Computer architecture, input/output devices, data storage and network hardware — Cambridge O Level Computer Science 2210 topic 3.",
  lessons: [lesson31, lesson32, lesson33],
};
