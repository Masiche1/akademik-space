import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edial-maths-u3",
  code: "3",
  title: "Pure Mathematics 3",
  description:
    "WMA13 P3: trigonometric identities and equations, exponentials/logarithms and the binomial series, and advanced differentiation and integration techniques.",
  lessons: [lesson31, lesson32, lesson33],
};
