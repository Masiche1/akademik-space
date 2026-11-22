import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "eias-econ-u6",
  code: "6",
  title: "Business Economics and Quantitative Methods",
  description:
    "9EC01 Unit 6: business objectives, costs, market structures, game theory, index numbers and statistical analysis.",
  lessons: [lesson61, lesson62, lesson63],
};
