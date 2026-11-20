import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "ech11-u2",
  code: "2",
  title: "Electrolysis and Industrial Chemistry",
  description: "Study electrolysis of molten and aqueous compounds and half equations, the extraction of aluminium and iron, fertilisers and the Contact process, the properties of metals and alloys, and how to evaluate industrial processes.",
  lessons: [lesson21, lesson22, lesson23],
};
