import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibGeoSl2: Course = {
  id: "ib-geo-sl-2",
  title: "Geography SL: Year 2 — Ecosystems, Food and Health",
  shortTitle: "Geography SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Ecosystem structure, functioning and services; biodiversity and its value; food systems, agricultural intensification and food security; and the geographies of disease, health systems, medical tourism and pandemics.",
  units: [unit4, unit5, unit6],
  ib: { subject: "geography", level: "sl", year: 2 },
};
