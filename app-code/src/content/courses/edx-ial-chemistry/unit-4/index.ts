import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edialchem-u4",
  code: "4",
  title: "Transition Metals and Organic Nitrogen Chemistry",
  description:
    "WCH15: transition metals and complexes, aromatic chemistry, amines, amides and organic nitrogen compounds.",
  lessons: [lesson41, lesson42, lesson43],
};
