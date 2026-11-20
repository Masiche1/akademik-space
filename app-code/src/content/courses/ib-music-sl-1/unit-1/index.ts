import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "music-u1",
  code: "1",
  title: "Music Fundamentals and Performance",
  description: "Develop core musicianship — notation, rhythm, pitch, technique and expression — and build solo and ensemble performance skills.",
  lessons: [lesson11, lesson12, lesson13],
};
