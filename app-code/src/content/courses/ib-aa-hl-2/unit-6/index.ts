import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "aahl-u6",
  code: "6",
  title: "Further Integration, Differential Equations and Series",
  description:
    "Integrate by substitution and by parts, find volumes of revolution, solve first-order differential equations analytically and numerically, and build Maclaurin series for approximation and limits.",
  lessons: [lesson61, lesson62, lesson63],
};
