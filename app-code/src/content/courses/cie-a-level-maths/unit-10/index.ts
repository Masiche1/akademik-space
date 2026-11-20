import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";

export const unit10: Unit = {
  id: "cial-m-unit-10",
  code: "10",
  title: "Numerical Methods",
  description:
    "Iterative solution of equations, sign-change and Newton-Raphson methods, and the trapezium rule for numerical integration.",
  lessons: [lesson101, lesson102],
};
