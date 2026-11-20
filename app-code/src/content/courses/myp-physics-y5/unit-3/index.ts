import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypp5-unit-3",
  number: 3,
  code: "3",
  title: "Electricity, Electromagnetism and Modern Physics",
  description:
    "Advanced circuit analysis, power and fuses, electromagnetic induction, transformer calculations, radioactivity and half-life, nuclear fission and fusion, and space physics calculations.",
  lessons: [lesson31, lesson32, lesson33],
};
