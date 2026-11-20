import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibVaSl2: Course = {
  id: "ib-va-sl-2",
  title: "Visual Arts SL: Year 2",
  shortTitle: "Visual Arts SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Advanced comparative analysis across cultures and history, curatorial and installation practice for the exhibition component, and research and structuring skills for the critical essay and reflective commentary.",
  units: [unit4, unit5, unit6],
  ib: {"subject":"visual-arts","level":"sl","year":2},
};
