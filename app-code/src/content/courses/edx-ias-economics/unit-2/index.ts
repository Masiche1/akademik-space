import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "eias-econ-u2",
  code: "2",
  title: "Market Failure",
  description:
    "9EC01 Unit 2: externalities, public goods, merit/demerit goods, information failure, government intervention, inequality and poverty.",
  lessons: [lesson21, lesson22, lesson23],
};
