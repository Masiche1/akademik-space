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

export const cieALevelMaths: Course = {
  id: "cie-a-level-maths",
  title: "Cambridge A Level Mathematics 9709",
  shortTitle: "A Level Maths",
  grade: "Cambridge A Level",
  framework: "Cambridge International Examinations — Mathematics 9709",
  description:
    "Cambridge A Level Mathematics 9709: functions and graphs, trigonometry, sequences and series, binomial expansion, differentiation, integration, coordinate geometry, vectors, probability and statistics, kinematics and numerical methods.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10],
  cie: { qualification: "a-level", subject: "mathematics-9709" },
};
