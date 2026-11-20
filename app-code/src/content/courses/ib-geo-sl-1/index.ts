import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibGeoSl1: Course = {
  id: "ib-geo-sl-1",
  title: "Geography SL: Year 1 — Water, Coasts and Hazards",
  shortTitle: "Geography SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "The hydrological cycle and freshwater systems, fluvial and coastal processes and landforms, drainage basin management, and tectonic and atmospheric hazards with their risk management.",
  units: [unit1, unit2, unit3],
  ib: { subject: "geography", level: "sl", year: 1 },
};
