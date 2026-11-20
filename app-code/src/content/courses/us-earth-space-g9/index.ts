import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usEarthSpaceG9: Course = {
  id: "us-earth-space-g9",
  title: "Earth and Space Science",
  shortTitle: "Earth and Space",
  grade: "Grade 9",
  framework: "Next Generation Science Standards (High School Earth and Space Science)",
  description:
    "Stars, the Big Bang and orbits; Earth's interior, plate tectonics, water and climate systems; and resources, hazards and climate change.",
  units: [unit1, unit2, unit3],
  us: { subject: "earth-space", grade: 9 },
};
