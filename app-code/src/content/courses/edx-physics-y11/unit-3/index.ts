import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "eph11-u3",
  code: "3",
  title: "Radioactivity and Astrophysics",
  description: "Study atomic structure, radioactive decay and half-life, the uses and dangers of radiation, fission and fusion, orbits, the life cycle of stars and red shift.",
  lessons: [lesson31, lesson32, lesson33],
};
