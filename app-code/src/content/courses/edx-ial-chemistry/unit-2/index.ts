import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edialchem-u2",
  code: "2",
  title: "Energetics, Group Chemistry, Halogenoalkanes and Alcohols",
  description:
    "WCH12: energetics and equilibria, Group 1/2/7 chemistry, acids and bases, halogenoalkanes and alcohols.",
  lessons: [lesson21, lesson22, lesson23],
};
