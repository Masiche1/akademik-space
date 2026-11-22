import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "esc7-u1",
  code: "1",
  title: "Biology: Cells, Organisms and Ecosystems",
  description:
    "Cell structure and function, classification of organisms, habitats and ecosystems, and adaptation and interdependence.",
  lessons: [lesson11, lesson12, lesson13],
};
