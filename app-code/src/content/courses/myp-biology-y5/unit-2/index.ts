import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypb5-unit-2",
  number: 2,
  code: "2",
  title: "Physiology and Homeostasis",
  description:
    "The nervous system and reflexes, the endocrine system and hormones, kidney function and osmoregulation, gas exchange in humans and plants, transport systems, and reproduction with hormonal control.",
  lessons: [lesson21, lesson22, lesson23],
};
