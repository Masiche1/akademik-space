import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ess9-u1",
  code: "1",
  title: "Space Systems",
  description:
    "Explore how nuclear fusion powers stars and how stars are classified and evolve, how redshift, the cosmic microwave background and light element abundances support the Big Bang, how Kepler's laws describe orbits, and how radiometric dating and ancient rocks reveal Earth's age and formation.",
  lessons: [lesson11, lesson12, lesson13],
};
