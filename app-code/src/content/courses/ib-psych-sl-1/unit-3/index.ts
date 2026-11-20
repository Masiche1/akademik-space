import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "psych-u3",
  code: "3",
  title: "Learning, Motivation and Emotion",
  description:
    "How behaviour is learned through classical and operant conditioning and social learning; the major theories of motivation and emotion.",
  lessons: [lesson31, lesson32, lesson33],
};
