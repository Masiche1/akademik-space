import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-12-1.ts";
import { lesson122 } from "./lesson-12-2.ts";
import { lesson123 } from "./lesson-12-3.ts";

export const unit12: Unit = {
  id: "ecn11-u12",
  code: "12",
  number: 12,
  title: "Inequality and Redistribution",
  description:
    "Measuring income and wealth inequality, the causes of inequality, and government redistribution policies.",
  lessons: [lesson121, lesson122, lesson123],
};
