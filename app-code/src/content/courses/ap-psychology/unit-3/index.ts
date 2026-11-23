import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "appsych-u3",
  code: "3",
  title: "Motivation, Emotion, and Personality",
  description: "Drive theories, emotion, personality theories, and stress.",
  lessons: [lesson31, lesson32],
};
