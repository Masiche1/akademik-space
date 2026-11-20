import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const cieIgcseAdditionalMaths: Course = {
  id: "cie-igcse-additional-maths",
  title: "Cambridge IGCSE Additional Mathematics 0606",
  shortTitle: "IGCSE Add Maths",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Additional Mathematics 0606",
  description:
    "Cambridge IGCSE Additional Mathematics 0606: functions, quadratic functions, coordinate geometry of the circle, circular measure, trigonometry, series, permutations and combinations, vectors in two dimensions, calculus, factors of polynomials and simultaneous equations.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "igcse", subject: "additional-mathematics-0606" },
};
