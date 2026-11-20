import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ciePreUMaths: Course = {
  id: "cie-pre-u-maths",
  title: "Cambridge Pre-U Mathematics 9794",
  shortTitle: "Pre-U Maths",
  grade: "Cambridge Pre-U",
  framework: "Cambridge International Examinations — Pre-U Mathematics 9794",
  description:
    "Cambridge Pre-U Mathematics 9794 covering pure mathematics (algebra, functions, coordinate geometry, trigonometry, sequences, vectors, calculus, exponentials, differential equations) and applications of mathematics (probability, statistics, mechanics) across Papers 1-3.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "pre-u", subject: "mathematics-9794" },
};
