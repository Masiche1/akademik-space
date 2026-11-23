import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "s8-u4",
  code: "4",
  title: "Capstone: Science in Context",
  description:
    "Apply forces, energy, waves, genetics, evolution, and earth/space science to real-world problems and evaluate evidence.",
  lessons: [lesson41, lesson42, lesson43],
};
