import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";

export const unit3: Unit = {
  id: "cilm-u3",
  code: "3",
  title: "Algebra Foundations",
  description:
    "Expressions, substitution, solving equations and number sequences — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson31, lesson32, lesson33, exam31],
};
