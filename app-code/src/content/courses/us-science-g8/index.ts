import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usScienceG8: Course = {
  id: "us-science-g8",
  title: "Grade 8 Science",
  shortTitle: "Science G8",
  grade: "Grade 8",
  framework: "Next Generation Science Standards (Middle School)",
  description:
    "Forces, motion and energy; waves, light and digital signals; and heredity, evolution and Earth's place in the solar system.",
  units: [unit1, unit2, unit3],
  us: { subject: "science", grade: 8 },
};
