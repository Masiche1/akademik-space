import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "eias-econ-u1",
  code: "1",
  title: "Introduction to Markets",
  description:
    "9EC01 Unit 1: demand, supply and equilibrium, elasticity, market structures, game theory, government intervention and competition policy.",
  lessons: [lesson11, lesson12, lesson13],
};
