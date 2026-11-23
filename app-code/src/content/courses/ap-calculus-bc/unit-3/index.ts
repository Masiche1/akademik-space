import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "apcbc-u3",
  code: "3",
  title: "Advanced Integration and Applications",
  description: "Integration by parts, partial fractions, improper integrals, and arc length.",
  lessons: [lesson31, lesson32],
};
