import type { Unit } from "../../../types.ts";
import { lesson501 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { lesson54 } from "./lesson-5-4.ts";
import { lesson55 } from "./lesson-5-5.ts";

export const unit5: Unit = {
  id: "ciealc-u5",
  code: "5",
  title: "Depth: Data Structures, OOP, Systems and Networking",
  description:
    "Data structures and Big O, OOP pillars, number systems and floating point, operating systems internals, networking protocols and security — deepening Cambridge A Level Computer Science 9618.",
  lessons: [lesson501, lesson52, lesson53, lesson54, lesson55],
};
