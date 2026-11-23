import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "apcab-u2",
  code: "2",
  title: "Differentiation",
  description: "Compute derivatives from definitions and rules, apply the chain rule, and differentiate implicit and inverse functions.",
  lessons: [lesson21, lesson22, lesson23],
};
