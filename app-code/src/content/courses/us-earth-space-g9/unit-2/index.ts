import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "ess9-u2",
  code: "2",
  title: "Earth's Systems",
  description:
    "Investigate how seismic waves reveal Earth's interior, how plate tectonics and mantle convection reshape the surface, how water and feedback loops drive change, and how energy flow, circulation and the carbon cycle connect the geosphere, hydrosphere, atmosphere and biosphere.",
  lessons: [lesson21, lesson22, lesson23],
};
