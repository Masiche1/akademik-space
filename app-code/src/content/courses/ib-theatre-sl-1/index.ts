import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibTheatreSl1: Course = {
  id: "ib-theatre-sl-1",
  title: "Theatre SL: Year 1",
  shortTitle: "Theatre SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Theatre making and performance skills — physical theatre, voice, ensemble and improvisation — play analysis and context, and devising, scriptwork and staging for the DP theatre course.",
  units: [unit1, unit2, unit3],
  ib: {"subject":"theatre","level":"sl","year":1},
};
