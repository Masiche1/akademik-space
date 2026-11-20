import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olec-u1",
  code: "1",
  title: "The Economic Problem",
  description:
    "Scarcity, opportunity cost and factors of production — Cambridge O Level Economics 2281.",
  lessons: [lesson11, lesson12, lesson13],
};
