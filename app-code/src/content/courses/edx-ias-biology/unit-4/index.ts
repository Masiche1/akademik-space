import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ediasbio-u4",
  code: "4",
  title: "Digestion, Excretion and Homeostasis",
  description:
    "WBI15-style core: digestion and absorption in the alimentary canal, kidney structure and urine formation, ADH osmoregulation, blood glucose control and temperature regulation.",
  lessons: [lesson41, lesson42, lesson43],
};
