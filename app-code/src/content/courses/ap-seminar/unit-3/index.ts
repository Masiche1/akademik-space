import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "apsm-u3",
  code: "3",
  title: "Academic Communication and Collaboration",
  description: "Presenting research, writing academically, and collaborative inquiry.",
  lessons: [lesson31, lesson32],
};
