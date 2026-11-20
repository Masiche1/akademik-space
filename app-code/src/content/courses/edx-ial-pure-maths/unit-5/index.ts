import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edialpm-u5",
  code: "5",
  title: "Further Pure Mathematics 1",
  description:
    "WFM01 FP1: complex numbers in Cartesian and polar form, De Moivre's theorem, the parabola $x^2=4ay$ and rectangular hyperbola $xy=c^2$, and proof by mathematical induction.",
  lessons: [lesson51, lesson52, lesson53],
};
