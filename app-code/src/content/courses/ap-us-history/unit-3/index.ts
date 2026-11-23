import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { lesson34 } from "./lesson-3-4.ts";

export const unit3: Unit = {
  id: "apush-u3",
  code: "3",
  title: "The 20th Century",
  description: "Progressivism's culmination, World Wars, the Great Depression, Cold War, and modern America.",
  lessons: [lesson31, lesson32, lesson33, lesson34],
};
