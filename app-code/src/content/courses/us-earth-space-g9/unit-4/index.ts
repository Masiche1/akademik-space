import type { Unit } from "../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ess9-u4",
  code: "4",
  title: "Earth's Interior and Plate Tectonics Deep Dive",
  description:
    "Earth's internal layers, seismic waves, heat transfer, plate tectonic theory, boundaries, earthquakes, volcanoes, and applications.",
  lessons: [lesson41, lesson42, lesson43],
};
