import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apSpanishLanguageCulture: Course = {
  id: "ap-spanish-language-culture",
  title: "AP Spanish Language and Culture",
  shortTitle: "AP Spanish",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Spanish language proficiency for college credit — interpersonal, interpretive, and presentational communication across cultural contexts.",
  units: [unit1],
  ap: { exam: "spanish-language-culture" },
};
