import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "olcs-u9",
  code: "9",
  title: "Data Representation",
  description:
    "Number systems, character representation and representing sound and images — Cambridge O Level Computer Science 2210 topic 9.",
  lessons: [lesson91, lesson92, lesson93],
};
