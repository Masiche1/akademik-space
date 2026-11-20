import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibHisSl1: Course = {
  id: "ib-his-sl-1",
  title: "History SL: Year 1 — The Americas, Europe and the World",
  shortTitle: "History SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Early societies in the Americas and Europe, the revolutions and nation-building of the 18th–19th centuries, imperialism and World War I, the interwar crisis and fascism, World War II, and the origins of the Cold War and decolonisation.",
  units: [unit1, unit2, unit3],
  ib: { subject: "history", level: "sl", year: 1 },
};
