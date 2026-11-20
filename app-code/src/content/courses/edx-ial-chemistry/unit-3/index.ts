import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edialchem-u3",
  code: "3",
  title: "Rates, Equilibria and Further Organic Chemistry",
  description:
    "WCH14: reaction rates, equilibria and Le Chatelier, hydrocarbons, halogenoalkanes, alcohols and carbonyl chemistry.",
  lessons: [lesson31, lesson32, lesson33],
};
