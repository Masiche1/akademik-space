import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "apr-u3",
  code: "3",
  title: "Analysis and Presentation",
  description: "Interpreting results, defending research, and communicating findings orally.",
  lessons: [lesson31, lesson32],
};
