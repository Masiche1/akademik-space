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

export const cieOLevelMaths: Course = {
  id: "cie-o-level-maths",
  title: "Cambridge O Level Mathematics 4024",
  shortTitle: "O Level Maths",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Mathematics 4024",
  description:
    "Cambridge O Level Mathematics 4024: number, algebra, graphs, geometry, mensuration, trigonometry, probability and statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9],
  cie: { qualification: "o-level", subject: "mathematics-4024" },
};
