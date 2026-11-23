import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const usScienceG8: Course = {
  id: "us-science-g8",
  title: "Grade 8 Science",
  shortTitle: "Science G8",
  grade: "Grade 8",
  framework: "Next Generation Science Standards (Middle School)",
  description:
    "Forces, motion and energy; waves, light and digital signals; and heredity, evolution and Earth's place in the solar system.",
  units: [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    unit7,
    unit8,
    unit9,
    unit10,
  ],
  us: { subject: "science", grade: 8 },
};
