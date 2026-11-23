import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apgov-u1",
  code: "1",
  title: "Foundations of American Government",
  description: "Constitutional origins, federalism, separation of powers, and civil liberties.",
  lessons: [lesson11, lesson12, lesson13],
};
