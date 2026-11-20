import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olcs-u2",
  code: "2",
  title: "Data Transmission",
  description:
    "Packets and transmission methods, error detection and encryption — Cambridge O Level Computer Science 2210 topic 2.",
  lessons: [lesson21, lesson22, lesson23],
};
