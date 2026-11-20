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

export const cieIgcseMaths: Course = {
  id: "cie-igcse-maths",
  title: "Cambridge IGCSE Mathematics 0580",
  shortTitle: "IGCSE Maths 0580",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — Mathematics 0580, Extended tier",
  description:
    "Cambridge IGCSE Mathematics (0580), Extended tier: number, algebra, coordinate geometry, geometry, mensuration, trigonometry, transformations, probability, vectors and statistics. Units 1-10 cover Number, Algebra and Graphs, Coordinate Geometry, Geometry, Mensuration, Trigonometry, Transformations, Probability, Vectors and Statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "igcse", subject: "mathematics-0580", tier: "extended" },
};
