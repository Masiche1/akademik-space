import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "m8-u2",
  code: "2",
  title: "Linear Relationships and Functions",
  description:
    "Connect slope to proportional relationships, work with functions in every representation, model situations with linear functions, solve systems of equations, and analyze bivariate data.",
  lessons: [lesson21, lesson22, lesson23],
};
