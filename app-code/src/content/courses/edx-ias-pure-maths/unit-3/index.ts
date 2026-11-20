import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ediaspm-u3",
  code: "3",
  title: "Further Pure Mathematics 1",
  description:
    "WFM01 FP1: complex numbers in Cartesian and polar form, De Moivre's theorem, the parabola $x^2=4ay$ and rectangular hyperbola $xy=c^2$, and proof by mathematical induction.",
  lessons: [lesson31, lesson32, lesson33],
};
