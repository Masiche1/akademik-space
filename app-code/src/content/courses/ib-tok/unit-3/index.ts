import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "tok-u3",
  code: "3",
  title: "TOK Assessment and Reflection",
  description: "Prepare for the assessed TOK components: knowledge questions and the essay, the TOK exhibition, and sustained critical reflection on knowledge claims.",
  lessons: [lesson31, lesson32, lesson33],
};
