import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";

export const unit1: Unit = {
  id: "apmt-u1",
  code: "1",
  title: "Notation and Rhythm",
  description: "Pitch notation, rhythm, meter, and musical symbols.",
  lessons: [lesson11, lesson12],
};
