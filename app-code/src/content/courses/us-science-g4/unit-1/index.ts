import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";
import { lesson15 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "sci4-u1",
  code: "1",
  title: "Energy: Heat and Temperature",
  description: "Heat transfer, temperature measurement and energy conservation.",
  lessons: [lesson11, lesson12, lesson13, lesson14, lesson15],
};
