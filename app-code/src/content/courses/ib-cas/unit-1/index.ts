import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cas-u1",
  code: "1",
  title: "The CAS Framework",
  description: "Understand what creativity, activity and service mean in CAS, set meaningful personal goals, and learn how to balance the three strands.",
  lessons: [lesson11, lesson12, lesson13],
};
