import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "biosl-u3",
  number: 3,
  code: "3",
  title: "Unity and Diversity",
  description: "Classification and evidence for evolution, ecosystems and nutrient cycles, biodiversity and conservation, and the impact of humans on the environment.",
  lessons: [lesson31, lesson32, lesson33],
};
