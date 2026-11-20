import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "oleh-unit-1",
  code: "1",
  title: "The Cold War",
  description:
    "Origins of the Cold War, early crises (Berlin, Korea, arms race), Cuban Missile Crisis, Berlin Wall, end of the Cold War.",
  lessons: [lesson11, lesson12, lesson13],
};
