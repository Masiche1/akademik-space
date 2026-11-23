import type { Unit } from "../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "s8-u8",
  code: "8",
  title: "Life Science Deep Dive: Evolution",
  description:
    "Explore natural selection, adaptations, speciation, extinction, human evolution and applied evolution.",
  lessons: [lesson81, lesson82, lesson83],
};
