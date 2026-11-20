import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const cieALevelFurtherMaths: Course = {
  id: "cie-a-level-further-maths",
  title: "Cambridge International AS & A Level Further Mathematics 9231",
  shortTitle: "A Level Further Maths",
  grade: "Cambridge International A Level",
  framework: "Cambridge International Examinations — Further Mathematics 9231",
  description:
    "Cambridge International AS & A Level Further Mathematics 9231: further algebra, matrices, polar coordinates, complex numbers, further trigonometry and hyperbolic functions, further calculus, vectors, probability, mechanics and statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  cie: { qualification: "a-level", subject: "further-mathematics-9231" },
};
