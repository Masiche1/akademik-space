import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-3-1.ts";
import { lesson72 } from "./lesson-3-2.ts";
import { lesson73 } from "./lesson-3-3.ts";
import { lesson74 } from "./lesson-3-4.ts";
import { lesson75 } from "./lesson-3-5.ts";

export const unit3: Unit = {
  id: "ciecs-u3",
  code: "3",
  title: "Algorithms, Programming and Databases",
  description:
    "Flowcharts/pseudocode, searching/sorting, programming constructs, strings/lists and SQL — Cambridge IGCSE Computer Science 0478.",
  lessons: [lesson71, lesson72, lesson73, lesson74, lesson75],
};
