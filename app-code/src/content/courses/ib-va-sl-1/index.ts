import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibVaSl1: Course = {
  id: "ib-va-sl-1",
  title: "Visual Arts SL: Year 1",
  shortTitle: "Visual Arts SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Studio practice across drawing, colour, form and mixed media; critical and contextual studies of artworks; and the analytical and reflective skills that support the comparative study and exhibition components of the DP visual arts course.",
  units: [unit1, unit2, unit3],
  ib: {"subject":"visual-arts","level":"sl","year":1},
};
