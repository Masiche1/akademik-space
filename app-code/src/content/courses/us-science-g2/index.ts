import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usScienceG2: Course = {
  id: "us-science-g2",
  title: "Grade 2 Science",
  shortTitle: "Science G2",
  grade: "Grade 2",
  framework: "Next Generation Science Standards",
  description: "Explore forces and motion, matter properties, light and sound; plant and animal needs, life cycles and habitats; weather patterns and Earth's resources.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "science", grade: 2 },
};
