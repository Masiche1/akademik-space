import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { lesson24 } from "./lesson-2-4.ts";

export const unit2: Unit = {
  id: "psych-u2",
  code: "2",
  title: "Cognition and Development",
  description:
    "How we remember, perceive and attend to the world; how thinking develops through childhood from Piaget's stages to lifespan development.",
  lessons: [lesson21, lesson22, lesson23, lesson24],
};
