import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olep-unit-3",
  code: "3",
  title: "Developmental Psychology",
  description:
    "Nature-nurture, Piaget's stages, attachment, moral development, Vygotsky, Erikson and adolescent development.",
  lessons: [lesson31, lesson32, lesson33],
};
