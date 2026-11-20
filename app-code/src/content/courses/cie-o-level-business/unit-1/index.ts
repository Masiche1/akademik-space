import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olbus-u1",
  code: "1",
  title: "Business Activity and Enterprise",
  description:
    "Purpose of business, factors of production, business objectives and enterprise skills — Cambridge O Level Business 7100.",
  lessons: [lesson11, lesson12, lesson13],
};
