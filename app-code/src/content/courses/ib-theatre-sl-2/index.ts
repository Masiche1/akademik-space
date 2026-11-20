import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibTheatreSl2: Course = {
  id: "ib-theatre-sl-2",
  title: "Theatre SL: Year 2",
  shortTitle: "Theatre SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Comparative theatre studies across dramatic texts, directorial and production practice, and critical evaluation with portfolio development for the DP theatre course.",
  units: [unit4, unit5, unit6],
  ib: {"subject":"theatre","level":"sl","year":2},
};
