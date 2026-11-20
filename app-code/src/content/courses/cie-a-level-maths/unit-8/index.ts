import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";

export const unit8: Unit = {
  id: "cial-m-unit-8",
  code: "8",
  title: "Differentiation",
  description:
    "Differentiation rules and applications: chain, product and quotient rules, stationary points, curve sketching and implicit differentiation.",
  lessons: [lesson81, lesson82],
};
