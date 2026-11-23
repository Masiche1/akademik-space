import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ech10-u6",
  code: "6",
  number: 6,
  title: "Organic Chemistry: Crude Oil and Hydrocarbons",
  description:
    "Study crude oil and fractional distillation, the properties and uses of fractions, the structure and reactions of alkanes and alkenes, cracking, and complete versus incomplete combustion.",
  lessons: [lesson61, lesson62, lesson63],
};
