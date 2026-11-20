import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypc4-unit-3",
  number: 3,
  code: "3",
  title: "Materials and Applications",
  description:
    "Electrolysis and metal extraction, hydrocarbons and fuels, polymers, materials properties and sustainability.",
  lessons: [lesson31, lesson32, lesson33],
};
