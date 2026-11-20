import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "alg2-u5",
  code: "5",
  title: "Polynomial, Radical and Rational Functions",
  description: "Factor and solve higher-degree polynomial equations, use polynomial identities, and simplify and solve radical and rational expressions and equations while tracking restrictions and extraneous solutions.",
  lessons: [lesson51, lesson52, lesson53],
};
