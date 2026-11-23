import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "m10-u1",
  code: "1",
  title: "Congruence and Proof",
  description: "Use angle relationships and triangle congruence criteria to build geometric proofs.",
  lessons: [lesson11, lesson12, lesson13],
};
