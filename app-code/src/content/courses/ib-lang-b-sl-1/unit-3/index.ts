import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "langb-u3",
  code: "3",
  number: 3,
  title: "Listening, Speaking and Intercultural Awareness",
  description:
    "Develop listening comprehension through note-taking, build conversation and response skills, and begin exploring intercultural understanding in communication.",
  lessons: [lesson31, lesson32, lesson33],
};
