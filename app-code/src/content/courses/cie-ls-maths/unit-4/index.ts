import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { exam41 } from "./lesson-4-x1.ts";

export const unit4: Unit = {
  id: "cilm-u4",
  code: "4",
  title: "Graphs and Algebra Applications",
  description:
    "Coordinates, linear graphs, graphical solutions, simultaneous equations, inequalities and formula rearranging — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson41, lesson42, lesson43, exam41],
};
