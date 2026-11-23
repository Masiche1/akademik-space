import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "bio11-u3",
  code: "3",
  title: "Evolution and Ecology",
  description: "Explore natural selection, speciation, ecosystems and human impact.",
  lessons: [lesson31, lesson32, lesson33],
};
