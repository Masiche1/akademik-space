import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "myps2-u2",
  code: "2",
  title: "The Human Body",
  description: "Investigate nutrition, food tests and digestion, breathing, gas exchange and the effects of smoking, the heart and circulation during exercise, human reproduction and puberty, and how microorganisms, the immune system, vaccination and antibiotics shape public health.",
  lessons: [lesson21, lesson22, lesson23],
};
