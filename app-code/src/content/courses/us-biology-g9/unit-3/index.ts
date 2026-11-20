import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "bio9-u3",
  code: "3",
  title: "Genetics and Heredity",
  description: "Explore how DNA stores and copies information, how genes are expressed as proteins, how cells divide by mitosis and meiosis, and how traits are inherited, predicted with probability and traced through pedigrees.",
  lessons: [lesson31, lesson32, lesson33],
};
