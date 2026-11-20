import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ela11-u1",
  code: "1",
  title: "American Literature",
  description: "Trace how Puritan, Romantic, and Transcendentalist ideas develop, analyze mood and ambiguity in Dark Romanticism, study how setting, narration, and irony work in realism and naturalism, and weigh structure and competing interpretations.",
  lessons: [lesson11, lesson12, lesson13],
};
