import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "myps2-u3",
  code: "3",
  title: "Waves and Electricity",
  description: "Explain how sound and light travel, reflect and refract, build and analyse series and parallel circuits with V = IR, calculate the cost of electrical energy, investigate electromagnets, and use speed, distance-time graphs and pressure.",
  lessons: [lesson31, lesson32, lesson33],
};
