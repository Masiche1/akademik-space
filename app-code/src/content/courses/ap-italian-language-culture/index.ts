import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";

export const apItalianLanguageCulture: Course = {
  id: "ap-italian-language-culture",
  title: "AP Italian Language and Culture",
  shortTitle: "AP Italian",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Italian language proficiency — communication skills and cultural contexts.",
  units: [unit1],
  ap: { exam: "italian-language-culture" },
};
