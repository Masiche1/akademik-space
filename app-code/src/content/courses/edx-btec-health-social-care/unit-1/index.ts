import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edxbtechsc-u1",
  code: "1",
  title: "Unit 1: Human Lifespan and Development",
  description:
    "Developmental stages from conception to older adulthood, theories of development (nature vs nurture, Piaget, Bowlby), and physical, cognitive, social and emotional changes across the lifespan.",
  lessons: [lesson101, lesson102, lesson103],
};
