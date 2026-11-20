import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edialfm-u1",
  code: "1",
  title: "Further Pure Mathematics 1",
  description:
    "WFM01 FP1: complex numbers in Cartesian and polar form, De Moivre's theorem, the parabola $x^2=4ay$ and rectangular hyperbola $xy=c^2$, and proof by mathematical induction.",
  lessons: [lesson11, lesson12, lesson13],
};
