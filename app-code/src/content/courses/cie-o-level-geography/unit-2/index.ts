import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "oleg-unit-2",
  code: "2",
  title: "Human Geography",
  description:
    "Population distribution and settlement, development indicators and inequality, tourism impacts and globalisation.",
  lessons: [lesson21, lesson22, lesson23],
};
