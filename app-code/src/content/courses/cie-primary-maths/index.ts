import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";

export const ciePrimaryMaths: Course = {
  id: "cie-primary-maths",
  title: "Cambridge Primary Mathematics 0096",
  shortTitle: "Primary Maths",
  grade: "Cambridge Primary Stages 1-6",
  framework: "Cambridge International Examinations — Mathematics 0096",
  description:
    "Cambridge Primary Mathematics 0096 covering number, place value, operations, fractions, decimals, percentages, geometry, measure and data handling across Stages 1-6.",
  units: [unit1, unit2],
  cie: { qualification: "primary", subject: "mathematics-0096" },
};
