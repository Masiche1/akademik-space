import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "eiascs-u2",
  code: "2",
  title: "Algorithms and Programming",
  description:
    "9CP01 Unit 2: Algorithms, flowcharts, pseudocode, variables, data types, operators, control structures, functions, debugging.",
  lessons: [lesson21, lesson22, lesson23],
};
