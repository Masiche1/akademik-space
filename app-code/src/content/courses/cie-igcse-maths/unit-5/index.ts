import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ciem-u5",
  code: "5",
  title: "Mensuration",
  description:
    "Areas of 2D shapes, surface area and volume of solids, and problem solving with units, density and displacement — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson51, lesson52, lesson53],
};
