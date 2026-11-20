import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "alg1-u3",
  code: "3",
  title: "Exponents and Exponential Functions",
  description: "Build fluency with exponent laws, radicals, exponential growth and decay, and arithmetic and geometric sequences. Students connect symbolic rules to tables and contexts, compare additive and multiplicative change, and represent sequences explicitly and recursively.",
  lessons: [lesson31, lesson32, lesson33],
};
